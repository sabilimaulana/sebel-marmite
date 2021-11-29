export interface Recipe {
  fields: {
    title: string;
    cookingTime: number;
    ingredients: string[];
    slug: string;
  };
  sys: {
    id: string;
  };
}
