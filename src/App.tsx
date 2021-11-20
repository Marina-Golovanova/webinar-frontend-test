import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { TodoItemsList } from "./TodoItems";
import { TodoFilter } from "./TodoFilter";
import { TodoItemsContextProvider } from "./TodoItemsContext";
import TodoItemForm from "./TodoItemForm";
import { useState } from "react";
import { TagContext } from "./context";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9012fe",
    },
    secondary: {
      main: "#b2aabf",
    },
  },
});

function App() {
  const [tag, setTag] = useState("");

  return (
    <TagContext.Provider value={{ tag, setTag }}>
      <TodoItemsContextProvider>
        <ThemeProvider theme={theme}>
          <Content />
        </ThemeProvider>
      </TodoItemsContextProvider>
    </TagContext.Provider>
  );
}

function Content() {
  return (
    <Container maxWidth="sm">
      <header>
        <Typography variant="h2" component="h1">
          Todo List
        </Typography>
      </header>
      <main>
        <TodoItemForm />
        <TodoFilter />
        <TodoItemsList />
      </main>
    </Container>
  );
}

export default App;
