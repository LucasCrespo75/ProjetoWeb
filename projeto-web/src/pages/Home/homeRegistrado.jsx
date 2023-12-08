
import * as React from "react";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";


export function HomeRegistrado(props) {

  const { signout } = useAuth();
  const navigate = useNavigate();


  return (
    <div className="bg-black pl-20 pr-12 py-12 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <div className="flex flex-col w-full mt-[-45px] max-w-full px-[45px] max-md:px-[1px]">
              <div className="flex space-x-[15px]">
                <button
                  onClick={() => [signout(), navigate("/")]}
                  className="flex-col text-sky-600 text-4xl font-extrabold relative overflow-hidden self-center aspect-[3] justify-center items-stretch mt-3.5 pl-8 pr-6 py-6 max-md:px-5"
                >
                  Logout
                </button>
                <Link
                  to="/listagem"
                  className="text-sky-600 text-4xl font-extrabold self-stretch whitespace-nowrap ml-[140px] mt-[22px] pl-[-10px] max-md:max-w-full max-md:mr-2.5">
                  Listagem
                </Link>
              </div>
              <div className="">
                <div className="text-white text-5xl self-center max-w-[898px] mt-14 mr-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                  <font face="Krona One, sans-serif">
                    Transforme sua empresa em um modelo de eficiência com nossas
                    soluções.{" "}
                  </font>
                </div>
                <div className="text-cyan-400 text-5xl self-stretch w-full mr-4 mt-2 max-md:text-4xl max-md:mr-2.5">
                  <font face="Krona One, sans-serif">
                    A automação é o caminho para o sucesso!<br />
                  </font>
                </div>
              </div>
              <div className="text-white text-2xl self-stretch max-w-[933px] ml-1 mr-4 mt-1.5 max-md:max-w-full max-md:mr-2.5 max-sm:-ml-1">
                <font face="Krona One, sans-serif">
                  Transforme sua empresa em um modelo de eficiência com nossas
                  soluções de cadastro e monitoramento de funcionários. A
                  automação é o caminho para o sucesso! Na busca pela excelência
                  operacional, nossa plataforma simplifica processos, economiza
                  tempo e impulsiona o crescimento do seu negócio. Com as
                  ferramentas certas, sua empresa estará preparada para
                  enfrentar os desafios do mercado e prosperar no mundo moderno
                  dos negócios.
                </font>
              </div>
            </div>
            <div className="mt-6 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="bg-cyan-950 flex w-full grow flex-col items-stretch mx-auto pl-3.5 pr-8 pt-3.5 pb-12 rounded-xl max-md:mt-9 max-md:pr-5">
                    <div className="relative flex items-stretch justify-between gap-2">
                      <img
                        loading="lazy"
                        srcSet="https://static.thenounproject.com/png/2774773-200.png"
                        className="aspect-[1.18] object-contain object-center w-[86px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-black text-center text-2xl font-extrabold grow shrink basis-auto mt-6 self-end">
                        <font face="Inter, sans-serif">
                          Aqui você cadastrará seus dados
                        </font>
                      </div>
                    </div>
                    <div className="relative text-white text-center text-2xl mt-7">
                      Com toda a nossa estrutura, queremos que você se sinta o
                      mais confortável em cadastrar seus
                      <br />
                      funcionários.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="bg-cyan-950 flex w-full grow flex-col items-stretch mx-auto pl-3.5 pr-8 pt-3.5 pb-12 rounded-xl max-md:mt-9 max-md:pr-5">
                    <div className="flex items-stretch justify-between gap-4">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf55fd691556aaaf3aed56c0f31036115815f2f1ca88742d70d0ca6f509f3208?"
                        className="aspect-[1.03] object-contain object-center w-[90px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-black text-center text-2xl font-extrabold self-center grow whitespace-nowrap my-auto">
                        <font face="Inter, sans-serif">Simplicidade</font>
                      </div>
                    </div>
                    <div className="text-white text-center text-2xl ml-3.5 mt-8 self-start max-md:ml-2.5">
                      Aqui terá todos os dados pessoais de todos os seus
                      funcionários, onde você conseguirá monitorá-los.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="bg-cyan-950 flex w-full grow flex-col items-center mx-auto pb-8 rounded-xl max-md:mt-9">
                    <div className="flex items-stretch gap-px">
                      <img
                        loading="lazy"
                        srcSet="https://icons.veryicon.com/png/o/object/material-design-icons/fingerprint-5.png"
                        className="aspect-[0.7] object-contain object-center w-[70px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-black text-center text-2xl font-extrabold self-center grow shrink basis-auto my-auto">
                        <font face="Inter, sans-serif">Segurança avançada</font>
                      </div>
                    </div>
                    <div className="text-white text-center text-2xl self-stretch mt-7">
                      Tratamos com segurança tanto para a empresa determinada
                      quanto para o funcionário, de acordo com a<br />
                      Política de Privacidade.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://i.pinimg.com/564x/bf/c3/7a/bfc37a503d8fcf4d8dbf1278efbe4608.jpg"
              className="aspect-[0.67] object-contain object-center w-full overflow-hidden max-md:max-w-full"
            />
            <Link
              to="/listagem"
              className="flex-col text-sky-600 text-4xl font-extrabold relative overflow-hidden self-center aspect-[3] justify-center items-stretch mt-3.5 pl-8 pr-6 py-6 max-md:px-5">
              Veja a Lista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


