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
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [numOfDiners, setNumOfDiners] = useState<number>(1);
  const [contactNumber, setContactNumber] = useState<string>("");
  const [selectOccasion, setSelectedOccasion] = useState<{
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

  const handleFirstName = (event: ChangeEvent<HTMLInputElement>) =>
    setFirstName(event.target.value);

  const handleLastName = (event: ChangeEvent<HTMLInputElement>) =>
    setLastName(event.target.value);

  const handleNumOfDiners = (event: ChangeEvent<HTMLInputElement>) =>
    setNumOfDiners(Number(event.target.value));

  const handleContactNumber = (event: ChangeEvent<HTMLInputElement>) =>
    setContactNumber(event.target.value);

  const reset = () => {
    setFirstName("");
    setLastName("");
    setNumOfDiners(1);
    setContactNumber("");
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
            type="text"
            placeholder="First Name"
            label="First Name"
            name="first-name"
            value={firstName}
            onChange={handleFirstName}
          />

          <TextField
            type="text"
            placeholder="Last Name"
            label="Last Name"
            name="last-name"
            value={lastName}
            onChange={handleLastName}
          />

          <TextField
            type="number"
            min="1"
            max="20"
            placeholder="Number of Diners"
            label="Number of Diners"
            name="num-of-diners"
            value={numOfDiners}
            onChange={handleNumOfDiners}
          />

          <TextField
            type="text"
            placeholder="Contact Number"
            label="Contact Number"
            name="contact-num"
            value={contactNumber}
            onChange={handleContactNumber}
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
            defaultValue={selectOccasion}
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
