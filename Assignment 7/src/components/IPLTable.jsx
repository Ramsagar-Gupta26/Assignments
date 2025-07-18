
import React, { useEffect, useState } from "react";

const IPLTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        // Sort by NRR (ascending)
        const sortedData = data.sort((a, b) => a.nrr - b.nrr);
        setTeams(sortedData);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <table border="1" cellPadding="10" cellSpacing="0" style={{ margin: "auto", width: "80%" }}>
      <thead>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Matches</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Points</th>
          <th>NRR</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={team.id}>
            <td>{index + 1}</td>
            <td>{team.team}</td>
            <td>{team.matches}</td>
            <td>{team.won}</td>
            <td>{team.lost}</td>
            <td>{team.points}</td>
            <td>{team.nrr}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IPLTable;
