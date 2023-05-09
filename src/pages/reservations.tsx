import Button from "@/components/button/button";
import DisplayTitle from "@/components/display-title/display-title";
import Subtitle from "@/components/subtitle/subtitle";
import TextField from "@/components/text-field/text-field";
import Head from "next/head";
import { useSnackbar } from "notistack";
import { ChangeEvent, FormEvent, useState } from "react";
import Select from "react-select";
import styles from "./reservations.module.scss";

const Reservations = () => {
  // Hooks
  const [date, setDate] = useState<string>("");
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
  const timeOptions = [
    { value: "06:00", label: "6:00 AM" },
    { value: "06:30", label: "6:30 AM" },
    { value: "07:00", label: "7:00 AM" },
    { value: "07:30", label: "7:30 AM" },
    { value: "08:00", label: "8:00 AM" },
    { value: "08:30", label: "8:30 AM" },
    { value: "09:00", label: "9:00 AM" },
    { value: "09:30", label: "9:30 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "10:30", label: "10:30 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "11:30", label: "11:30 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "12:30", label: "12:30 PM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "13:30", label: "1:30 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "14:30", label: "2:30 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "15:30", label: "3:30 PM" },
    { value: "16:00", label: "4:00 PM" },
    { value: "16:30", label: "4:30 PM" },
    { value: "17:00", label: "5:00 PM" },
    { value: "17:30", label: "5:30 PM" },
    { value: "18:00", label: "6:00 PM" },
    { value: "18:30", label: "6:30 PM" },
    { value: "19:00", label: "7:00 PM" },
    { value: "19:30", label: "7:30 PM" },
    { value: "20:00", label: "8:00 PM" },
    { value: "20:30", label: "8:30 PM" },
    { value: "21:00", label: "9:00 PM" },
    { value: "21:30", label: "9:30 PM" },
    { value: "22:00", label: "10:00 PM" },
  ];
  const occasionOptions = [
    { value: "birthday", label: "Birthday" },
    { value: "engagement", label: "Engagement" },
    { value: "anniversary", label: "Anniversary" },
  ];

  const handleDate = (event: ChangeEvent<HTMLInputElement>) =>
    setDate(event.target.value);

  const handleNumOfDiners = (event: ChangeEvent<HTMLInputElement>) =>
    setNumOfGuests(Number(event.target.value));

  const reset = () => {
    setDate("");
    setNumOfGuests(1);
    setSelectedTime(null);
    setSelectedOccasion(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
