import { Component } from '@angular/core';
import { ButtonComponent } from '../components/form-elements/button/button.component';
import { CommonModule } from '@angular/common';
import { PrescriptionModalComponent } from '../components/prescription-modal/prescription-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, PrescriptionModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isPrescriptionModalOpen = false;

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
