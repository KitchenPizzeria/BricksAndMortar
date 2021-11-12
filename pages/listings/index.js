import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import PropertyID from "../[propertyID]";

export default function handler() {
  const router = useRouter;

  function showDetailsHandler(id) {
    router.push("/" + id);
  }

  const getproperties = [
    {
      id: "1",
      imageURL: "https://someimageurl.com",
      price: "£67,789",
      Postcode: "ajejrfr",
    },
    {
      id: "2",
      imageURL: "https://someimageurl.com",
      price: "£67,789",
      Postcode: "ajejrfr",
    },
    {
      id: "3",
      imageURL: "https://someimageurl.com",
      price: "£67,789",
      Postcode: "ajejrfr",
    },
    {
      id: "4",
      imageURL: "https://someimageurl.com",
      price: "£67,789",
      Postcode: "ajejrfr",
    },
  ];

  const showlist = getproperties.map((property) => (
    <ul key={property.id}>
      <li>
        <a href={showDetailsHandler(property.id)}>{property.imageURL}</a>
      </li>
      <li>{property.price}</li>
      <li>{property.Postcode}</li>
    </ul>
  ));

  return (
    <div>
      <h1>Listings Page</h1>
      {showlist}
    </div>
  );
}
