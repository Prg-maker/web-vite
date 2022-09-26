import { CardAdSense } from "./components/CardAdSense";
import { CardDownload } from "./components/CardDownload";

function App() {
  return (
    <div className="max-full h-screen bg-white relative">
      <header className="w-full h-1/3 bg-backgroundColorApp flex flex-col  justify-center items-center relative">
        <h1 className="font-sans font-semibold  md:text-4xl sm:text-2xl text-xl text-white">
          Desenhe Onde Você Quiser
        </h1>

        <div
          className="
          sm:w-[600px]
          w-[300px]
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
           <h2 className="md:text-4xl text-3xl  font-sans  font-medium mt-5">
            Vigilant Garbanzo
          </h2>

          <div className="mt-8  flex flex-col gap-5 ">
        
            <p className="font-sans font-normal  md:text-xl text-lg">Versão atual: 1.0</p>
            <p className="font-sans font-normal md:text-xl text-lg">
              Author: Daniel F. Silva
            </p>
            <p className="font-sans font-normal  md:text-xl text-lg">
              github:
              <a
                className="underline font-medium "
                href="https://github.com/Prg-maker"
              >
                Prg-Maker
              </a>
            </p>
          </div>
        </div>
      </header>

      <div className="w-full h-[250px]" />

      <div 
        className="w-full h-[274px] flex justify-center flex-col items-center mt-20  sm:grid sm:grid-rows-1 sm:grid-flow-col  md:gap-x-40  gap-6 "
      >
       
        <CardDownload

          key="linux"
          versionTitle="Linux"
          urlDownload="https://drive.google.com/u/0/uc?id=1uKW8b88RajwUtNqPAEYbK8dg4W_Orkjd&export=download"
        />
        <CardDownload
          key="win"
          versionTitle="Windows"
          urlDownload="https://drive.google.com/u/0/uc?id=1jWrR0VwoKOHRhmli5Fu1MALsGMQpgJ5b&export=download"
        />
      </div>

      <div className="h-32"/>

    </div>
  );
}

export default App;
