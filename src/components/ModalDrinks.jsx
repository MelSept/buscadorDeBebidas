import { Modal, Image } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const ModalDrinks = () => {
  const { modal, handleModalClick, recipe, setRecipe, loading } = useDrinks();

  console.log(recipe);
  // este arreglo filtra los ingredientes posibles y descarta los nulos
  const showRecipe = () => {
    let ingredients = [];

    //si existe un ingrediente, entonces, que agregue el ingrediente

    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]}
            {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    !loading && (
      <Modal
        show={modal}
        onHide={() => {
          handleModalClick();
          setRecipe({});
        }}
      >
        <Image
          src={recipe.strDrinkThumb}
          alt={`Imagen receta ${recipe.strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>{recipe.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones</h2>
            {recipe.strInstructions}
            <h2>Ingredientes y Cantidades</h2>
            {showRecipe()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};

export default ModalDrinks;
