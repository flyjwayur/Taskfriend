import Link from '../Link/index';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../../store/actions/setVisibilityFilterAction';

const mapStateToLinkProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToLinkProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

export default connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);
