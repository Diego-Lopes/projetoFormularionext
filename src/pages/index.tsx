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

        <iframe src="https://g.page/r/CQOWBu1NSOrPEAg/review"> </iframe>
      </main>
    </div>
  );
};
export default Home;
