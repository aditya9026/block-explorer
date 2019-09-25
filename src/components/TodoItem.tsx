import * as React from "react";

interface TodoItemProps {
  item: string;
  idx: number;
  handleSearch: (idx: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = props => {
  return (
    <div>
      <span>
        <button onClick={() => props.handleSearch(props.idx)}>X</button>
      </span>
    </div>
  );
};
