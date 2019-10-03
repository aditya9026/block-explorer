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
  onClick: (key: any) => any;
};

type Props = OutterProps & StateProps & DispatchProps;

const component: React.SFC<Props> = (props: Props) => {

  return (
    <div className="container search-box">
      <div className="row justify-content-center">
        <input
          className="searchbar"
          type="number"
          onChange={(e) => props.onClick(e.currentTarget.value)}></input>
        <button
          className="button"
          // onClick={(e) => props.onClick(e.target)}
          // disabled={props.disabled}
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
  onClick: (key: any) => { dispatch(actionCreator.api.getData(key)) },
});

export default connect<StateProps, DispatchProps, OutterProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(component);
