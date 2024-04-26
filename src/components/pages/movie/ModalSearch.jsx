import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { LuFileQuestion } from "react-icons/lu";
import { movies } from './data';
import { baseImgUrl2 } from '../../helpers/functions-general';



const ModalSearch = ({setSearch}) => {
    const [result, setResult] =React.useState([]);
    const [keyword, setKeyword] = React.useState('');
    const handleKeyword = (e) => setKeyword(e.target.value);
    const getSearchResult = () => setResult(movies.find(movie => movie.title.toLowerCase() === keyword.toLowerCase()));

   
    

    // const handleClose = () =>{
    //     if (e.key === "Escape") {
    //         setSearch(false)
    //     }
    // }
    // handleClose(e)


  return (
    <div className='fixed top-0 left-0  isolate w-full h-screen '>
    <div className="backdrop absolute top-0 left-0 h-full w-full bg-black/80 "></div>
      <main className='max-w-[700px] w-full bg-[#141414] text-white absolute left-1/2 top-[180px] -translate-x-1/2  z-[9999] min-h-[80px] rounded-md'>
        <div className='relative p-2'>
            <input type="text" className='outline-none focus:border-accent w-full  border-b border-stone-500 px-4 py-3 bg-transparent placeholder:opacity-30' placeholder='Search...' onChange={(e) => handleKeyword(e)}/>
            <button className='absolute top-8 right-6' onClick={getSearchResult}><FaSearch/></button>
        </div>

        {result.length !== 0 ? (<div className="result p-3">
          <h3 className='font-bold mb-5 text-[#454545]'>Results keyword "<span className='text-white'> {keyword} </span>"</h3>
          <div className='grid grid-cols-[1fr_2.5fr] gap-5'>
              <img src={`${baseImgUrl2}/movie/${result.image}`} alt="" className='w-full h-auto object-cover'/>
              <div>
                <ul className='space-y-1'>
                  <li className='flex  items-center gap-2'>{result.title} - <span className='p-0.5 border border-white text-[10px]'>{result.rating}</span> <span className='p-0.5 border border-white text-[8px]'>HD</span> <span className='text-xs'>{result.year}</span>  </li>
                  <li>{result.cast}</li>
                  <li className='text-sm'>{result.genre}</li>
                  <li className='text-sm'>{result.description}</li>
                </ul>
              </div>
          </div>
        </div>) : ( 
        <div className='result-none py-8 flex flex-col items-center'>
        <LuFileQuestion className='text-9xl opacity-20 mb-5'/>
        <h3 className='text-2xl opacity-20'>No Movie found</h3>
        </div>) }

        
    </main>
  </div>

  )
}

export default ModalSearch
