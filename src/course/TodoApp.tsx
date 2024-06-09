import React, { useReducer } from "react";

const Title = ({ text }: { text: string }) => {
  return <h2 className="text-2xl font-bold capitalize">{text}</h2>;
};

const TodoApp = () => {
  interface ITodo {
    id: number;
    text: string;
  }
  type ActionType =  
  |  {type: "ADD"; text: string} 
   | {type: "REMOVE"; id: number};
  
   const initialState: ITodo[] = [];

  const todoReducer = (state: any, action: ActionType) => {
    switch (action.type) {
      case "ADD":
      return [
        ...state,
        {
          id: state.length,
          text: action.text
        }
      ]
      case "REMOVE": 
      return state.filter((todo: ITodo) => todo.id !== action.id)
    default: 
     throw new Error("error")
    }
    }
  };
  const [todos, dispatch] = useReducer(todoReducer, initialState);




  return (
    <div className="p-20">
      <Title text="todo app clone"></Title>
      <div className="flex items-center justify-between gap-5 p-2 px-3 bg-slate-50 rounded-2xl mt-10  max-w-[500px] w-full">
        <div>asdfadsfa</div>
        <button className="p-3 text-white capitalize bg-red-500 rounded-2xl">
          remove
        </button>
      </div>
      <div className="flex items-center justify-between gap-5 p-4   max-w-[400px] w-full">
        <input
          type="text"
          className="w-full p-4 border outline-none rounded-2xl "
          placeholder="Enter your note here..."
        />
        <button className="p-3 text-white capitalize bg-blue-800 rounded-2xl">
          add
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
