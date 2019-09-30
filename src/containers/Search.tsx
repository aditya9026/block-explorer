import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import * as MyTypes from "MyTypes";
import { searchBlocks } from "../actions";
import { ThunkDispatch } from "redux-thunk";

interface SearchState {
  todoInput: string;
}

interface SearchProps {
  blocks: string[];
}
interface TodoActions {
  searchBlocks: () => void;
}

class Search extends React.Component < SearchProps, SearchState > {

  handleSubmit = () => {
    // this.props.findBlocks;
  };

  handleTextChange = (e: any) => {
    // this.props.searchBlocks(e.target.value);
  };

  render() {
    return (
      <div className="search-box">
        <input onChange={this.handleTextChange} placeholder={"Search Blocks..."} />
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    blocks: store.todoSearch
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    searchBlocks: () => dispatch(searchBlocks()),
  };
};

export default connect<SearchProps, TodoActions, {blocks: string}>(
  MapStateToProps,
  mapDispatchToProps
)(Search);
