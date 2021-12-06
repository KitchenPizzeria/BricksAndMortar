import { Fragment } from "react";

export default function Content(props) {
  const Results = () => {
    return props.data.map((property) => {
      <div className="results">
        <h5>{property.number}</h5>
        <h5>{props.address}</h5>
        <h5>{props.price}</h5>
      </div>;
    });
  };

  const Education = () => {
    return (
      <textarea rows="50" cols="60" name="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </textarea>
    );
  };

  return (
    <Fragment>{props.content == "Results" ? Results : Education}</Fragment>
  );
}
