import { Component } from '@angular/core';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.scss'
})
export class ViewApplicationComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  reject() {
    this.isModalOpen = false;
    
  }

  accept() {
    this.isModalOpen = false;
    
    
  }
  
}
