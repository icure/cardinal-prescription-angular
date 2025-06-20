import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { PrescribedMedicationType } from '../../../types';
import { Patient, HealthcareParty } from '@icure/be-fhc-api';

import { PrescriptionDocumentToPrintComponent } from '../prescription-document-to-print/prescription-document-to-print.component';
import { ButtonComponent } from '../../form-elements/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CloseIcnComponent } from '../../common/icons/close-icn/close-icn.component';
import { TranslationService } from '../../../services/translation/translation.service'; // Import JsBarcode library

@Component({
  selector: 'app-print-prescription-modal',
  imports: [
    PrescriptionDocumentToPrintComponent,
    ButtonComponent,
    ReactiveFormsModule,
    CloseIcnComponent,
  ],
  templateUrl: './print-prescription-modal.component.html',
  styleUrl: './print-prescription-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintPrescriptionModalComponent {
  @Input({ required: true }) prescribedMedications!: PrescribedMedicationType[];
  @Input({ required: true }) prescriber!: HealthcareParty;
  @Input({ required: true }) patient!: Patient;

  @Output() onCloseModal = new EventEmitter<void>(); // Emit event to close the modal
  @ViewChild('printContainer', { static: false }) printContainer!: ElementRef; // ViewChild to access print container

  constructor(private translationService: TranslationService) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  get sentPrescriptions() {
    return this.prescribedMedications.filter(item => !!item.rid);
  }

  // Print function
  print() {
    const div = this.printContainer.nativeElement;
    if (div) {
      const newDiv = div.cloneNode(true) as HTMLDivElement;
      newDiv.style.cssText = window.getComputedStyle(div).cssText;
      newDiv.id = 'new' + div.id;

      const hideFrame = document.createElement('iframe');
      hideFrame.style.display = 'none'; // Hide iframe during printing
      document.body.appendChild(hideFrame);

      hideFrame.onload = () => {
        const setPrint = () => {
          const closePrint = () => {
            document.body.removeChild(hideFrame);
          };

          if (hideFrame.contentWindow && hideFrame.contentDocument) {
            // Append stylesheets to iframe document
            const stylesheets = document.querySelectorAll(
              "link[rel='stylesheet'], style"
            );
            stylesheets.forEach(stylesheet => {
              hideFrame.contentDocument!.head.appendChild(
                stylesheet.cloneNode(true)
              );
            });

            hideFrame.contentDocument.body.appendChild(newDiv);

            hideFrame.contentWindow.onbeforeunload = closePrint;
            hideFrame.contentWindow.onafterprint = closePrint;
            hideFrame.contentWindow.print();
          }
        };
        setPrint();
      };
    }
  }
}
