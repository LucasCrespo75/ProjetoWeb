import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

export function Listagem(props) {
    const { users } = useContext(AuthContext);

    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="bg-cyan-950 flex flex-col items-center px-3.5 py-12 relative min-h-screen w-screen bg-cover">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-7 max-w-[800px] w-full">
                <a href="/homeRegistrado" className="text-sky-600 text-4xl font-extrabold my-2">
                    Home
                </a>
                <a
                    href="/listagem"
                    className="text-sky-600 text-4xl font-extrabold bg-cyan-900 px-6 py-4 rounded-[30px] sm:px-10 sm:py-6 max-md:px-5 mt-4 sm:mt-0 ml-0 sm:ml-4"
                >
                    Listagem
                </a>
                <div className="mt-4 sm:mt-0 ml-[5px]">
                    <button
                        onClick={() => [signout(), navigate("/")]}
                        className="text-sky-600 text-4xl font-extrabold  px-6 py-4  sm:px-10 sm:py-6 max-md:px-5"
                    >
                        Logout
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {users.map((userData, index) => (
                    <div key={index} className="bg-white p-4 rounded-md mb-4">
                        <div className="font-extrabold mb-2">Nome Completo: {userData.nomeCompleto || "N/A"}</div>
                        <div className="mb-2">Email: {userData.email || "N/A"}</div>
                        <div className="mb-2">CPF: {userData.cpf || "N/A"}</div>
                        <div>Descrição: {userData.descricao || "N/A"}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
