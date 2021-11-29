import { createClient } from 'contentful';
import type { GetStaticProps, NextPage } from 'next';

interface HomeProps {
  recipes: any[];
}

const Home: NextPage<HomeProps> = ({ recipes }: HomeProps) => {
  console.log(recipes);
  return <div className="recipe-list">Recipe List</div>;
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
