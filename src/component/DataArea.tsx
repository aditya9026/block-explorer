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
          {console.log(props)}
          {(props.data.status && props.data.data.length > 0) ? (
            <div>
              { props.data.data.map((res: any) => (
                <div key={res.BlockHeight}>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="card mb-4">
                      <div className="card-body" >
                        <div className="title">{"BlockHash"}</div>
                        <div className="value">{res.BlockHash}</div>
                        <div className="title">{"FeeFrac"}</div>
                        <div className="value">{res.FeeFrac}</div>
                        <div className="title">{"Messages"}</div>
                        <div className="value">{Object.keys(res.Messages).length === 0 ? '-' : res.Messages}</div>
                        <div className="title">{"ProposerID"}</div>
                        <div className="value">{res.ProposerID}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (props.error ?
              <span>{"Please check your entry"}</span> :
              <span>{'No Data Found'}</span>
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
