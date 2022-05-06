import { Col, Card, Button } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

// consulta el listado de bebidas segun busqueda
// coloca la imagen de la bebida resultante
// card.title muestra el nombre de la bebida

const Drink = ({ drink }) => {
  const { handleModalClick, handleDrinkIdClick } = useDrinks();
  return (
    <Col md={6} lg={4}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
          <Button
            variant={"warning"}
            className="w-100 text-uppercase mt-2"
            onClick={() => {
              handleModalClick();
              handleDrinkIdClick(drink.idDrink);
            }}
          >
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Drink;
