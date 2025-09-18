
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ComparisonContextType {
  comparisonList: string[];
  addToComparison: (productId: string) => void;
  removeFromComparison: (productId: string) => void;
  clearComparison: () => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const item = window.localStorage.getItem('comparisonList');
      if (item) {
        setComparisonList(JSON.parse(item));
      }
    } catch (error) {
      console.error("Failed to parse comparison list from localStorage", error);
      setComparisonList([]);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      window.localStorage.setItem('comparisonList', JSON.stringify(comparisonList));
    }
  }, [comparisonList, isMounted]);

  const addToComparison = (productId: string) => {
    if (comparisonList.length < 4 && !comparisonList.includes(productId)) {
      setComparisonList(prevList => [...prevList, productId]);
    }
  };

  const removeFromComparison = (productId: string) => {
    setComparisonList(prevList => prevList.filter(id => id !== productId));
  };

  const clearComparison = () => {
    setComparisonList([]);
  };

  return (
    <ComparisonContext.Provider
      value={{
        comparisonList,
        addToComparison,
        removeFromComparison,
        clearComparison,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
}
