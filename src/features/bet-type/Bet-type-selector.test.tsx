/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen, fireEvent } from "@testing-library/react";
import { BetTypeSelector } from "./bet-type-selector";

describe("BetTypeSelection Component", () => {
  it("should display the bet types", () => {
    render(
      <BetTypeSelector betTypes={["V75", "V86", "GS75"]} onSelect={() => {}} />
    );

    expect(screen.getByText("V75")).toBeInTheDocument();
    expect(screen.getByText("V86")).toBeInTheDocument();
    expect(screen.getByText("GS75")).toBeInTheDocument();
  });

  it("should call onSelectBetType when a bet type is clicked", () => {
    const onSelectBetType = jest.fn();
    render(
      <BetTypeSelector
        betTypes={["V75", "V86", "GS75"]}
        onSelect={onSelectBetType}
      />
    );

    fireEvent.click(screen.getByText("V75"));
    expect(onSelectBetType).toHaveBeenCalledWith("V75");
  });
});
