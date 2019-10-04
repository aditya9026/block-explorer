import * as React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../modules';
import { ThunkDispatch } from 'redux-thunk';
import { RootState, RootActions } from '../modules/Types';
import { Tab, Tabs } from 'react-bootstrap'
import './index.css'
import DataArea from './DataArea';
type OutterProps = {
  label: string;
};

type StateProps = {
  disabled: boolean;
};

type DispatchProps = {
  onChange: (key: any, type:string) => any;
};

type Props = OutterProps & StateProps & DispatchProps;

const component: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      <div>
        <div className="text-center">
          <div className="head-title">Block Explorer</div>
        </div>
      </div>
      <Tabs defaultActiveKey="explorer" id="uncontrolled-tab">
        <Tab eventKey="last transactions" title="Previous Record">
          {'In progress'}
        </Tab>
        <Tab eventKey="Block" title="Block">
          <div className="row justify-content-center search-box">
            <input
              id="fee_price"
              placeholder="Enter fee fraction"
              className="searchbar"
              onChange={(e) => props.onChange(e.currentTarget.value, 'block')}>
            </input>
          </div>
          <DataArea />
        </Tab>
        <Tab eventKey="Transaction" title="Transaction">
          <div className="row justify-content-center search-box">
            <input
              id="fee_price"
              placeholder="Enter fee fraction"
              className="searchbar"
              onChange={(e) => props.onChange(e.currentTarget.value, 'transaction')}>
            </input>
          </div>
          <DataArea />
        </Tab>
      </Tabs>
    </div >
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  disabled: state.api.onFetch,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>
): DispatchProps => ({
  onChange: (key: any, type:string) => { dispatch(actionCreator.api.getData(key, type)) },
});

export default connect<StateProps, DispatchProps, OutterProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(component);
