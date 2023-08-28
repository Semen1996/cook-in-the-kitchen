import { useAppDispatch, useAppSelector } from "../hook";
import { Card , Container, Row } from "react-bootstrap";
import { openPopup } from "../store/popupSlice";

export function Recipes() {
  const recipes = useAppSelector(state => state.recipes.list);
  const dispatch = useAppDispatch();

 const handleCard = (id: number) => {
  dispatch(openPopup(id));
 };

  return(
    <Container>
      <Row>
        <h2 className="text-center">Recipes</h2>
      </Row>
      <Row className="justify-content-center">
        {
          recipes?.map(reсipe => {
            return (
              <Card className="m-2" style={{ width: '300px'}} key={reсipe.id} onClick={() => handleCard(reсipe.id)}>
                <Card.Img variant="top" src={reсipe.image} alt={reсipe.title} />
                <Card.Body>
                  <Card.Title>{reсipe.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Number of missing ingredients: {reсipe.missedIngredientCount}</small>
                </Card.Footer>
              </Card>
            )
          })
        }
      </Row>
    </Container>
  );

};