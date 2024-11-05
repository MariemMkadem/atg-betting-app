import React from "react";
import { Horse } from "../../types/horse";
import "./horse-details.module.css";

interface HorseDetailsProps {
  horse: Horse;
}

export const HorseDetails: React.FC<HorseDetailsProps> = ({ horse }) => {
  return (
    <div className="horse-details">
      <h2 className="title">Horse Details</h2>
      <p className="detail">
        <strong>Trainer:</strong> {horse.trainer.firstName}{" "}
        {horse.trainer.lastName}
      </p>
      <p className="detail">
        <strong>Father:</strong> {horse.father}
      </p>
    </div>
  );
};
