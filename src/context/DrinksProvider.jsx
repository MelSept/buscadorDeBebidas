import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getRecipe = async () => {
      if (!drinkId) return;

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getRecipe();
  }, [drinkId]);

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

  //Si esta en false, con un click pasa a true

  const handleModalClick = () => {
    setModal(!modal);
  };

  //Toma el id de la bebida y lo setea en el state

  const handleDrinkIdClick = (id) => {
    setDrinkId(id);
  };

  // estado despues funcion

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        consultDrinks,
        handleModalClick,
        modal,
        handleDrinkIdClick,
        recipe,
        setRecipe,
        loading,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };
export default DrinksContext;
