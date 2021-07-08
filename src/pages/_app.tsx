import React from "react";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import Form from "../Components/Form/";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <Form />
    </>
  );
};

export default MyApp;
