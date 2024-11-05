import React from "react";
import { BetTypeSelectorProps } from "../../types/bet-type";
import styles from "./bet-type-selector.module.css";

export const BetTypeSelector: React.FC<BetTypeSelectorProps> = ({
  betTypes,
  onSelect,
}) => {
  return (
    <div className={styles.selector}>
      <h2 className={styles.title}>Select Your Bet Type</h2>
      <ul className={styles.betTypeList}>
        {betTypes.map((betType) => (
          <li
            key={betType}
            onClick={() => onSelect(betType)}
            className={styles.betType}
          >
            {betType}
          </li>
        ))}
      </ul>
    </div>
  );
};
