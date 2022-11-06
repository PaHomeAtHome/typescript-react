import React from "react";

import { IItem } from "../types/todo";

interface IProps {
  todos: IItem[];
}

// interface IState {
//   count: number;
// }

const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((item) => (
        <li key={item.id}>
          <div>{item.id}</div>
          <div>{item.title}</div>
        </li>
      ))}
    </ul>
  );
};

// class TodoList extends React.Component<IProps, IState> {
//   stateHandler() {
//     this.setState(({ count }) => {});
//   }
//   render() {
//     return null;
//   }
// }

export default TodoList;
