import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

  //consultamos los datos que pasamos desde formulario
  const consultDrinks = async (search) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;
      //search.name refiere al objeto de busqueda en el ingrediente y categoria que ingresemos

      const { data } = await axios(url);

      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };
  // estado despues funcion

  return (
    <DrinksContext.Provider value={{ drinks, consultDrinks }}>
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };
export default DrinksContext;
