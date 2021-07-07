import HomeTemplate from "../Template/Home/index";
import React from "react";
import Head from "next/head";

import Form from "../Components/Form";
// import HomeTemplate from "../template/home";
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <main>
        <h1>Oi</h1>
        <HomeTemplate />
      </main>
    </div>
  );
};
export default Home;
