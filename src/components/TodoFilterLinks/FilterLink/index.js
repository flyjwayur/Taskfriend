import React, { Component } from 'react';
import Link from '../Link/index';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../../store/actions/setVisibilityFilterAction';

class FilterLink extends Component {
  render() {
    const { active, onClick, children } = this.props;
    return (
      <Link active={active} onClick={onClick}>
        {children}
      </Link>
    );
  }
}

const mapStateToLinkProps = (state, ownProps) => {
  return { active: ownProps.filter === state.visibilityFilter };
};

const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export default connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(FilterLink);
