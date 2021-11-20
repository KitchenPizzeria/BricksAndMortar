import { Fragment, useState } from "react";
import Listing from "../components/listing";

function Listings(props) {
  const { data } = props;
  return (
    <Fragment>
      {data.map((property) => (
        <Listing
          key={property.id}
          imageURL={property.imageURL}
          Postcode={property.Postcode}
          Price={property.price}
        />
      ))}
    </Fragment>
  );
}
export default Listings;

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/listings-data");
  const packet = await res.json();
  const data = packet["data"];

  if (!data) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: { data },
  };
}
