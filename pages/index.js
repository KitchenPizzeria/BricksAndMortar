import { Fragment, useState } from "react";
import Map from "./components/map";
import Searchbar from "./components/Searchbar";

export default function Home() {
  const [SearchButtonPressed, setSearchButtonPressed] = useState(false);
  const [PostcodeInputted, setPostcodeInputted] = useState(null);

  const PostcodeHandler = (event) => {
    event.preventDefault();
    setPostcodeInputted(event.target.value);
  };

  return <Map />;
  {
    /* <Searchbar
        TextfieldChangeHandler={SearchbarOnChangeHandler}
        SubmitButtonHandler={SearchbarOnSubmitButtonClick}
      /> */
  }
}
