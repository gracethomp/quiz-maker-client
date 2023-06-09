import React, { useState, useEffect } from "react";
import NavigationButton from "../components/navigation-buttons";

function Result() {
  const [results, setResult] = useState([]);

  const getData = () => {
    fetch("http://localhost:3001/results")
      .then((response) => response.json())
      .then((result) => setResult(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="creator">
      <div class="round-shadow-box-form form">
        <table class="round-shadow-box-form">
          <tr>
            <th>IP</th>
            <th>Quiz</th>
            <th>Answers</th>
          </tr>
          {results.map((result) => (
            <tr>
              <td>{result.ip}</td>
              <td>{result.slug}</td>
              <td>{JSON.stringify(result.answers)}</td>
            </tr>
          ))}
        </table>
      </div>
      <NavigationButton visible={false} />
    </div>
  );
}

export default Result;
