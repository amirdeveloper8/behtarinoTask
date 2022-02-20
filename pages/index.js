import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Redirect to Product 1 !</h1>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    redirect: {
      permanent: false,
      destination: "/products/1",
    },
  };
};
