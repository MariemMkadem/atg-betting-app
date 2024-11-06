import React from "react";
import styles from "./bet-type-selector.module.css";
import { useBettingContext } from "../../context/BettingContext";

export interface BetTypeSelectorProps {
  betTypes: string[];
}
export const BetTypeSelector: React.FC<BetTypeSelectorProps> = ({
  betTypes,
}) => {
  const { setSelectedBetType } = useBettingContext();

  return (
    <div className={styles.selector}>
      <h2 className={styles.title}>Select Your Bet Type</h2>
      <ul className={styles.betTypeList}>
        {betTypes.map((betType) => (
          <li
            key={betType}
            onClick={() => setSelectedBetType(betType)}
            className={styles.betType}
          >
            {betType}
          </li>
        ))}
      </ul>
    </div>
  );
};
