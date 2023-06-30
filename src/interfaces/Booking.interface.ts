import { User } from "./User.interface";

export interface Booking {
  id: number;
  user: User;
  name: string;
  no_of_guests: number;
  booking_date: string;
  booking_time: string;
  occasion: string;
}
