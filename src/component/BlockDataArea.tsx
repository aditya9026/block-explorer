import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../modules/Types';
import { Row, Col } from 'react-bootstrap';

type StateProps = {
  error?: string;
  status?: string;
  data: any;
};

type Props = StateProps;

const component: React.SFC<Props> = (props: Props) => {

  return (
    <div className="container" >
      <div className="data-card">
        <div>
          {(props.data.status && props.data.block) ? (
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="card mb-4">
                <div className="card-body" >
                  <Row>
                    <Col>
                      <div className="title">{"BlockHash"}</div>
                      <div className="value">{props.data.block.BlockHash}</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="title">{"FeeFrac"}</div>
                      <div className="value">{props.data.block.FeeFrac}</div>
                    </Col>
                    <Col>
                      <div className="title">{"Messages"}</div>
                      <div className="value">{Object.keys(props.data.block.Messages).length === 0 ? '-' : props.data.block.Messages}</div>
                    </Col>
                    <Col>
                      <div className="title">{"ProposerID"}</div>
                      <div className="value">{props.data.block.ProposerID}</div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          ) : (props.error ?
            <span>{"Please check your entry"}</span> :
            <span>{'No result found'}</span>
            )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  error: state.api.error,
  data: state.api.data,
});

export default connect<StateProps, {}, {}, RootState>(mapStateToProps)(
  component
);
