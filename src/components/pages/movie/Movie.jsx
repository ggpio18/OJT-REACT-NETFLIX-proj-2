import React from 'react'
import { baseImgUrl2 } from '../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import SliderBasic from './SliderBasic';
import ModalMovieInfo from './ModalMovieInfo';
import { movies } from './data';
import Footer2 from '../../partials/Footer2';
import SliderTop from './SliderTop';
import ModalSearch from './ModalSearch';

const Movie = () => {

    const [showMovieInfo, setMovieInfo] = React.useState(false)
    const [movieData, setmovieData] = React.useState(null)
    const [search, setSearch] = React.useState(false)
    


    const handleShowSearch = () => setSearch(true);

  return (
    <>
    <div className='bg-[#141414] text-white'>
    <div className="banner bg-[url('../../img/movie/banner-movie.jpg')] bg-cover h-[90vh] relative isolate">
        <div className="backdrop bg-black/50 absolute top-0 left-0 h-full w-full -z-10"></div>
      <div className="header py-4 px-2 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.0)]">
        <div className="flex justify-between items-center">

            <div className='flex items-center gap-10'>
                <img src={`${baseImgUrl2}/logo.png`} alt="" className='w-[148px] h-[40px] object-cover'/>
                
                    <ul className='flex items-center gap-5 text-white'>
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">Tv Shows</Link></li>
                        <li><Link to="#">Movies</Link></li>
                        <li><Link to="#">News & Popular</Link></li>
                        <li><Link to="#">My List</Link></li>
                        <li><Link to="#">Browse by langauges</Link></li>
                    </ul>
                
            </div>

            {/* icons */}
            <div>
                <ul className='flex items-center gap-5 text-white'>
                    <li><button onClick={handleShowSearch}><FaSearch  className='text-xl'/></button></li>
                    <li><button><FaRegBell className='text-xl'/></button></li>
                    <li className='flex items-center gap-3'>
                    <button><img src={`${baseImgUrl2}/movie/user-icon.jpg`} alt=""  className='rounded-md size-[40px]'/></button>
                    <FaCaretDown />
                    </li>
                </ul>

            </div>

        </div>
      </div>

        <div className="absolute left-[10%] bottom-[25%] text-white">
            <h1 className='text-[80px] font-bold '>Bleach </h1>
            <ul className='flex gap-5'>
                <li><button className='px-6 py-3 rounded-md bg-white text-stone-800 font-bold flex items-center gap-2'><IoMdPlay />Trailer</button></li>
                <li><button className='px-6 py-3 rounded-md bg-stone-500 text-white border-stone-400 flex items-center gap-2'><IoMdInformationCircleOutline />More Info</button></li>
            </ul>
        </div>

    </div>

    <div className='slider-wrapper px-10 py-20 overflow-hidden'>
    <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setmovieData={setmovieData} grouping="trending" sliderHeader="Trending Movies"/>
    <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setmovieData={setmovieData} grouping="asia" sliderHeader="Asian Movies"/>
    <SliderTop setMovieInfo={setMovieInfo} movies={movies} setmovieData={setmovieData} grouping="top10" sliderHeader="Top 10 Movies"/>
    <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setmovieData={setmovieData} grouping="anime" sliderHeader="Anime"/>
    <SliderTop setMovieInfo={setMovieInfo} movies={movies} setmovieData={setmovieData} grouping="top10" sliderHeader="Top 10 Series"/>


    </div>

    </div>
    {showMovieInfo && <ModalMovieInfo setMovieInfo={setMovieInfo} movieData={movieData} />}

    {search && <ModalSearch setSearch={setSearch}/>}

    <Footer2/>
    </>
  )
}

export default Movie
