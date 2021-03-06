import React from "react";
import { Card, Row } from "react-bootstrap";

export default function ResturantCard(props: any) {
  console.log(props)
  return (
    <div>
      <Row>
        <Card className="text-center" border="primary">
          <Card.Img
            variant="top"
            src={props.resturant.photos[0]}
            className="business-img rounded mx-auto d-block"
          />
          <Card.Body>
            <Card.Title>{props.resturant.name}</Card.Title>
            <Card.Text>
              Address: {props.resturant.location.formatted_address},<br />
              Phone: {props.resturant.phone},<br />
              {props.resturant.hours[0]?.is_open_now ? "Open!" : "Closed :("}
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}
