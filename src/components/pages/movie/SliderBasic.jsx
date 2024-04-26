import React from 'react'
import Slider from 'react-slick';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { baseImgUrl2 } from '../../helpers/functions-general';


const SliderBasic = ({setMovieInfo, movies, setmovieData, grouping, sliderHeader}) => {

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
    {/* div classname relative mb-5 */}

    <div className='relative mb-5'>
    <h3 className='text-3xl mb-5 font-bold'>{sliderHeader}</h3>

    <Slider {...settings}>

      {getGroupings.map((movie, key) => (
      <div key={key}>
        <button className='relative' onClick={() => handleShowMovieInfo(movie)}>
          <img src={`${baseImgUrl2}/movie/${movie.image}`} alt=""  className='w-[320px] h-[200px] bg-cover'/>
          <span className='px-2 py-1 rounded-tl-md rounded-tr-md absolute bottom-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[12px]'>Recently Added</span>
        </button>
      </div>
      ))}

      
    </Slider>

    </div>

    </>
  );
  
}

export default SliderBasic
