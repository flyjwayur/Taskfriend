import React from 'react';
import { connect } from 'react-redux';

import Lane from '../Lane';
import './styles.scss';

const Lanes = ({ lanes }) => {
  return (
    <div className="lanes">
      {lanes.map(lane => (
        <Lane className="lanes__lane" key={lane.id} lane={lane} />
      ))}
    </div>
  );
};

const mapStateToLanesProps = state => {
  console.log('state from Lanes', state);
  return { lanes: state.lanes };
};

export default connect(mapStateToLanesProps)(Lanes);
