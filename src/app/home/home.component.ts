import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../components/form-elements/button/button.component';
import { CommonModule } from '@angular/common';
import { PrescriptionModalComponent } from '../components/prescription-modal/prescription-modal.component';
import { SamSdkService } from '../services/api/sam-sdk.service';
import { SamVersion } from '@icure/cardinal-be-sam';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, PrescriptionModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  samVersion: SamVersion | undefined;

  constructor(private samSdkService: SamSdkService) {}

  // Prescription Modal
  isPrescriptionModalOpen = false;

  async ngOnInit() {
    await this.samSdkService.initialize();
    this.samVersion = await this.samSdkService.getSamVersion();
  }

  togglePrescriptionModalOpen() {
    this.isPrescriptionModalOpen = !this.isPrescriptionModalOpen;
  }

  handlePrescriptionModalSubmit() {
    console.log('submit');
    this.isPrescriptionModalOpen = false;
  }
  handlePrescriptionModalClose() {
    console.log('close');
    this.isPrescriptionModalOpen = false;
  }
}
