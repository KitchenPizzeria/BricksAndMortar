export default function Searchbar(props) {
  const OnChangeHandler = () => {
    pass;
  };

  const OnSubmitButtonHandler = () => {
    pass;
  };

  return (
    <div className="searchbar">
      <input
        name="Postcode"
        placeholder="Postcode"
        onChange={OnChangeHandler}
      />
      <button type="submit" onClick={OnSubmitButtonHandler}>
        Go
      </button>
    </div>
  );
}
