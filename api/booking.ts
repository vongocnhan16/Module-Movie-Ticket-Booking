import { User } from './user';
import { MovieSchedule } from './movieSchedule';

export class Booking {
  private status: string = "Pending";

  constructor(
    private bookingId: string,
    private user: User,
    private movieSchedule: MovieSchedule,
    private seats: string[],
    private price: number
  ) {}

  // Comment test
  confirmBooking(): void {
    this.status = "Confirmed";
    this.movieSchedule.reduceSeats(this.seats.length);
    console.log(`Booking ${this.bookingId} successful!`);
  }

  // get method
  getPrice(): number { return this.price; }
  getStatus(): string { return this.status; }
  getBookingId(): string { return this.bookingId; }
}