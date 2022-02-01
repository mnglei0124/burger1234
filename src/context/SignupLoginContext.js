import React from "react";

const SignupLoginContext = React.createContext();

export const LoginStore = (props) => {
  return (
    <SignupLoginContext.Provider>{props.children}</SignupLoginContext.Provider>
  );
};

export default SignupLoginContext;
