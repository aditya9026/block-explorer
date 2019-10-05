import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import { RootState, RootActions } from '../modules/Types';
import { actionCreator } from '../modules';
import { ThunkDispatch } from 'redux-thunk';
interface ListState {
  todo: string;
}

interface ListProps {
  data: any;
  error: any;
  getlastData: () => any;
}

class ListContainer extends React.Component<ListProps, ListState> {

  componentWillMount() {
    this.props.getlastData()
  }

  render() {
    const { data } = this.props
    return (
      <div className="container" >
        <div className="data-card">
          <Tabs defaultActiveKey="last_blocks" id="data-tab">
            <Tab eventKey="last_blocks" title="Blocks">
              {(data.status && data.blocks_last && data.blocks_last.length > 0) && data.blocks_last.map((res: any) => (
                <div key={res.BlockHash} className="col-sm-12 col-md-12 col-lg-12">
                  <div className="card mb-4">
                    <div className="card-body" >
                      <Row>
                        <Col>
                          <div className="title">{"BlockHash"}</div>
                          <div className="value">{res.BlockHash}</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="title">{"FeeFrac"}</div>
                          <div className="value">{res.FeeFrac}</div>
                        </Col>
                        <Col>
                          <div className="title">{"Messages"}</div>
                          <div className="value">{Object.keys(res.Messages).length === 0 ? '-' : res.Messages}</div>
                        </Col>
                        <Col>
                          <div className="title">{"ProposerID"}</div>
                          <div className="value">{res.ProposerID}</div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              ))}
            </Tab>
            <Tab eventKey="last_transactions" title="Transactions">
              {(data.status && data.transactions_last && data.transactions_last.length > 0) && data.transactions_last.map((res: any) => (
                <div key={res.TransactionHash} className="col-sm-12 col-md-12 col-lg-12">
                  <div className="card mb-4">
                    <div className="card-body" >
                      <div className="title">{"TransactionHash"}</div>
                      <div className="value">{res.TransactionHash}</div>
                      <div className="title">{"Message"}</div>
                      <div className="value">{res.Message}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}


const MapStateToProps = (state: RootState) => {
  return {
    error: state.api.error,
    data: state.api.dataList,
  };
};

const MapDispatchToProps = (dispatch: ThunkDispatch<RootState, undefined, RootActions>) => ({
  getlastData: () => { dispatch(actionCreator.api.getlastData()) },
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(ListContainer);