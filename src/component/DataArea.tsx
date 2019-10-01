import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../modules/Types';

type StateProps = {
  error?: string;
  data: any
};

type Props = StateProps;

const component: React.SFC<Props> = (props: Props) => {
  console.log(props)
  return (
    <div className="container" >
      <div className="data-card">
        <div>
          {props.error == null ? (
            <div className="card-body">
              {props.data.map((e: any) => (
                <div>
                  <span key={e.id} className="card-text">{e.messages} </span>
                  <span>{e.fee}</span>
                </div>
              ))}
            </div>
          ) : (
              <span>{props.error}</span>
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
