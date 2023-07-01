import Button from "@/components/button/button";
import DisplayTitle from "@/components/display-title/display-title";
import ReservationIconAndText from "@/components/reservation-icon-and-text/reservation-icon-and-text";
import Subtitle from "@/components/subtitle/subtitle";
import { useAuth } from "@/contexts/AuthContext";
import { useBookings } from "@/contexts/BookingsContext";
import useAxios from "@/hooks/useAxios";
import { Booking } from "@/interfaces/Booking.interface";
import { BOOKING_API } from "@/utils/constants";
import { format, parseISO } from "date-fns";
import dayjs from "dayjs";
import Head from "next/head";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import {
  FaBirthdayCake,
  FaCalendar,
  FaCalendarDay,
  FaClock,
  FaIdBadge,
  FaIdCard,
  FaRing,
  FaUsers,
  FaWineGlass,
} from "react-icons/fa";
import styles from "./reservations.module.scss";

const Reservations = () => {
  // Hooks
  const { authTokens } = useAuth();
  const { bookings, setBookings } = useBookings();
  const api = useAxios();
  const { enqueueSnackbar } = useSnackbar();

  const fetchBookings = () => {
    return api
      .get<Booking[]>(BOOKING_API)
      .then((response) => {
        const data = response.data;

        if (data) {
          setBookings(data);
        }
      })
      .catch((error) => {
        enqueueSnackbar(error.message, {
          anchorOrigin: {
            horizontal: "center",
            vertical: "top",
          },
          variant: "error",
        });
      });
  };

  const getOccasionIcon = (occasion: string) => {
    switch (occasion) {
      case "Birthday":
        return FaBirthdayCake;
      case "Engagement":
        return FaRing;
      case "Anniversary":
        return FaWineGlass;
      default:
        return FaCalendar;
    }
  };

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);

    return format(date, "MMM do");
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const handleEdit = () => {
    enqueueSnackbar("Edit reservation coming soon", {
      anchorOrigin: {
        horizontal: "center",
        vertical: "top",
      },
      variant: "info",
    });
  };

  const handleCancel = (reservationId: number) => {
    api
      .delete(`${BOOKING_API}${reservationId}`)
      .then(() => {
        enqueueSnackbar("Successfully canceled reservation!", {
          anchorOrigin: {
            horizontal: "center",
            vertical: "top",
          },
          variant: "success",
        });
        fetchBookings();
      })
      .catch((error) => {
        enqueueSnackbar(error.message, {
          anchorOrigin: {
            horizontal: "center",
            vertical: "top",
          },
          variant: "error",
        });
      });
  };

  useEffect(() => {
    if (authTokens) {
      fetchBookings();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authTokens]);

  return (
    <div className={styles.reservations}>
      <Head>
        <title>My Reservations | Little Lemon</title>
      </Head>

      <div className={styles.feed}>
        <DisplayTitle className={styles.title}>Little Lemon</DisplayTitle>
        <Subtitle className={styles.subtitle}>My Reservations</Subtitle>

        <ul className={styles.tiles}>
          {bookings.map((booking) => {
            const {
              booking_date,
              booking_time,
              id,
              name,
              no_of_guests,
              occasion,
            } = booking;
            const isExpired = dayjs(booking_date).diff(dayjs(), "day") < 0;

            return (
              <li
                key={id}
                className={[styles.tile, isExpired && "opacity-75"].join(" ")}
              >
                <ReservationIconAndText
                  title="Reservation ID"
                  description={id.toString()}
                  icon={FaIdBadge}
                />

                <ReservationIconAndText
                  title="Date"
                  description={formatDate(booking_date)}
                  icon={FaCalendarDay}
                />

                <ReservationIconAndText
                  title="Time"
                  description={formatTime(booking_time)}
                  icon={FaClock}
                />

                <ReservationIconAndText
                  title="Name"
                  description={name}
                  icon={FaIdCard}
                />

                <ReservationIconAndText
                  title="Number of Guests"
                  description={no_of_guests.toString()}
                  icon={FaUsers}
                />

                <ReservationIconAndText
                  title="Occasion"
                  description={occasion}
                  icon={getOccasionIcon(occasion)}
                />

                {!isExpired && (
                  <Button onClick={() => handleCancel(id)}>Cancel</Button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default Reservations;
