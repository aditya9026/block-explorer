import * as React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../modules';
import { ThunkDispatch } from 'redux-thunk';
import { RootState, RootActions } from '../modules/Types';
import { Tab, Tabs } from 'react-bootstrap'
import BlockDataArea from './BlockDataArea';
import TransactionDataArea from './TransactionDataArea';
import List from './List';
import './index.css'

interface StateProps {
  disabled: boolean;
  blockInput: string;
  transactionInput: string;
};

interface DispatchProps {
  label: string;
  onChange: (key: any, type: string) => any;
};

class FetchController extends React.Component<DispatchProps, StateProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      blockInput: '',
      transactionInput: '',
      disabled: false
    }
  }
  onSelect() {
    this.setState({ blockInput: '', transactionInput: '' })
  }

  onTextChange(v: string, t: string) {
    this.props.onChange(v, t)
    t === 'block' ?
      this.setState({ blockInput: v }) :
      this.setState({ transactionInput: v })
  }

  render() {
    return (
      <div>
        <div>
          <div className="text-center">
            <div className="head-title">Block Explorer</div>
          </div>
        </div>
        <Tabs defaultActiveKey="block" id="uncontrolled-tab" className="bt-tab" onSelect={() => this.onSelect()}>
          <Tab eventKey="block" title="Block">
            <div className="row justify-content-center search-box">
              <input
                id="block-input"
                ref="blockInput"
                placeholder="Enter Block Id"
                value={this.state.blockInput}
                className="searchbar"
                onChange={(e) => this.onTextChange(e.currentTarget.value, 'block')}>
              </input>
            </div>
            <BlockDataArea />
          </Tab>
          <Tab eventKey="transaction" title="Transaction">
            <div className="row justify-content-center search-box">
              <input
                id="transaction-input"
                ref="transactionInput"
                placeholder="Enter Transaction Id"
                className="searchbar"
                value={this.state.transactionInput}
                onChange={(e) => this.onTextChange(e.currentTarget.value, 'transaction')}>
              </input>
            </div>
            <TransactionDataArea />
          </Tab>
          <Tab eventKey="last_record" title="Last 10 Record">
            <List />
          </Tab>
        </Tabs>
      </div >
    );
  }

}

const MapStateToProps = (state: RootState) => {
  return {
    disabled: state.api.onFetch,
  };
};

const MapDispatchToProps = (dispatch: ThunkDispatch<RootState, undefined, RootActions>) => ({
  onChange: (key: any, type: string) => { dispatch(actionCreator.api.getData(key, type)) },
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(FetchController);