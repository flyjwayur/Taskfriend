import React from 'react';
import { connect } from 'react-redux';

import Lane from '../Lane';
import './styles.scss';

const Lanes = ({ lanes }) => {
  return (
    <div className="lanes">
      {lanes.map(({ id, name, notes }) => (
        <Lane className="lanes__lane" key={id} id={id} name={name} laneNoteIds={notes} />
      ))}
    </div>
  );
};

const mapStateToLanesProps = state => {
  console.log('state from Lanes', state);
  return { lanes: state.lanes };
};

export default connect(mapStateToLanesProps)(Lanes);
