import {DownloadSimple} from 'phosphor-react'

interface CardDownloadProps{
  versionTitle:string;
  urlDownload: string;
}
//

export function CardDownload(props:CardDownloadProps){
  return(
    <div className="md:w-[276px]  w-[233px] h-[248px] bg-zinc rounded shadow-cardShadow flex flex-col items-center gap-[33px]">
      <p className='mt-5 font-sans font-medium'>Versão {props.versionTitle}</p>

      <a href={props.urlDownload}>
        <DownloadSimple weight='bold' className='cursor-pointer' size={46}/>
      </a>
      <span className='font-normal text-sm mt-7'>Repositório: <a href="https://github.com/Prg-maker/vigilant-garbanzo-web-vite" className='underline'>Vigilant Garbanzo</a>.</span>

      
    </div>
  )
}