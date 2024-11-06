// src/components/RaceList.tsx

import React, { useState } from "react";
import { HorseDetails } from "../../features/horse";
import { Race } from "../../types/game";
import styles from "./race-list.module.css";

interface RaceListProps {
  races: Race[];
  trackId: string;
}

export const RaceList: React.FC<RaceListProps> = ({ races, trackId }) => {
  const filteredRaces = races.filter((race) => race.track.id === trackId);
  const [selectedRaceId, setSelectedRaceId] = useState<string | null>(null);

  const handleRowClick = (raceId: string) => {
    if (selectedRaceId === raceId) {
      setSelectedRaceId(null);
    } else {
      setSelectedRaceId(raceId);
    }
  };

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
        {filteredRaces.map((race) => (
          <React.Fragment key={race.id}>
            <tr onClick={() => handleRowClick(race.id)}>
              <td>{race.number}</td>
              <td>{race.name}</td>
              <td>{new Date(race.startTime).toLocaleString()}</td>
            </tr>

            {selectedRaceId === race.id && (
              <HorseDetails starts={race.starts} />
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
