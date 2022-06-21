import React from "react";
import "./App.css";
import CourseSheet from "./components/CourseSheet";

function App() {
  let sems = [
    { sno: 1, name: "1st" },
    { sno: 2, name: "2nd" },
    { sno: 3, name: "3rd" },
    { sno: 4, name: "4th" },
    { sno: 5, name: "5th" },
    { sno: 6, name: "6th" },
    { sno: 7, name: "7th" },
    { sno: 8, name: "8th" },
  ];
  return (
    <div className="App">
      <div>
        <table>
          <tbody>
            <tr>
              <th style={{ width: "75px" }}>Code</th>
              <th style={{ width: "450px" }}>Title</th>
              <th style={{ width: "25px", textAlign: "center" }}>Cr</th>
            </tr>

            {sems.map((sem) => (
              <CourseSheet semInfo={sem} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
