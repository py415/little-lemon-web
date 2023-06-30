import Button from "@/components/button/button";
import DisplayTitle from "@/components/display-title/display-title";
import ReservationIconAndText from "@/components/reservation-icon-and-text/reservation-icon-and-text";
import Subtitle from "@/components/subtitle/subtitle";
import { useAuth } from "@/contexts/AuthContext";
import useAxios from "@/hooks/useAxios";
import { Booking } from "@/interfaces/Booking.interface";
import { BOOKING_API } from "@/utils/constants";
import { format, parseISO } from "date-fns";
import Head from "next/head";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import {
  FaBirthdayCake,
  FaCalendar,
  FaCalendarDay,
  FaClock,
  FaIdCard,
  FaRing,
  FaUsers,
  FaWineGlass,
} from "react-icons/fa";
import styles from "./my-reservations.module.scss";

const MyReservations = () => {
  // Hooks
  const [reservations, setReservations] = useState<Booking[]>([]);
  const { authTokens } = useAuth();
  const api = useAxios();
  const { enqueueSnackbar } = useSnackbar();

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

  const handleCancel = () => {
    enqueueSnackbar("Cancel reservation coming soon", {
      anchorOrigin: {
        horizontal: "center",
        vertical: "top",
      },
      variant: "info",
    });
  };

  useEffect(() => {
    if (authTokens) {
      api
        .get<Booking[]>(BOOKING_API)
        .then((response) => {
          const data = response.data;

          if (data) {
            setReservations(data);
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authTokens]);

  return (
    <div className={styles.my__reservations}>
      <Head>
        <title>My Reservations | Little Lemon</title>
      </Head>

      <div className={styles.reservations}>
        <DisplayTitle className={styles.title}>Little Lemon</DisplayTitle>
        <Subtitle className={styles.subtitle}>My Reservations</Subtitle>

        <ul className={styles.tiles}>
          {reservations.map((reservation) => {
            const {
              booking_date,
              booking_time,
              id,
              name,
              no_of_guests,
              occasion,
            } = reservation;

            return (
              <li key={id} className={styles.tile}>
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

                <div className={styles.btn__cntr}>
                  <Button onClick={handleEdit}>Edit</Button>
                  <Button onClick={handleCancel}>Cancel</Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <hr className={styles.hr} />
    </div>
  );
};

export default MyReservations;
