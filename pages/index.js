import { Fragment, useState } from "react";
import Map from "./components/map";
import SearchbarPane from "./components/SearchbarPane";
import ResultsPane from "./components/ResultsPane";
import EducationPane from "./components/EducationPane";

export default function Home(props) {
  const [SearchButtonPressed, setSearchButtonPressed] = useState(false);
  const [PostcodeInputted, setPostcodeInputted] = useState(null);

  const PostcodeHandler = (event) => {
    event.preventDefault();
    setPostcodeInputted(event.target.value);
  };

  return (
    <div className="parent">
      {/* <Map /> */}
      <SearchbarPane />
      <div className="middle-band">
        <ResultsPane data={props.data} />
        <EducationPane />
      </div>
    </div>
  );
}
