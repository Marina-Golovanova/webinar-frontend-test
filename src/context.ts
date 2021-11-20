import { createContext } from "react";

export type ITagContext = {
  tag: string;
  setTag: (value: string) => void;
};

export const TagContext = createContext<ITagContext>({
  tag: "",
  setTag: () => null,
});
