import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


export function Register(props) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [descricao, setDescricao] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup = async () => {
    try {
      if (!nomeCompleto || !email || !cpf || !descricao) {
        setError("Preencha todos os campos");
        return;
      }

      // Chame a função signup passando os dados necessários
      const res = await signup(nomeCompleto, email, cpf, descricao);

      if (res.error) {
        setError(res.error);
        return;
      }

      alert("Usuário cadastrado com sucesso!");
      navigate("/"); // Navegue para a página desejada após o cadastro
    } catch (error) {
      console.error("Erro durante o cadastro:", error);
      setError("Erro durante o cadastro. Verifique o console para mais detalhes.");
    }
  };
  return (
    <div className="bg-cyan-950 flex flex-col items-center px-3.5 py-12 relative h-screen w-screen overflow-x-hidden">
      <div className="flex w-[642px] max-w-full flex-col mt-28 mb-20 items-start max-md:my-10">
        <div className="w-[521px] max-w-full flex flex-col ml-2.5 max-sm:flex max-sm:flex-col">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-5">
            <div className="flex flex-col items-stretch w-[63%] pl-20 max-md:w-full max-md:ml-[-44px]">
              <Link
                to="/Register"
                className="text-sky-600 text-4xl font-extrabold bg-cyan-900 grow justify-center items-stretch w-full mx-auto pl-10 pr-16 py-10 rounded-[30px] max-md:mt-10 max-md:pl-10 max-md:pr-6">
                Cadastrar
              </Link>
            </div>
            <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-[80px]">
              <Link
                to="/Listagem"
                onClick={(e) => {
                  if (!isUserLoggedIn) {
                    e.preventDefault();
                    alert("Ei calma, entre antes de acessar a lista");
                  }
                }}
                className="text-sky-600 text-4xl font-extrabold my-auto"
              >
                Listagem
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white self-stretch flex flex-col mt-5 pt-6 px-20 rounded-xl max-md:max-w-full max-md:px-5">
          <div className="text-black text-center text-3xl self-center max-w-[665px]">
            Cadastrar Funcionario
          </div>

          <label htmlFor="nomeCompleto">
            <input
              type="text"
              id="nomeCompleto"
              className="text-black text-base border bg-white self-stretch justify-center mt-12 pl-4 pr-[270px] py-5 rounded-md border-solid border-black items-start max-md:max-w-full max-md:mr-0.5 max-md:mt-10 max-md:pr-25"
              value={nomeCompleto}
              onChange={(e) => {
                setNomeCompleto(e.target.value);
                setError("");
              }}
              placeholder="Nome Completo"
              required
            />
          </label>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              className="text-black text-base border bg-white self-stretch justify-center mt-12 pl-4 pr-[270px] py-5 rounded-md border-solid border-black items-start max-md:max-w-full max-md:mr-0.5 max-md:mt-10 max-md:pr-25"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Email"
              required
            />
          </label>
          <label htmlFor="cpf">
            <input
              type="text"
              id="cpf"
              className="text-black text-base border bg-white self-stretch justify-center mt-12 pl-4 pr-[270px] py-5 rounded-md border-solid border-black items-start max-md:max-w-full max-md:mr-0.5 max-md:mt-10 max-md:pr-25"
              value={cpf}
              onChange={(e) => {
                setCpf(e.target.value);
                setError("");
              }}
              placeholder="Cpf"
              required
            />
          </label>
          <label htmlFor="descricao">
            <input
              type="text"
              id="descricao"
              className="text-black text-base border bg-white self-stretch justify-center mt-12 pl-4 pr-[270px] py-5 rounded-md border-solid border-black items-start max-md:max-w-full max-md:mr-0.5 max-md:mt-10 max-md:pr-25"
              value={descricao}
              onChange={(e) => {
                setDescricao(e.target.value);
                setError("");
              }}
              placeholder="Descrição"
              required
            />
          </label>
          <div className="text-black">
            Já tem uma conta?
            <Link to="/" className="hover:underline text-blue-500">
              &nbsp;Entre
            </Link>
          </div>
          {error && <span className="text-red-500 flex justify-center mt-[20px]">{error}</span>}


          <div className="self-stretch z-[1] mt-4 -mb-4 max-md:max-w-full max-md:mr-0.5 max-md:mb-2.5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[20%] ml-5 max-md:w-full max-md:ml-0">
                <button type="button" onClick={handleSignup}>
                  <div className="flex grow flex-col items-end max-md:mt-10">
                    <div className="text-white text-2xl bg-sky-600 self-stretch justify-center mt-1 pl-4 pr-16 py-3.5 rounded-xl items-start max-md:mt-10 max-md:pr-5 max-sm:pl-[120px]">
                      Enviar
                    </div>
                  </div>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


