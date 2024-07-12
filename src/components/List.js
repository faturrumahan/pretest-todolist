import React from "react";

const List = (props) => {
  return <>{props.render(props.list)}</>;
};

export default List;
