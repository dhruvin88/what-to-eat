import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import React from "react";
import ResturantCard from "../components/resturant-card";

export async function getServerSideProps(context: any) {
    let { location, category } = context.query
    category = category ? category: "food"
    const { data } = await client.query({
      query: gql`
      {
        search(location: "${location}", categories: "${category}") {
          total
          business {
            name,
            phone,
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
        businesses: data.search.business
      }
    };
}

export default function yum_food(props: any){
    const router = useRouter()
    const { location, category } = router.query
    console.log(location, category)
    console.log(props)
    console.log(props.businesses.length)

    const randomResturant = () => {
        let randomInt = Math.floor(Math.random() * (props.businesses.length + 1));
        return props.businesses[randomInt]
    };

    return (
        <div>
            <ResturantCard resturant={randomResturant()}></ResturantCard>
        </div>
    );
}