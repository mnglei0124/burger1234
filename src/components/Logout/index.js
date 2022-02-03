import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../context/UserContext";

const Logout = (props) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  useEffect(() => {
    userContext.logout();
    navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userContext.state.isOut]);
  return null;
};

export default Logout;
