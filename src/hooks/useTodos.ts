import { useReducer, useRef } from "react";

//todo interface (const todoReducer) B4
interface ITodo {
  id: number;
  text: string;
}
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };
//todo todoReducer B2
const todoReducer = (state: ITodo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
        },
      ];
    case "REMOVE":
      return state.filter((todo: ITodo) => todo.id !== action.id);
    default:
      throw new Error("error");
  }
};

export default function useTodoApp(inittialState: ITodo[]): {
  todos: ITodo[];
  handleRemove: (todoId: number) => void;
  handleAddNote: () => void;
  inputRef: React.LegacyRef<HTMLInputElement> | undefined;
} {
  //todo useRef input values
  const inputRef = useRef<HTMLInputElement>(null);

  //todo inittialState B3
  // const inittialState: ITodo[] = [];

  //todo useReducer B1
  const [todos, dispatch] = useReducer(todoReducer, inittialState);
  //todo handle B5
  const handleRemove = (todoId: number) => {
    dispatch({
      type: "REMOVE",
      id: todoId,
    });
  };
  const handleAddNote = () => {
    if (inputRef.current) {
      dispatch({
        type: "ADD",
        text: inputRef.current.value,
      });
      inputRef.current.value = "";
    }
  };
  return {
    todos,
    handleRemove,
    handleAddNote,
    inputRef,
  };
}
