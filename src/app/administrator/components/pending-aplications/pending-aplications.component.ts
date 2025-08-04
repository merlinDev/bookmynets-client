import { Component } from '@angular/core';

@Component({
  selector: 'app-pending-aplications',
  templateUrl: './pending-aplications.component.html',
  styleUrl: './pending-aplications.component.scss'
})
export class PendingAplicationsComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  reject() {
    this.isModalOpen = false;
    console.log('Partner Rejected');
   
  }

  accept() {
    this.isModalOpen = false;
    console.log('Partner Approved');
    
  }

}
