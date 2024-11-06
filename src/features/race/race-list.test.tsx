import { render, screen } from "@testing-library/react";
import { RaceList } from "./race-list";

const races = [
  {
    id: "1",
    number: 1,
    name: "First Race",
    startTime: "2024-11-06T10:00:00",
    starts: [],
    track: { id: "track1", name: "Track 1" },
  },
  {
    id: "2",
    number: 2,
    name: "Second Race",
    startTime: "2024-11-06T10:30:00",
    starts: [],
    track: { id: "track1", name: "Track 1" },
  },
];

describe("RaceList Component", () => {
  it("should display the list of races", () => {
    render(<RaceList races={races} trackId="track1" />);
    expect(screen.getByText("First Race")).toBeInTheDocument();
    expect(screen.getByText("Second Race")).toBeInTheDocument();
  });
});
