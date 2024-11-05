import React from "react";

interface RaceListProps {
  races: any[];
}

const RaceList: React.FC<RaceListProps> = ({ races }) => {
  return (
    <div>
      {races.map((race) => (
        <div key={race.raceNumber}>
          <h3>{race.raceName}</h3>
          <p>Start Time: {race.startTime}</p>
        </div>
      ))}
    </div>
  );
};

export default RaceList;
