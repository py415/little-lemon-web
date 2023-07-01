import { Booking } from "@/interfaces/Booking.interface";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

interface BookingsContextType {
  bookings: Booking[];
  setBookings: Dispatch<SetStateAction<Booking[]>>;
}

export const BookingsContext = createContext<BookingsContextType>({
  bookings: [],
  setBookings: () => {},
});

export const useBookings = () => useContext(BookingsContext);

interface BookingsProviderProps {
  initialBookings?: Booking[];
  children: ReactNode;
}

export const BookingsProvider: FC<BookingsProviderProps> = (props) => {
  // Props
  const { initialBookings, children } = props;
  // Hooks
  const [bookings, setBookings] = useState<Booking[]>(initialBookings || []);

  const contextValue = useMemo(
    () => ({
      bookings,
      setBookings,
    }),
    [bookings]
  );

  return (
    <BookingsContext.Provider value={contextValue}>
      {children}
    </BookingsContext.Provider>
  );
};

BookingsProvider.defaultProps = {
  initialBookings: [],
};
