export type IGetResponseRecipes = IRecipes[];

export interface IRecipes {
  id: number;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: IMissedIngredient[];
  title: string;
  unusedIngredients: IUnusedIngredient[];
  usedIngredientCount: number;
  usedIngredients: IUsedIngredient[];
}

export interface IMissedIngredient {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  meta: string[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
  extendedName: string;
}

export interface IUsedIngredient {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  meta: any[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
}

export interface IUnusedIngredient {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  meta: any[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
}