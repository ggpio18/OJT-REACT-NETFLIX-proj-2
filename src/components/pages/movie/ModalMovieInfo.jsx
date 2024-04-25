import React from 'react'
import { FaPlay, FaPlusCircle, FaThumbsUp, FaTimesCircle } from 'react-icons/fa'
import { baseImgUrl2 } from '../../helpers/functions-general';

const ModalMovieInfo = ({setMovieInfo, movieData}) => {

    const handleClose = () => setMovieInfo(false);

  return (
    <div className='fixed top-0 left-0 isolate w-full h-screen'>
        <div className="backdrop absolute top-0 left-0 h-full w-full bg-black/80"> </div>

        <main className=' max-w-[700px] w-full bg-[#141414]  text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] max-h-[700px] h-full'>
            <div className='modal__banner'>
                <div className='relative'>
                    <img src={`${baseImgUrl2}/movie/${movieData.image}`} alt=""  className='opacity-80 w-full h-400px bg-cover' />
                    <button onClick={handleClose} type='button' className='absolute top-4 right-4'><FaTimesCircle className='text-[#b5b5b5]'/>
                    </button>

                    <div className='absolute left-[20px] bottom-[30px] z-[9999]'>
                        <h2 className='text-4xl font-bold mb-5'>{movieData.title}</h2>
                        <ul className='flex items-center gap-2  text-white'>
                            <li><button className='py-1 px-3 text-[#141414] flex items-center gap-2 bg-white rounded-md text-sm'><FaPlay/>Play</button></li>
                            <li><button><FaPlusCircle/></button></li>
                            <li><button><FaThumbsUp/></button></li>
                        </ul>
                    </div>
                </div>
                <div className='movie__info relative p-4 grid grid-cols-[3fr_1fr] gap-5'>

                    <div className="info">
                        <div className='duration mb-3'>
                            <p className='tex-sm mb-2'><span>{movieData.year} </span> <span>{movieData.duration}</span> <span className='p-0.5 border border-white text-xs'>HD</span></p>
                            <p className='p-0.5 border border-white inline text-xs'>{movieData.rating}+</p>
                        </div>

                        <p>{movieData.description}
                        </p>
                    </div>    

                    <ul className=''>
                        <li className='text-stone-200 mb-3 text-sm'><span className='text-stone-500'>Cast: </span>{movieData.cast}</li>

                        <li className='text-stone-200 mb-3 text-sm'><span className='text-stone-500'>Genres: </span>{movieData.genre}</li>

                        <li className='text-stone-200 mb-3 text-sm'><span className='text-stone-500'>This Movie is: </span>{movieData.type}</li>
                    </ul>

                </div>

            </div>
        </main>

    </div>
  )
}

export default ModalMovieInfo
