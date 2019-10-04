import * as React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../modules';
import { ThunkDispatch } from 'redux-thunk';
import { RootState, RootActions } from '../modules/Types';
import { Tab, Tabs } from 'react-bootstrap'
import './index.css'
import BlockDataArea from './BlockDataArea';
import TransactionDataArea from './TransactionDataArea';
import List from './List';

type OutterProps = {
  label: string;
};

type StateProps = {
  disabled: boolean;
};

type DispatchProps = {
  onChange: (key: any, type:string) => any;
  getlastData:() => any;
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
      <Tabs defaultActiveKey="last_record" id="uncontrolled-tab">
        <Tab eventKey="last_record" title="Previous Record">
          <List/>
        </Tab>
        <Tab eventKey="block" title="Block">
          <div className="row justify-content-center search-box">
            <input
              id="block-input"
              placeholder="Enter Block Id"
              className="searchbar"
              onChange={(e) => props.onChange(e.currentTarget.value, 'block')}>
            </input>
          </div>
          <BlockDataArea/>
        </Tab>
        <Tab eventKey="transaction" title="Transaction">
          <div className="row justify-content-center search-box">
            <input
              id="transaction-input"
              placeholder="Enter Transaction Id"
              className="searchbar"
              onChange={(e) => props.onChange(e.currentTarget.value, 'transaction')}>
            </input>
          </div>
          <TransactionDataArea/>
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
  getlastData: () => {dispatch(actionCreator.api.getlastData())},
});

export default connect<StateProps, DispatchProps, OutterProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(component);
