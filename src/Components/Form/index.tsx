import React, { FormEvent, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Container } from "./styles";
export default function Form() {
  const [userName, setUserName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("enviado");
    if (!email) {
      toast.error("email nescessário.");
    }
    if (userName !== "" && tel !== "" && email !== "") {
      console.log("entrando na api");

      axios
        .post("/api/mail", {
          userName,
          tel,
          email,
        })
        .then(() => {
          setUserName("");
          setTel("");
          setEmail("");
          toast.success("Formulário enviado com secesso!", {
            id: email,
            style: {
              width: "auto",
            },
          });
        })
        .catch(() => {
          toast.error(
            "Erro ao enviar o formulário! Por favor, tente novamente mais tarde."
          );
        });
    }
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Seu nome"
            className="nome"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
          <label htmlFor="t">Telefone</label>
          <input
            type="text"
            id="t"
            // name="telefone"
            placeholder="Seu telefone"
            className="telefone"
            onChange={(e) => setTel(e.target.value)}
            value={tel}
          />
          <label htmlFor="e">E-mail</label>
          <input
            type="mail"
            id="e"
            // name="email"
            placeholder="Seu e-mail"
            className="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button
            type="submit"
            // name="button"
            value="Enviar dados"
            className="botao"
          >
            Enviar
          </button>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </Container>
    </>
  );
}
