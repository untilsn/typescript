import useTodoApp from "../hooks/useTodos";

const Text = ({ item }: { item: string }) => {
  return <h2 className="text-2xl font-bold">{item}</h2>;
};

const TodoAppClone = () => {
  const { handleAddNote, handleRemove, inputRef, todos } = useTodoApp([]);
  return (
    <div className="p-20">
      <Text item="to do app"></Text>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-5 px-3 mt-10 bg-gray-100 rounded-2xl justify-between max-w-[450px] w-full"
        >
          <div className="p-4 ">{todo.text}</div>
          <button
            onClick={() => handleRemove(todo.id)}
            className="p-2 text-white capitalize bg-red-700 rounded-2xl"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex items-center gap-10 mt-10">
        <input
          ref={inputRef}
          className="border outline-none rounded-lg p-3 border-black max-w-[300px] w-full"
          placeholder="enter your note here..."
          type="text"
          name=""
          id=""
        />
        <button
          onClick={handleAddNote}
          className="p-3 text-white uppercase bg-blue-700 rounded-2xl "
          type="submit"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default TodoAppClone;
