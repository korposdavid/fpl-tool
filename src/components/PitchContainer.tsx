import React from "react";
import Card from "react-bootstrap/Card";

interface Props {}

const PitchContainer: React.FC<Props> = () => {
  const bgImage =
    "https://johnburnmurdoch.github.io/football-pitch-tracker/half-rotate.png";
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% 100%"
      }}
    >
      <Card style={{ opacity: "0.1" }}>
        <Card.Text>
          GK<br></br>GK<br></br>GK
        </Card.Text>
      </Card>
      <Card style={{ opacity: "0.1" }}>
        <Card.Text>
          DEF<br></br>DEF<br></br>DEF
        </Card.Text>
      </Card>
      <Card style={{ opacity: "0.1" }}>
        <Card.Text>
          MID<br></br>MID<br></br>MID
        </Card.Text>
      </Card>
      <Card style={{ opacity: "0.1" }}>
        <Card.Text>
          FW<br></br>FW<br></br>FW
        </Card.Text>
      </Card>
    </div>
  );
};

export default PitchContainer;
