import { Modal, Image, Container, Row, Spinner, ListGroup  } from "react-bootstrap";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hook";
import { closePopup } from "../store/popupSlice";
import { IResipe } from "../utils/typesResipe";


export function Popup() {
  const popup = useAppSelector(state => state.popup);
  const show = popup.show;
  const id = popup.id;

  const [recipe, setResipe] = useState<IResipe>();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  async function fetchRecipes() {
    try {
      setIsLoading(true);
      const { data } = await axios.get<IResipe>(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          params: {
            apiKey: '308606e8bc7d4cfcb457c64f78eb05d9',
            id,
          }
        }
      );
      setResipe(data)
      setIsLoading(false);
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(show) fetchRecipes();
  }, [show]);

  return(

      <Modal show={show} onHide={() => dispatch(closePopup())} animation={false} centered size="lg" style={{minHeight: '300px'}}>
        {
          isLoading ?
            <>
              <Modal.Body style={{minHeight: '320px'}} className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" style={{width: '100px', height: '100px', borderWidth: '10px'}}  />
              </Modal.Body>
            </>
          :
          recipe &&
            <>
              <Modal.Header closeButton>
                <Modal.Title>{recipe.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Row className="mb-4">
                    <Image src={recipe.image} fluid />
                  </Row>
                  <Row>
                    <h5>Ingredients</h5>
                    <p>
                      {
                      recipe.extendedIngredients.map((ingredient: any) => {
                          return(
                            `${ingredient.name} (${ingredient.measures.metric.amount}${ingredient.measures.metric.unitShort}), `
                          )
                        })
                      }
                    </p>
                  </Row>
                  <Row>
                    <h5>Instructions</h5>
                    <ListGroup as="ol" numbered>
                      {
                        recipe.analyzedInstructions[0].steps.map((item: any) => {
                          return(
                            <ListGroup.Item as="li">{item.step}</ListGroup.Item>
                          )
                        })
                      }
                    </ListGroup>
                  </Row>
                </Container>
                </Modal.Body>
              <Modal.Footer>
                Ready: {recipe.readyInMinutes} minutes
              </Modal.Footer>
            </>
        }
      </Modal>
  );
}