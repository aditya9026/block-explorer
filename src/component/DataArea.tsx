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
          {(props.data.status && props.data.data.length > 0) ? (
            <div className="card-body">
              { props.data.data.map((res: any) => (
                <div key={res.BlockHeight}>
                  <span className="card-text">{res.BlockHeight}</span>
                  <span>{res.FeeFrac}</span>
                  <span>{res.Messages}</span>
                  <span>{res.BlockHash}</span>
                </div>
              ))}
            </div>
          ) : (props.error ?
              <span>{props.error}</span> :
              <span>{'No Data'}</span>
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
