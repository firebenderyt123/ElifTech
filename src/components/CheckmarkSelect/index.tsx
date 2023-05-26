import { useState, useCallback } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "100%",
      maxWidth: 250,
    },
  },
};

type Item = {
  id: number;
  name: string;
  [key: string]: any;
};

type CheckmarkSelectProps = {
  label: string;
  itemList: Item[];
  // eslint-disable-next-line no-unused-vars
  onClose?: (itemIds: number[]) => void;
};

export default function CheckmarkSelect({
  label,
  itemList,
  onClose,
}: CheckmarkSelectProps) {
  const [itemNames, setItemNames] = useState<string[]>([]);
  const [itemIds, setItemIds] = useState<number[]>([]);

  const handleChange = useCallback(
    (event: SelectChangeEvent<typeof itemNames>) => {
      const {
        target: { value },
      } = event;
      const id = +value[value.length - 1] || +value;
      const name = itemList.find((item) => item.id === id)?.name;
      setItemIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
      setItemNames((prev) =>
        name
          ? prev.includes(name)
            ? prev.filter((i) => i !== name)
            : [...prev, name]
          : prev
      );
    },
    [itemList]
  );

  const onCloseHandler = useCallback(() => {
    onClose && onClose(itemIds);
  }, [itemIds, onClose]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: "300px", maxWidth: "100%" }}>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple
          value={itemNames}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          onClose={onCloseHandler}>
          {itemList.map((item: Item) => (
            <MenuItem key={item.name} value={item.id}>
              <Checkbox checked={itemNames.indexOf(item.name) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
