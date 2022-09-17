import { CardDownload } from "./components/CardDownload";

function App() {
  return (
    <div className="max-full h-screen bg-white ">
      <header className="w-full h-1/3 bg-backgroundColorApp flex flex-col  justify-center items-center relative">
        <h1 className="font-sans font-semibold  text-4xl text-white">
          Desenhe Onde Você Quiser
        </h1>

        <div
          className="
          w-[600px] 
          h-[278px]  
          bg-zinc-50 
          rounded-lg absolute 
          mt-[400px] 
          shadow-viGi 
          cursor-pointer
          flex
          flex-col 
          items-center
          "
        >
          <h2 className="text-4xl font-sans  font-medium mt-5">
            Vigilant Garbanzo
          </h2>

          <div className="mt-5  flex flex-col gap-5">
            <p className="font-sans font-normal  text-xl">Versão atual: 1.0</p>
            <p className="font-sans font-normal  text-xl">
              Author: Daniel F. Silva
            </p>
            <p className="font-sans font-normal  text-xl">
              github: <a className="underline font-medium " href="https://github.com/Prg-maker">Prg-Maker</a>
            </p>
          </div>
        </div>
      </header>

      <div className="w-full h-[274px]" />

      <div className="w-full h-[274px] grid grid-rows-1 grid-flow-col justify-center gap-x-40">

        <CardDownload/>
        <CardDownload/>


      </div>


    </div>
  );
}

export default App;
