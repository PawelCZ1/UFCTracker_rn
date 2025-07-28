import { Fighter } from '../models/Fighter';
import { createContext, ReactNode, useContext, useState } from 'react';


interface FighterContextType {
  selectedFighter: Fighter | null;
  setSelectedFighter: (fighter: Fighter | null) => void;
}

const FighterContext = createContext<FighterContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const FighterProvider = ({ children }: Props) => {
  const [selectedFighter, setSelectedFighter] = useState<Fighter | null>(null);

  return (
    <FighterContext.Provider value={{ selectedFighter, setSelectedFighter }}>
      {children}
    </FighterContext.Provider>
  );
};

export const useFighterContext = () => {
  const context = useContext(FighterContext);
  if (context === undefined) {
    throw new Error('useFighterContext must be used within a FighterProvider');
  }
  return context;
};