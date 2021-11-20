function Listing(props) {
  return (
    <div className="listings">
      <h5>{props.imageURL}</h5>
      <h5>{props.price}</h5>
      <h5>{props.Postcode}</h5>
    </div>
  );
}

export default Listing;
