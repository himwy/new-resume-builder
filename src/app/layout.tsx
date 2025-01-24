import "./globals.css";
import PInfo from "./components/PInfo";
import EdInfo from "./components/EdInfo";

const CVForm = () => {
  return (
    <html>
      <body>
        <div className="App">
          <h1 className="text-center mt-[30px] font-bold">CV Generator</h1>
          <PInfo />
          <p> Education</p>
          <EdInfo />
          <p> Experience</p>
        </div>
      </body>
    </html>
  );
};

export default CVForm;
