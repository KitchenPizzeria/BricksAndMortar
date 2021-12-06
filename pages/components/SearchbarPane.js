export default function Searchbar() {
  const onClickHandler = () => {
    console.log("hello");
  };

  return (
    <div className="search">
      <input type="search" className="search-box" />
      <button className="expand-button" id="search-icon" />
    </div>
  );
}
