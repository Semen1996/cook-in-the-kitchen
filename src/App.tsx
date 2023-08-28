
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Container, Row, Form, InputGroup, Button } from "react-bootstrap";
import { InputIngredients } from './components/InputIngredients';
import { Recipes } from './components/Recipes';
import { Popup } from './components/Popup';


function App() {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <InputIngredients/>
        </Row>
        <Row className='mt-5'>
          <Recipes/>
        </Row>
      </Container>
      <Popup/>
    </>
  );
}

export default App;
