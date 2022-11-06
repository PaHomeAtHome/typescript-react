import React, { useState } from "react";
import { IItem } from "../types/todo";

type OnlyTitle = Pick<IItem, "title">;

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

const AddTodo: React.FC<IProps> = (props) => {
  const [todo, titleTodo] = useState<Partial<OnlyTitle>>({});

  function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    titleTodo({ title: e.target.value });
  }

  function submitHander(e: React.FormEvent) {
    e.preventDefault();
    if (!todo.title) {
      return;
    }

    props.onAddTodo(todo as IItem);
  }
  return (
    <form onSubmit={submitHander}>
      <div>
        <span>Add title</span>
        <input type="text" id="add-todo" onChange={titleHandler}></input>
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
