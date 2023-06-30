import { fetchAPI } from "@/api";
import Button from "@/components/button/button";
import DisplayTitle from "@/components/display-title/display-title";
import Subtitle from "@/components/subtitle/subtitle";
import TextField from "@/components/text-field/text-field";
import useAxios from "@/hooks/useAxios";
import { BOOKING_API } from "@/utils/constants";
import Head from "next/head";
import { useSnackbar } from "notistack";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Select from "react-select";
import styles from "./book-table.module.scss";

const BookTable = () => {
  // Hooks
  const currentDate = new Date().toISOString().substring(0, 10);
  const [timeOptions, setTimeOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);
  const [name, setName] = useState("");
  const [bookingDate, setBookingDate] = useState<string>(currentDate);
  const [selectedTime, setSelectedTime] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [numOfGuests, setNumOfGuests] = useState<number>(1);
  const [selectedOccasion, setSelectedOccasion] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  const api = useAxios();
  // State
  const occasionOptions = [
    { value: "birthday", label: "Birthday" },
    { value: "engagement", label: "Engagement" },
    { value: "anniversary", label: "Anniversary" },
  ];

  useEffect(() => {
    if (bookingDate) {
      const data = fetchAPI(new Date(bookingDate));
      const timeslots = formatTimeslots(data);
      setTimeOptions(timeslots);
    }
  }, [bookingDate]);

  const formatTimeslots = (timeslots: string[]) => {
    return timeslots.map((time) => {
      const [hourStr, minuteStr] = time.split(":");
      const hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);

      const date = new Date();
      date.setHours(hour, minute);

      const hour12 = date.getHours() % 12 || 12;
      const amPm = date.getHours() >= 12 ? "PM" : "AM";

      const label = `${hour12}:${minuteStr} ${amPm}`;

      return {
        value: time,
        label,
      };
    });
  };

  const handleName = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const handleDate = (event: ChangeEvent<HTMLInputElement>) =>
    setBookingDate(event.target.value);

  const handleNumOfDiners = (event: ChangeEvent<HTMLInputElement>) =>
    setNumOfGuests(Number(event.target.value));

  const reset = () => {
    setBookingDate(new Date().toISOString());
    setNumOfGuests(1);
    setSelectedTime(null);
    setSelectedOccasion(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      name,
      no_of_guests: numOfGuests,
      booking_date: bookingDate,
      booking_time: selectedTime?.value,
      occasion: selectedOccasion?.label,
    };

    api
      .post(BOOKING_API, data)
      .then((response) => {
        const data = response.data;

        if (data) {
          reset();
          enqueueSnackbar(
            "Reservation confirmed! We look forward to seeing you!",
            {
              anchorOrigin: {
                horizontal: "center",
                vertical: "top",
              },
              variant: "success",
            }
          );
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

  return (
    <>
      <Head>
        <title>Reserve a Table | Little Lemon</title>
      </Head>

      <div className={styles.reservations}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <DisplayTitle className={styles.title}>Little Lemon</DisplayTitle>
          <Subtitle className={styles.subtitle}>Reserve a table</Subtitle>

          <TextField
            type="text"
            placeholder="Name"
            label="Name"
            name="name"
            value={name}
            onChange={handleName}
          />

          <TextField
            type="date"
            placeholder="Date"
            label="Date"
            name="date"
            value={bookingDate}
            defaultValue={bookingDate}
            min={currentDate}
            onChange={handleDate}
          />

          <label htmlFor="time">Time</label>
          <Select
            classNames={{
              control: () => styles.select__control,
              menu: () => styles.select__menu,
              option: (state) =>
                state.isFocused
                  ? styles["select__option--focused"]
                  : styles.select__option,
            }}
            defaultValue={selectedTime}
            onChange={setSelectedTime}
            options={timeOptions}
            name="time"
            id="time"
            instanceId="time"
          />

          <TextField
            type="number"
            min="1"
            max="20"
            placeholder="Number of guests"
            label="Number of guests (20 max)"
            name="num-of-guests"
            value={numOfGuests}
            onChange={handleNumOfDiners}
          />

          <label htmlFor="occasion">Occasion</label>
          <Select
            classNames={{
              control: () => styles.select__control,
              menu: () => styles.select__menu,
              option: (state) =>
                state.isFocused
                  ? styles["select__option--focused"]
                  : styles.select__option,
            }}
            defaultValue={selectedOccasion}
            onChange={setSelectedOccasion}
            options={occasionOptions}
            name="occasion"
            id="occasion"
            instanceId="occasion"
          />

          <div className={styles.btn__cntr}>
            <Button type="submit">Confirm Reservation</Button>
          </div>
        </form>
      </div>

      <hr />
    </>
  );
};

export default BookTable;
