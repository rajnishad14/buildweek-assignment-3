import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";

const Selector = (props) => {
  return (
    <>
      <Container>
        <Jumbotron
          style={{ backgroundColor: "ivory", fontFamily: "sans-serif" }}
        >
          <h2>Please Select Dificulty</h2>
          <p>
            <Button onClick={() => props.changeLevel(1)} variant="success">
              <p>
                Easy
                <br />
                12 Cards
              </p>
            </Button>{" "}
            <Button onClick={() => props.changeLevel(2)} variant="warning">
              <p>
                Medium
                <br />
                16 Cards
              </p>
            </Button>{" "}
            <Button onClick={() => props.changeLevel(3)} variant="danger">
              <p>
                hard
                <br />
                24 Cards
              </p>
            </Button>
          </p>
        </Jumbotron>
      </Container>
    </>
  );
};

export default Selector;
