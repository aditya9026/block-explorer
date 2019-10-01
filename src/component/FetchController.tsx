import * as React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../modules';
import { ThunkDispatch } from 'redux-thunk';
import { RootState, RootActions } from '../modules/Types';
import './index.css'

type OutterProps = {
  label: string;
};

type StateProps = {
  disabled: boolean;
};

type DispatchProps = {
  onClick: () => void;
};

type Props = OutterProps & StateProps & DispatchProps;

const component: React.SFC<Props> = (props: Props) => {
  return (
    <div className="container search-box">
      <div className="row justify-content-center">
        <input className="searchbar" type="text" name="" placeholder="Search..."></input>
        <button
          className="button"
          onClick={_ => { props.onClick(); }}
          disabled={props.disabled}
        >
          {props.label}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  disabled: state.api.onFetch,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>
): DispatchProps => ({
  onClick: () => {
    dispatch(actionCreator.api.getData(123));
  },
});

export default connect<StateProps, DispatchProps, OutterProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(component);
