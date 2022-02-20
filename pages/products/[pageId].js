import Head from "next/head";
import { Fragment } from "react";
import Product from "../../components/Product";
import styles from "../../styles/Home.module.css";

const productPage = (props) => {
  const product = props.data;
  return (
    <Fragment>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <main className={styles.productPage}>
        <Product data={product} />
      </main>
    </Fragment>
  );
};

export default productPage;

export const getServerSideProps = async (context) => {
  const { params } = context;

  const pageId = params.pageId;

  const res = await fetch(`https://fakestoreapi.com/products/${pageId}`);
  const data = await res.json();
  console.log(res);

  return {
    props: {
      data,
    },
  };
};
