import { Component } from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrl: './pending-payments.component.scss',
})
export class PendingPaymentsComponent {
  payment = [
    {
      id: '#4342443',
      date: '09/09/2024',
      partnerId: '#423434324432432',
      partnerName: 'Uni Sport',
      lastPaymentDate: '09/09/2024',
      amount: '10000',
      bankAccountNo: '0768018634341',
      accountHolderName: 'unisport@gmail.com',
      bankName: '12/2, ddhedhdwelk fdfwf.',
      branchName: '12/2, ddhedhdwelk fdfwf.',
      status: 'Pending',
    },
  ];

  selectedPayment: any = null;

  openPaymentModal(payment: any) {
    this.selectedPayment = payment;
    const modalElement = document.getElementById('paymentModal');
    const modal =new window.bootstrap.Modal(modalElement);
    modal.show();
  }

  confirmPayment() {
    
    alert('Payment confirmed for ' + this.selectedPayment.partnerName);
    const modalElement = document.getElementById('paymentModal');
    const modal =new window.bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Handle file upload logic here
    console.log(file);
  }
}
