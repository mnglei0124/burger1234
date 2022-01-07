import { useEffect } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";

import * as actions from "../../redux/actions/signupActions";

const Logout = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    props.logout();
    navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isOut]);
  return null;
};

const mapStateToProps = (state) => {
  return {
    isOut: state.signupLoginReducer.isOut,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
