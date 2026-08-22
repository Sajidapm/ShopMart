import { createContext, useState } from "react";

export const CompareContext = createContext();

const CompareProvider = ({ children }) => {
  const [compare, setCompare] = useState([]);

  const toggleCompare = (product) => {
    setCompare((prev) => {
      const exists = prev.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return prev.filter(
          (item) => item.id !== product.id
        );
      }

      if (prev.length >= 3) {
        return prev;
      }

      return [...prev, product];
    });
  };

  return (
    <CompareContext.Provider
      value={{ compare, toggleCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export default CompareProvider;