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
  console.log(props);

  return (
    <div className="container" >
      <div className="data-card">
        <div>
          {(props.data.status && props.data.block) ? (
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="card mb-4">
                <div className="card-body" >
                  <div className="title">{"BlockHash"}</div>
                  <div className="value">{props.data.block.BlockHash}</div>
                  <div className="title">{"FeeFrac"}</div>
                  <div className="value">{props.data.block.FeeFrac}</div>
                  <div className="title">{"Messages"}</div>
                  <div className="value">{Object.keys(props.data.block.Messages).length === 0 ? '-' : props.data.block.Messages}</div>
                  <div className="title">{"ProposerID"}</div>
                  <div className="value">{props.data.block.ProposerID}</div>
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
