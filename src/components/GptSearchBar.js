import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'


const GptSearchBar = () => {

  const langkey = useSelector((store) => store.config.lang)

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2  bg-black grid grid-cols-12  '>
        <input className=' p-2 m-4 col-span-9 rounded-md' type='text' placeholder={lang[langkey].gptSearchPlaceHolder}/>
        <button className='col-span-3 m-4 bg-red-600 text-white rounded-md'>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
