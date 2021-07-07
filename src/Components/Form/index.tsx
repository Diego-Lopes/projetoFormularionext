import React from "react";
import { Container } from "./styles";
const Form: React.FC = () => {
  return (
    <>
      <Container>
        <form>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="name"
            id="nome"
            placeholder="Seu nome"
            className="nome"
          />
          <label htmlFor="nome">Telefone</label>
          <input
            type="text"
            name="telefone"
            placeholder="Seu telefone"
            className="telefone"
          />
          <label htmlFor="nome">E-mail</label>
          <input type="mail" name="email" placeholder="Seu e-mail" />

          <input
            type="submit"
            name="button"
            value="Enviar dados"
            className="botao"
          />
        </form>
      </Container>
    </>
  );
};
export default Form;
