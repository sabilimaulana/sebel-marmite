import { createClient } from 'contentful';
import type { GetStaticProps, NextPage } from 'next';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types';

interface HomeProps {
  recipes: Recipe[];
}

const Home: NextPage<HomeProps> = ({ recipes }: HomeProps) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || ''
  });

  const res = await client.getEntries({ content_type: 'recipe' });

  return { props: { recipes: res.items } };
};

export default Home;
