import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions";

interface SearchState {
  todoInput: string;
}

interface SearchProps {
  todoList: string[];
  addToDo: (item: string) => object;
}

class Search extends React.Component < SearchProps, SearchState > {
  constructor(props: any) {
    super(props);
    this.state = {
      todoInput: ""
    };
  }

  handleTextChange = (e: any) => {
    this.setState({
      todoInput: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.addToDo(this.state.todoInput);
    this.setState({
      todoInput: ""
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleTextChange}
          placeholder={"Search Transactions..."}
          value={this.state.todoInput}
        />
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    todoList: store.todo.list
  };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  addToDo: (item: string) => dispatch({ type: actionTypes.ADD, payload: item }),
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Search);
