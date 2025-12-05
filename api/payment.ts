import { Booking } from './booking';

export class Payment {
  private status: string = "Pending";

  constructor(
    private paymentId: string,
    private booking: Booking,
    private method: string
  ) {}

  processPayment(): void {
    if (this.booking.getStatus() === "Confirmed") {
      this.status = "Completed";
      console.log(`Thanh toán ${this.paymentId} hoàn tất ($${this.booking.getPrice()})`);
    }
  }

  getStatus(): string { return this.status; }
}

export enum Currency {
    VND = "VND",
    USD = "USD"
}