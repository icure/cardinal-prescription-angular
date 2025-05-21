import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PrescribedMedicationType } from '../../../types';
import { HealthcareParty, Patient } from '@icure/be-fhc-api';
import JsBarcode from 'jsbarcode';
import { dateDecode } from '../../../utils/date-helpers';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-prescription-document-to-print',
  imports: [NgForOf, NgIf],
  templateUrl: './prescription-document-to-print.component.html',
  styleUrl: './prescription-document-to-print.component.scss',
})
export class PrescriptionDocumentToPrintComponent
  implements OnInit, AfterViewInit
{
  @Input() prescribedMedications!: PrescribedMedicationType[];
  @Input() prescriber!: HealthcareParty;
  @Input() patient!: Patient;

  @ViewChildren('ridElements') ridElements!: QueryList<ElementRef<SVGElement>>;

  chunks: PrescribedMedicationType[][] = [];

  constructor() {}

  ngOnInit() {
    this.chunkPrescriptions();
  }

  ngAfterViewInit() {
    setTimeout(() => this.generateBarcodes()); // ensures DOM is fully rendered
  }

  // Chunk the medications into groups of 4 for display
  chunkPrescriptions() {
    const chunkSize = 4;
    const tmpChunks = [];
    for (let i = 0; i < this.prescribedMedications.length; i += chunkSize) {
      tmpChunks.push(this.prescribedMedications.slice(i, i + chunkSize));
    }
    this.chunks = tmpChunks;
  }

  // Handle barcode generation using JsBarcode
  handleRid(rid?: string, elm?: SVGElement) {
    if (elm && rid) {
      JsBarcode(elm, rid, {
        format: 'CODE128A',
        lineColor: '#000',
        width: 2,
        height: 40,
        displayValue: true,
      });
    }
  }

  // Generate barcodes for each prescription item
  generateBarcodes() {
    const elements = this.ridElements.toArray();
    this.prescribedMedications.forEach((med, idx) => {
      this.handleRid(med.rid, elements[idx]?.nativeElement);
    });
  }

  // Helper to format dates
  formatDate(date: number | undefined): string | 0 {
    return (date && dateDecode(date)?.toLocaleDateString()) ?? '-';
  }
}
