import Header from "./Header";
import Content from "./Content";

export default function ResultsPane(props) {
  return (
    <div className="results-pane">
      <Header id="results-icon" text="Search.." url="public/chevron.png" />
      <div className="info-section">
        <Content content="Results" data={props.data} />
      </div>
    </div>
  );
}
{
  /* <footer>
        <div className="number-of-results">
          <h3>SEARCH RESULTS: 230</h3>
        </div>
      </footer> */
}
{
  /* </div> */
}
//  ? </div>

export async function getStaticProps(context) {
  const res = await fetch(`http://127.0.0.1:5000/`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the Home component as props
  };
}
