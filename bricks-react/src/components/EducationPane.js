import Content from "./Content";
import Header from "./Header";

export default function Education() {
  return (
    <div className="education-pane">
      <Header id="education-icon" text="Education" url="public/book.png" />
      <div className="info-section">
        <Content content="Education" />
      </div>
    </div>
  );
}
