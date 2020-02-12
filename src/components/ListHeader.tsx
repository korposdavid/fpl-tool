import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";

interface Props {
  title: String;
  toggle: Function;
}

const ListHeader: React.FC<Props> = props => {
  return (
    <Fragment>
      <Card
        onClick={() => props.toggle()}
        style={{ backgroundColor: "silver", textAlign: "center" }}
      >
        <Card.Title>{props.title}</Card.Title>
      </Card>
    </Fragment>
  );
};

export default ListHeader;
