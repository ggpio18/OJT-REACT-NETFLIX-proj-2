import React from 'react'
import Slider from 'react-slick';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { baseImgUrl2 } from '../../helpers/functions-general';

const SliderTop = ({setMovieInfo, movies, setmovieData, grouping, sliderHeader}) => {

    const handleShowMovieInfo = (movie) => {
        setmovieData(movie);
        setMovieInfo(true);
      }
    
      function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            // style={{ ...style, display: "flex", background: "green"}}
            onClick={onClick}>
            <PiCaretRightBold />
        </div>
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                // style={{ ...style, display: "flex", background: "green"}}
                onClick={onClick}>
                <PiCaretLeftBold />
            </div>
        );
      }
    
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />        
          };
    
          const getGroupings = movies.filter((movie) => movie.grouping === grouping)
    

  return (
    <>
      <div className='relative mb-5'>
    <h3 className='text-3xl mb-5 font-bold'>{sliderHeader}</h3>

    <Slider {...settings}>

      {getGroupings.map((movie, key) => (
      <div key={key}>
        <button className='relative' onClick={() => handleShowMovieInfo(movie)}>
        <div className='grid grid-cols-1'>
            {/* <span className='number w-[100px] h-[250px] bg-cover text-[10rem] right-[170px] absolute'>{movie.top}</span> */}
            <img src={`${baseImgUrl2}/movie/${movie.top}`} alt="" className='number w-[200px] h-[270px] object-cover right-[120px] absolute'/>
          <img src={`${baseImgUrl2}/movie/${movie.image}`} alt=""  className='w-[200px] h-[270px] object-cover z-[999] '/>
          </div>
        </button>
      </div>
      ))}

      
    </Slider>

    </div>
    </>
  )
}

export default SliderTop
