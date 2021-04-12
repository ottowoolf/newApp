import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav class='flex justify-end bb b--white-10 mb3 pt3 bg-black'>
        <p
          onClick={() => onRouteChange("signout")}
          class='f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 m2 br-pill ba b--white-20 pointer'
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav class='flex justify-end bb b--white-10 mb3 pt3 bg-black'>
        <p
          onClick={() => onRouteChange("signin")}
          class='f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 m2 br-pill ba b--white-20 pointer'
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          class='f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer mh3'
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
