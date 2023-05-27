import React from "react";
import { useForm, RegisterOptions } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type FormValues = {
  address: string;
  name: string;
  email: string;
  phone: string;
};

const nameRules: RegisterOptions = {
  required: "This field is required",
  minLength: {
    value: 2,
    message: "Min length of name is 2 chars",
  },
  maxLength: {
    value: 18,
    message: "Max length of name is 18 chars",
  },
  pattern: {
    value: /^[a-z\s]{2,18}$/i,
    message: "Invalid name",
  },
};

const emailRules: RegisterOptions = {
  required: "This field is required",
  pattern: {
    value: /^[a-z0-9_]+@[a-z0-9]{2,11}.[a-z]{2,7}$/i,
    message: "Invalid email",
  },
};

const phoneRules: RegisterOptions = {
  required: "This field is required",
  pattern: {
    value: /^[0-9]{9,10}$/i,
    message: "Invalid phone",
  },
};

const addressRules: RegisterOptions = {
  required: "This field is required",
  minLength: {
    value: 10,
    message: "Min length of address is 10 chars",
  },
  maxLength: {
    value: 50,
    message: "Max length of address is 50 chars",
  },
  pattern: {
    value: /^[a-z0-9,-.\s/]{10,50}$/i,
    message: "Invalid address",
  },
};

function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        placeholder="John Doe"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("name", nameRules)}
        error={!!errors.name}
        helperText={errors?.name?.message || " "}
      />

      <TextField
        label="Email"
        type="email"
        placeholder="delivery@shop.ua"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("email", emailRules)}
        error={!!errors.email}
        helperText={errors?.email?.message || ""}
      />

      <TextField
        label="Phone"
        type="tel"
        placeholder="38 (099) 999-99-99"
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("email", phoneRules)}
        error={!!errors.phone}
        helperText={errors?.phone?.message || " "}
      />

      <TextField
        label="Address"
        placeholder="2025 M Street, NW, Washington, DC, 20036."
        variant="outlined"
        margin="normal"
        fullWidth
        {...register("address", addressRules)}
        error={!!errors.address}
        helperText={errors?.address?.message || " "}
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </form>
  );
}

export default OrderForm;
