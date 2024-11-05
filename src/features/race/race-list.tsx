import React from "react";
import { Race } from "../../types/race";
import styles from "./race-list.module.css";

interface RaceListProps {
  races: Race[];
}

export const RaceList: React.FC<RaceListProps> = ({ races }) => {
  if (races.length === 0) {
    return <p className={styles.noRaces}>No races available.</p>;
  }

  return (
    <div className={styles.raceList}>
      <h2 className={styles.title}>Race Information</h2>
      <ul className={styles.raceItems}>
        {races.map((race, index) => (
          <li key={`${race.raceNumber}-${index}`} className={styles.raceItem}>
            <div className={styles.raceDetails}>
              <span className={styles.raceNumber}>Race {race.raceNumber}</span>
              <span className={styles.raceName}>{race.raceName}</span>
              <span className={styles.startTime}>{race.startTime}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
