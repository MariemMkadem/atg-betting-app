import React, { useEffect, useState } from "react";
import { getBetTypeResults } from "../../services/api";
import { BetTypeSelector } from "../../features/bet-type";
import { RaceList } from "../../features/race";
import { HorseDetails } from "../../features/horse";
import { Race } from "../../types/race";
import styles from "./home.module.css";

const Home: React.FC = () => {
  const [betType, setBetType] = useState<string>("");
  const [races, setRaces] = useState<Race[]>([]);
  const [error, setError] = useState<string | null>(null);

  const betTypes = ["V75", "V86", "GS75"];

  console.log("racesssss", races);

  useEffect(() => {
    const fetchResults = async () => {
      if (!betType) return;
      try {
        const { data } = await getBetTypeResults(betType);
        setRaces(data.results);
        setError(null);
      } catch (error) {
        setError("Failed to fetch race results. Please try again.");
      }
    };
    fetchResults();
  }, [betType]);

  const renderHorseDetails = (race: Race) => (
    <>
      <h2>Race Number: {race.raceNumber}</h2>
      {Array.isArray(race.horses) && race.horses.length > 0 ? (
        race.horses.map((horse) => (
          <HorseDetails key={horse.startNumber} horse={horse} />
        ))
      ) : (
        <p>No horses available for this race.</p>
      )}
    </>
  );

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1>Horse Betting Results</h1>
        <p>Select a bet type to view the latest results</p>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.betTypeSection}>
          <BetTypeSelector onSelect={setBetType} betTypes={betTypes} />
        </section>
        <section className={styles.raceSection}>
          {error && <div className={styles.error}>{error}</div>}
          <RaceList races={races} />
          {races.map((race) => (
            <div key={race.raceNumber} className={styles.raceCard}>
              {renderHorseDetails(race)}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
