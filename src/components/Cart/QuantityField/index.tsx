import React, { useState, useCallback, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

type QuantityFieldProps = {
  defaultValue: number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (quantity: number) => void;
  [key: string]: any;
};

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 100;

function QuantityField({
  defaultValue = 0,
  onChange,
  ...rest
}: QuantityFieldProps): JSX.Element {
  const [quantity, setQuantity] = useState<number>(defaultValue);

  const subQuantityHandler = useCallback(() => {
    setQuantity((prev) => (prev > MIN_QUANTITY ? --prev : prev));
    if (quantity > MIN_QUANTITY) onChange && onChange(quantity - 1);
  }, [onChange, quantity]);

  const quantityChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(event.target.value);
      if (newValue >= MIN_QUANTITY && newValue <= MAX_QUANTITY) {
        setQuantity(newValue);
        onChange && onChange(newValue);
      }
    },
    [onChange]
  );

  const addQuantityHandler = useCallback(() => {
    setQuantity((prev) => (prev < MAX_QUANTITY ? ++prev : prev));
    if (quantity < MAX_QUANTITY) onChange && onChange(quantity + 1);
  }, [onChange, quantity]);

  return (
    <Box display="flex" sx={{ "& input": { textAlign: "center" } }}>
      <IconButton onClick={subQuantityHandler}>
        <RemoveRoundedIcon />
      </IconButton>
      <Input
        value={quantity}
        onChange={quantityChangeHandler}
        inputProps={{
          step: 1,
          min: 0,
        }}
        {...rest}
      />
      <IconButton onClick={addQuantityHandler}>
        <AddRoundedIcon />
      </IconButton>
    </Box>
  );
}

export default React.memo(QuantityField);
