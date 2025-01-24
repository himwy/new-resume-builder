import "./globals.css";
import PInfo from "./components/PInfo";
import EdInfo from "./components/EdInfo";

const CVForm = () => {
  return (
    <html>
      <body>
        <div className="App">
          <h1 className="text-center mt-[30px] font-bold">CV Generator</h1>
          <h2 className="text-center mt-[0px] text-[15px] italic text-red-400">
            Fields with * are required.
          </h2>
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
