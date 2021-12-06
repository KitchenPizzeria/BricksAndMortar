export default function Header(props) {
  return (
    <div className="header">
      <h3 className="title">{props.text}</h3>
      <button className="expand-button" id={props.id} src={props.url} />
    </div>
  );
}
