import {DownloadSimple} from 'phosphor-react'

interface CardDownloadProps{
  urlDownload: string;
}
//
export function CardDownload(props:CardDownloadProps){
  return(
    <div className="w-[276px] h-[248px] bg-white shadow-cardShadow flex flex-col items-center gap-[33px]">
      <p className='mt-5 font-sans font-medium'>Versão Linux</p>

      <a href={props.urlDownload}>
        <DownloadSimple weight='bold' className='cursor-pointer' size={46}/>
      </a>
      <span className='font-normal text-sm mt-7'>Repositório: <a href="" className='underline'>Vigilant Garbanzo</a>.</span>
    </div>
  )
}