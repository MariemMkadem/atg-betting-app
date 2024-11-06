import React, { useEffect, useState } from "react";
import { getBetTypeResults, getGameDetails } from "../../services/api";
import { BetTypeSelector } from "../../features/bet-type";
import { RaceList } from "../../features/race";
import { Product } from "../../types/product";
import { Game } from "../../types/game";
import formatDate from "../../helpers/formatDate";

import styles from "./home.module.css";

const Home: React.FC = () => {
  const [betType, setBetType] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [gameDetails, setGameDetails] = useState<Game | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const betTypes = ["V75", "V86", "GS75"];

  useEffect(() => {
    const fetchResults = async () => {
      if (!betType) return;
      try {
        const { data } = await getBetTypeResults(betType);
        setProducts(data.results);
        setError(null);
      } catch (error) {
        setError("Failed to fetch race results. Please try again.");
      }
    };
    fetchResults();
  }, [betType]);

  const handleProductClick = async (id: string) => {
    if (selectedProductId === id) {
      setSelectedProductId(null);
      setGameDetails(null);
    } else {
      try {
        const { data } = await getGameDetails(id);
        setGameDetails(data);
        setSelectedProductId(id);
      } catch (error) {
        setError("Failed to fetch game details. Please try again.");
      }
    }
  };

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

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Track</th>
                <th>Start Time</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <React.Fragment key={product.id}>
                    <tr
                      className={
                        selectedProductId === product.id ? styles.selected : ""
                      }
                      onClick={() => handleProductClick(product.id)}
                    >
                      <td>{product.tracks[0].name}</td>
                      <td>{formatDate(product.startTime)}</td>
                    </tr>

                    {selectedProductId === product.id && gameDetails && (
                      <tr>
                        <td colSpan={2}>
                          <RaceList
                            races={gameDetails.races}
                            trackId={product.tracks[0].id}
                          />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Home;
