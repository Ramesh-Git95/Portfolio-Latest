import React from 'react'
import { Linkedin,AtSign,GitBranch } from 'lucide-react'
const Bio = () => {
  return (
    <section className='bg-gradient-to-r from-teal-500 via-teal-500  to-slate-900 text-left md:text-left rounded-xl p-2 md:p-5 shadow-2xl border-2 border-green-900 border-opacity-100 '>
        <div className='flex flex-row'>
       
         <div className='flex flex-col items-start'>
        <h1 className='text-lg md:text-2xl font-bold mt-3 text-black text-left font-serif'>Ramesh Kumar</h1> 
        <p className='py-2 text-black font-semibold font-seri text-left'>I'm a Front-end Developer.</p>
        </div>
        <img src='/profile-pic.png' alt="profile-picture" className='h-32 w-32 shadow-md bg-gray-400 rounded-full ml-2'/>
       
        {/* <div className='flex flex-row gap-3 mt-3'>
            <a href='http://linkedin.com/in/sadeep-chathuranga-ramesh-kumar-ravichandran-a81b95a6' 
                target='_blank' rel='noopener noreferrer'>
            <Linkedin className='text-black hover:text-blue-600 cursor-pointer'/>
            </a>
      
            <a href=''target='_blank' rel='noopener noreferrer'>
            <AtSign className='text-black hover:text-pink-600 cursor-pointer'/>
            </a>

            <a href='https://github.com/Ramesh-Git95' target='_blank' rel='noopener noreferrer'>
            <GitBranch className='text-black hover:text-red-500 cursor-pointer'/>
            </a>

            <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 md:px-2 lg:px-1 -mt-3 rounded-xl inline-flex  ">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/></svg>
  <span className='ml-1'>Download</span>
</button>
        </div> */}


        {/* hiwreiewhnr */}

    </div>
    </section>
  )
}

export default Bio