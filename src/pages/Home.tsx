import React, { useEffect, useState } from "react";
import { getBetTypeResults } from "../services/api";
import BetTypeSelector from "../ features/BetType";
import RaceList from "../ features/Race";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const [betType, setBetType] = useState<string>("");
  const [races, setRaces] = useState<any[]>([]);
  const betTypes = ["V75", "V86", "GS75"];

  useEffect(() => {
    if (betType) {
      const fetchResults = async () => {
        try {
          const response = await getBetTypeResults(betType);
          setRaces(response.data.results);
        } catch (error) {
          console.error("Error fetching results:", error);
        }
      };
      fetchResults();
    }
  }, [betType]);

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
          <RaceList races={races} />
        </section>
      </main>
    </div>
  );
};

export default Home;
