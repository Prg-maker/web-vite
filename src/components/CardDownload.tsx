import {DownloadSimple} from 'phosphor-react'

export function CardDownload(){
  return(
    <div className="w-[276px] h-[248px] bg-white shadow-cardShadow flex flex-col items-center gap-[33px]">
      <p className='mt-5 font-sans font-medium'>Versão Linux</p>

      <DownloadSimple weight='bold' className='cursor-pointer' size={46}/>
      

      <span className='font-normal text-sm mt-7'>Repositório: <a href="" className='underline'>Vigilant Garbanzo</a>.</span>
    </div>
  )
}