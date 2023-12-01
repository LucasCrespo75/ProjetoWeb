import * as React from "react";
export function Register(props) {
  return (
    <div className="bg-cyan-950 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <div className="flex w-[642px] max-w-full flex-col mt-28 mb-20 items-start max-md:my-10">
        <div className="w-[521px] max-w-full flex flex-col ml-2.5 max-sm:flex max-sm:flex-col">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
              <div className="text-sky-600 text-4xl font-extrabold bg-cyan-900 grow justify-center items-stretch w-full mx-auto pl-10 pr-16 py-10 rounded-[30px] max-md:mt-10 max-md:pl-5 max-md:pr-6">
                Cadastrar
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
              <div className="text-sky-600 text-4xl font-extrabold ml-auto my-auto max-md:mt-10 max-sm:mx-auto">
                Listagem
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white self-stretch flex flex-col mt-5 pt-6 px-20 rounded-xl max-md:max-w-full max-md:px-5">
          <div className="text-black text-center text-3xl self-center max-w-[665px]">
            Cadastrar Funcionario
          </div>
          <div className="text-black text-base border bg-white self-stretch justify-center mt-12 pl-4 pr-16 py-5 rounded-md border-solid border-black items-start max-md:max-w-full max-md:mr-0.5 max-md:mt-10 max-md:pr-5">
            Nome
          </div>
          <div className="text-black text-base border bg-white self-stretch justify-center mt-6 pl-4 pr-16 py-5 rounded-md border-solid border-black items-start max-md:max-w-full max-md:mr-0.5 max-md:pr-5">
            Email
          </div>
          <div className="text-black text-base border bg-white self-stretch justify-center mt-5 pl-4 pr-16 py-6 rounded-md border-solid border-black items-start max-md:max-w-full max-md:mr-0.5 max-md:pr-5">
            CPF
          </div>
          <div className="text-black text-base border bg-white self-stretch justify-center mt-4 pl-4 pr-16 py-5 rounded-md border-solid border-black items-start max-md:max-w-full max-md:mr-0.5 max-md:pr-5">
            Telefone
          </div>
          <div className="self-stretch z-[1] mt-4 -mb-4 max-md:max-w-full max-md:mr-0.5 max-md:mb-2.5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
                <div className="flex gap-1 mt-3 items-start max-md:mt-10">
                  <div className="bg-zinc-600 flex w-[11px] shrink-0 h-[11px] flex-col" />
                  <div className="text-black text-xs grow whitespace-nowrap">
                    Termos de privacidade
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-end max-md:mt-10">
                  <div className="text-white text-sm whitespace-nowrap bg-cyan-950 aspect-[1.7837837837837838] justify-center items-stretch pl-1.5 pr-7 py-3 rounded-xl max-md:pr-5">
                    Limpar
                  </div>
                  <div className="text-white text-2xl bg-sky-600 self-stretch justify-center mr-48 mt-10 pl-6 pr-16 py-3.5 rounded-xl items-start max-md:mt-10 max-md:pr-5 max-sm:pl-0">
                    Enviar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sky-600 text-2xl font-extrabold shadow-sm bg-cyan-900 self-center justify-center items-stretch mt-20 pl-6 pr-9 py-6 rounded-md max-md:mt-10 max-md:px-5">
          Home
        </div>
      </div>
    </div>
  );
}


