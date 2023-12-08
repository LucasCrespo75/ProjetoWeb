import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersStorage = localStorage.getItem("users_bd");
    if (usersStorage) {
      setUsers(JSON.parse(usersStorage));
    }
  }, []);

  const signin = (email, cpf) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter(
      (user) => user.email === email && user.cpf === cpf
    );

    if (hasUser?.length) {
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("user_token", JSON.stringify({ email, token }));
      return;
    } else {
      return "E-mail ou CPF incorretos";
    }
  };

  const signup = (nomeCompleto, email, cpf, descricao) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.cpf === cpf);

    if (hasUser?.length) {
      return "Já existe uma conta com este CPF";
    }

    const newUser = { nomeCompleto, email, cpf, descricao };
    const newUsers = [...usersStorage, newUser];
    localStorage.setItem("users_bd", JSON.stringify(newUsers));
    setUsers(newUsers);

    return;
  };

  const signout = () => {
    localStorage.removeItem("user_token");
    // Limpar os usuários no logout (se necessário)
    setUsers([]);
  };

  return (
    <AuthContext.Provider
      value={{ users, signed: users.length > 0, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
