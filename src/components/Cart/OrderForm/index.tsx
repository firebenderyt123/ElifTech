import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { nameRules, emailRules, phoneRules, addressRules } from "./rules";
import { OrderFormData } from "../../../core/types/OrderForm";

type OrderFormType = {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (formData: OrderFormData) => void;
};

function OrderForm({ onSubmit }: OrderFormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>();

  const onSubmitHandler = (formData: OrderFormData) => {
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <TextField
        label="Name"
        placeholder="John Doe"
        variant="outlined"
        margin="dense"
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
        margin="dense"
        fullWidth
        {...register("email", emailRules)}
        error={!!errors.email}
        helperText={errors?.email?.message || " "}
      />

      <TextField
        label="Phone"
        type="tel"
        placeholder="38 (099) 999-99-99"
        variant="outlined"
        margin="dense"
        fullWidth
        {...register("phone", phoneRules)}
        error={!!errors.phone}
        helperText={errors?.phone?.message || " "}
      />

      <TextField
        label="Address"
        placeholder="2025 M Street, NW, Washington, DC, 20036."
        variant="outlined"
        margin="dense"
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
