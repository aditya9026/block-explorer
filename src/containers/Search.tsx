import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions";

interface SearchState {
  todoInput: string;
}

interface SearchProps {
  list: string[];
  findBlocks: (block: string) => object;
}

class Search extends React.Component < SearchProps, SearchState > {

  handleTextChange = (e: any) => {
    this.props.findBlocks(e.target.value);
  };

  handleSubmit = () => {
    // this.props.findBlocks();
  };

  render() {
    return (
      <div className="search-box">
        <input
          onChange={this.handleTextChange}
          placeholder={"Search Blocks..."}
        />
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    list: store.todo.list
  };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  findBlocks: (param: string) => dispatch({ type: actionTypes.FIND, payload: param }),
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Search);
