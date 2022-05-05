import { Container } from "react-bootstrap";
import Formulary from "./components/Formulary";
import DrinksList from "./components/DrinksList";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";

function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <Formulary />
          <DrinksList />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;
