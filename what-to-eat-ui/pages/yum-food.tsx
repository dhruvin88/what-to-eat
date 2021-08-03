import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import React, { useState } from "react";
import ResturantCard from "../components/resturant-card";
import { Button, Col, Row } from "react-bootstrap";
import Layout from "../components/layout";

export async function getServerSideProps(context: any) {
  let { location, category } = context.query;
  category = category ? category : "food";
  const { data } = await client.query({
    query: gql`
      {
        search(location: "${location}", categories: "${category}", limit: 50) {
          total
          business {
            name,
            phone,
            photos,
            hours {
              is_open_now
            },
            is_closed,
            location {
              formatted_address
            },
          }
        }
      }
      `,
  });

  return {
    props: {
      businesses: data.search.business,
    },
  };
}

export default function YumFood(props: any) {
  const router = useRouter();
  const randomInt = Math.floor(Math.random() * props.businesses.length);
  const [business, setBusiness] = useState(props.businesses[randomInt]);

  const updateRandomResturant = () => {
    const randomInt = Math.floor(Math.random() * props.businesses.length);
    setBusiness(props.businesses[randomInt]);
  };

  return (
    <div>
      <Layout>
        <ResturantCard resturant={business}></ResturantCard>
        <Row className="justify-content-md-center">
          <Col className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={updateRandomResturant}>
              Pick something else
            </Button>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}
