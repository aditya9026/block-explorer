import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../modules/Types';

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
          {(props.data.status && props.data.transaction) ? (
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="card mb-4">
                <div className="card-body" >
                  <div className="title">{"TransactionHash"}</div>
                  <div className="value">{props.data.transaction.TransactionHash}</div>
                  <div className="title">{"Message"}</div>
                  <div className="value">{props.data.transaction.Message}</div>
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
