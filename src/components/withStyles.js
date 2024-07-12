import React from "react";

const withStyles = (Components) => {
  return (props) => {
    const className = "text-2xl font-bold";
    return <Components className={className} {...props} />;
  };
};

export default withStyles;
