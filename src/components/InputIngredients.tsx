import { useEffect, useRef, useState } from "react";
import { IGetResponseRecipes } from "../utils/types";
import axios from "axios";
import { useAppDispatch } from "../hook";
import { setResipes } from "../store/recipesSlice";
import { Stack, Form, Button } from "react-bootstrap";

export function InputIngredients() {
  const [value, setValue] = useState<string>('');
  const [products, setProducts] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(inputRef.current) inputRef.current.focus();
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === 'Enter') handleAdd();
  };

  const handleAdd = () => {
    if(value) {
      if(!products.includes(value)) setProducts([...products, value]);
      setValue('');
    }
  };

  async function fetchRecipes() {
    try {
      const ingredients = products.join(', ');
      const { data } = await axios.get<IGetResponseRecipes>(
        'https://api.spoonacular.com/recipes/findByIngredients',
        {
          params: {
            apiKey: '308606e8bc7d4cfcb457c64f78eb05d9',
            ingredients,
            ignorePantry: true,
            number: 100,
            ranking: 2,
          }
        }
      );

      dispatch(setResipes(data));
    } catch(error) {
      console.log(error)
    }
  }

  return(
    <>
      <Stack direction="horizontal" gap={2} className="my-3">
        <Form.Control  value={value} onChange={handleChange} onKeyDown={handleKeyDown} type="text" minLength={2} placeholder='Write product' ref={inputRef} />
        <Button onClick={handleAdd}>Add</Button>
        <div className="vr" />
        <Button variant="success" onClick={fetchRecipes}>Find</Button>
      </Stack>
      <div>
        {
          products?.map(product => {
            return(
              <Button className="m-1" variant="outline-secondary" size="sm" key={product} onClick={() => setProducts(products.filter( p => p !== product))}>
                {product} x
              </Button>
            )
          })
        }
      </div>
    </>
  );
}

