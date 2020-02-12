import React from "react";
import Card from "react-bootstrap/Card";

interface Props {
  title: String;
}

const ListHeader: React.FC<Props> = props => {
  return (
    <div>
      <Card style={{ backgroundColor: "silver", textAlign: "center" }}>
        <Card.Title>{props.title}</Card.Title>
      </Card>
    </div>
  );
};

export default ListHeader;
