// src/components/RaceList.tsx

import React from "react";
import { Race } from "../../types/game";
import styles from "./race-list.module.css";

interface RaceListProps {
  races: Race[];
  trackId: string;
}

export const RaceList: React.FC<RaceListProps> = ({ races, trackId }) => {
  const filteredRaces = races.filter((race) => race.track.id === trackId);

  return (
    <table className={styles.nestedTable}>
      <thead>
        <tr>
          <th>Race Number</th>
          <th>Race Name</th>
          <th>Race Start Time</th>
        </tr>
      </thead>
      <tbody>
        {filteredRaces.map((race, index) => (
          <tr key={index}>
            <td>{race.number}</td>
            <td>{race.name}</td>
            <td>{race.startTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
