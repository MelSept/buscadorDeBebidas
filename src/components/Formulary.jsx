import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import useCategories from "../hooks/useCategories";

const Formulary = () => {
  const [search, setSearch] = useState({
    nombre: "",
    categoria: "",
  });

  const { categories } = useCategories();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes(""))
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ej: Tequila, Vodka, etc"
              name="nombre"
              value={search.nombre}
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
              value={search.categoria}
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
          <Button variant="danger" className="text-uppercase w-100">
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulary;
