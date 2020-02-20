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
        style={{
          backgroundColor: "#e9ecef",
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: 400,
          color: "#495057",
          borderRadius: ".25 rem",
          border: "1px solid #ced4da",
          padding: ".375rem .75rem"
        }}
      >
        <Card.Title>{props.title}</Card.Title>
      </Card>
    </Fragment>
  );
};

export default ListHeader;
