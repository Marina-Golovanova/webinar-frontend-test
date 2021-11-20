import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useTodoItems } from "./TodoItemsContext";
import { useContext } from "react";
import { TagContext } from "./context";

export const isString = (item: any): item is string => {
  return typeof item === "string";
};

type AutoCompleteFieldProps<T> = {
  selectValue: keyof T;
  options: T[];
};

const AutoCompleteField = <T extends {}>({
  selectValue,
  options,
}: AutoCompleteFieldProps<T>): React.ReactElement => {
  const { setTag } = useContext(TagContext);
  return (
    <Autocomplete<T>
      options={options}
      fullWidth
      onChange={(event, newValue) => {
        if (!newValue) {
          setTag("");
        }
      }}
      getOptionLabel={(option: any) => {
        if (isString(option[selectValue])) {
          setTag(option[selectValue]);
          return option[selectValue];
        } else {
          return "";
        }
      }}
      renderInput={(params) => <TextField {...params} label="Filter by tag" />}
    />
  );
};

export function TodoFilter() {
  const { todoItems } = useTodoItems();

  const noFlatTags = todoItems.map((el) => el.tags?.split(" "));
  const flatTags = noFlatTags.flat();
  const tags: Record<"tag", string>[] = [];
  flatTags.forEach((tag) => {
    if (typeof tag === "string") {
      tags.push({ tag: tag });
    }
  });
  return (
    <AutoCompleteField<{ tag: string }> options={tags} selectValue="tag" />
  );
}
