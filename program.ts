import { Movie, MovieSchedule } from './api/movieSchedule';
import { User } from './api/user';
import { Booking } from './api/booking';
import { Payment } from './api/payment';
import { CINEMA_NAME } from './api/contants';
console.log(`Welcome to ${CINEMA_NAME} Booking System`);

// Mock Data
const movie = new Movie("M001", "Avatar", "Sci-Fi");
const schedule = new MovieSchedule("SCH001", movie, "19:00", 50);

const user = new User("U001", "Steve Vo", "steve@squaregroup.tech");

const booking = new Booking("BK001", user, schedule, ["A1", "A2"], 200000);

const payment = new Payment("PAY001", booking, "Credit Card");

console.log("========== MOVIE TICKET BOOKING SYSTEM ==========\n");

console.log("1. Movie & Schedule:");
movie.getTitle();
schedule.displaySchedule();

console.log("\n2. User Info:");
user.displayInfo();

console.log("\n3. Booking:");
booking.confirmBooking();
console.log(`Giá: ${booking.getPrice()}`);

console.log("\n4. Payment:");
payment.processPayment();