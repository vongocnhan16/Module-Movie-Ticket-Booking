export class Movie {
  constructor(private id: string, private title: string, private genre: string) {}

  getTitle(): string { return this.title; }
  getId(): string { return this.id; }
}

export class MovieSchedule {
  constructor(
    private scheduleId: string,
    private movie: Movie,
    private showTime: string,
    private availableSeats: number
  ) {}

  displaySchedule(): void {
    console.log(`[${this.scheduleId}] ${this.movie.getTitle()} - ${this.showTime} - Ghế: ${this.availableSeats}`);
  }

  getAvailableSeats(): number { return this.availableSeats; }
  reduceSeats(count: number): void { this.availableSeats -= count; }
  getScheduleId(): string { return this.scheduleId; }
}