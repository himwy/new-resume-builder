import "./globals.css";
import PInfo from "./components/PInfo";

const CVForm = () => {
  return (
    <html>
      <body>
        <div className="App">
          <h1 className="text-center mt-[30px] font-bold">CV Generator</h1>
          <PInfo />
        </div>
      </body>
    </html>
  );
};

export default CVForm;
