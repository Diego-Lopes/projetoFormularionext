import HomeTemplate from "../Template/Home/index";
import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Formulário Padrão</title>
      </Head>

      <main>
        <HomeTemplate />

        <a href="https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJly9HHxWbyZMRDf5CthB0Y5M"></a>
      </main>
    </div>
  );
};
export default Home;
