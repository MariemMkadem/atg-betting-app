import React from "react";
import styles from "./BetTypeSelector.module.css";

interface BetTypeSelectorProps {
  betTypes: string[];
  onSelect: (betType: string) => void;
}

const BetTypeSelector: React.FC<BetTypeSelectorProps> = ({
  betTypes,
  onSelect,
}) => {
  return (
    <div className={styles.selector}>
      <h2>Select Bet Type</h2>
      <ul>
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

export default BetTypeSelector;
