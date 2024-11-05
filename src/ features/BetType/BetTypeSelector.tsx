import React, { useState } from "react";
import styles from "./BetTypeSelector.module.css";

const BetTypeSelector: React.FC = () => {
  const betTypes = ["V75", "V86", "GS75"];
  const [betType, setBetType] = useState<string>("");

  return (
    <div className={styles.selector}>
      <h2>Select Bet Type</h2>
      <ul>
        {betTypes.map((betType) => (
          <li
            key={betType}
            onClick={() => setBetType(betType)}
            className={styles.betType}
          >
            {betType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BetTypeSelector;
