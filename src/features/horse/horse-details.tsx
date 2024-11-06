import React from "react";
import { Start } from "../../types";

interface HorseDetailsProps {
  starts: Start[];
}

export const HorseDetails: React.FC<HorseDetailsProps> = ({ starts }) => {
  return (
    <tr>
      <td colSpan={3}>
        <table>
          <thead>
            <tr>
              <th>Start Number</th>
              <th>Horse Name</th>
              <th>Driver Name</th>
            </tr>
          </thead>
          <tbody>
            {starts.map((start) => (
              <tr key={start.id}>
                <td>{start.number}</td>
                <td>{start.horse?.name || "N/A"}</td>
                <td>
                  {start.driver?.firstName || "N/A"}
                  {start.driver?.lastName || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </td>
    </tr>
  );
};
