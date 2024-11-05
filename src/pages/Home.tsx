import React from "react";
import styles from "./Home.module.css";
import BetTypeSelector from "../ features/BetType/BetTypeSelector";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1>Horse Betting Results</h1>
        <p>Select a bet type to view the latest results</p>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.betTypeSection}>
          <BetTypeSelector />
        </section>
      </main>
    </div>
  );
};

export default Home;
