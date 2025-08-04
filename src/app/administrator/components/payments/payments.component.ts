import { Component } from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  payment = [
    {
      id: '#4342443',
      date: '09/09/2024',
      complexName: 'Uni Sport',
      amount: 10000,
      bankAccountNo: '076601086434341',
      accountHolderName: 'unisport@gmail.com',
      bankName: '12/2, ddhehddewlk fdwf',
      branchName: '12/2, ddhehddewlk fdwf',
      status: 'Success'
    },
   
  ];

  selectedPayment: any;

  openModal(payment: any) {
    this.selectedPayment = payment;
    const modalElement = document.getElementById('paymentModal');
    const modal = new window.bootstrap.Modal(modalElement);
    modal.show();
  }
}
