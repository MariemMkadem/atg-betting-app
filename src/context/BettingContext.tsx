import { createContext, useState, useContext, ReactNode } from "react";

interface BettingContextType {
  selectedBetType: string;
  setSelectedBetType: (type: string) => void;
}

export const BettingContext = createContext<BettingContextType | undefined>(
  undefined
);

export const BettingProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBetType, setSelectedBetType] = useState<string>("V75");

  return (
    <BettingContext.Provider value={{ selectedBetType, setSelectedBetType }}>
      {children}
    </BettingContext.Provider>
  );
};

export const useBettingContext = () => {
  const context = useContext(BettingContext);
  if (!context)
    throw new Error("useBettingContext must be used within BettingProvider");
  return context;
};
