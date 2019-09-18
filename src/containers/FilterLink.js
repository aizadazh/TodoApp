import { connect } from "react-redux";
import Link from "../components/Link";
import { setVisibilityFilter } from "../actions/index";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.Filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.Filter))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Link)