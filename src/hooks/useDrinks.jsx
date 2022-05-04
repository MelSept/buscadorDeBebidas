import { useContext } from "react";
import DrinksContext from "../context/DrinksProvider";

// Esto es un custom hook que retorna el contexto
const useDrinks = () => {
  return useContext(DrinksContext);
};

export default useDrinks;
