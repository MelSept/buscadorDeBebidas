import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategories from "../hooks/useCategories";
import useDrinks from "../hooks/useDrinks";

const Formulary = () => {
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const [alerts, setAlerts] = useState("");

  const { categories } = useCategories();

  const { consultDrinks } = useDrinks();

  const handleSubmit = (e) => {
    e.preventDefault();

    //alerta para que los campos obligatorios no queden vacios

    if (Object.values(search).includes("")) {
      setAlerts("Todos los campos son obligatorios");
      return;
    }
    setAlerts("");
    //consulta la busqueda de bebidas
    consultDrinks(search);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alerts && (
        <Alert variant="danger" className="text-center">
          {alerts}
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Nombre Bebida</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Ej: Tequila, Vodka, etc"
              name="name"
              value={search.name}
              onChange={(e) =>
                setSearch({ ...search, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Categoría Bebida</Form.Label>
            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({ ...search, [e.target.name]: e.target.value })
              }
            >
              <option>- Selecciona Categoria -</option>

              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="submit"
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulary;
