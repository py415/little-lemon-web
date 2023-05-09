import { fetchAPI, submitAPI } from "@/api";
import Button from "@/components/button/button";
import DisplayTitle from "@/components/display-title/display-title";
import Subtitle from "@/components/subtitle/subtitle";
import TextField from "@/components/text-field/text-field";
import Head from "next/head";
import { useSnackbar } from "notistack";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Select from "react-select";
import styles from "./reservations.module.scss";

const Reservations = () => {
  // Hooks
  const [timeOptions, setTimeOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);
  const [date, setDate] = useState<string>(new Date().toISOString());
  const [numOfGuests, setNumOfGuests] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedOccasion, setSelectedOccasion] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  // State
  const occasionOptions = [
    { value: "birthday", label: "Birthday" },
    { value: "engagement", label: "Engagement" },
    { value: "anniversary", label: "Anniversary" },
  ];

  useEffect(() => {
    if (date) {
      const data = fetchAPI(new Date(date));
      const timeslots = formatTimeslots(data);
      setTimeOptions(timeslots);
    }
  }, [date]);

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

  const handleDate = (event: ChangeEvent<HTMLInputElement>) =>
    setDate(event.target.value);

  const handleNumOfDiners = (event: ChangeEvent<HTMLInputElement>) =>
    setNumOfGuests(Number(event.target.value));

  const reset = () => {
    setDate(new Date().toISOString());
    setNumOfGuests(1);
    setSelectedTime(null);
    setSelectedOccasion(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    submitAPI({
      date,
      selectedTime,
      numOfGuests,
      selectedOccasion,
    });
    reset();
    enqueueSnackbar("Reservation confirmed! We look forward to seeing you!", {
      anchorOrigin: {
        horizontal: "center",
        vertical: "top",
      },
      variant: "success",
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
            type="date"
            placeholder="Date"
            label="Date"
            name="date"
            value={date}
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
            label="Number of guests"
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

export default Reservations;
