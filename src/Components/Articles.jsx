import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Styles/Articles.css'
import Article1 from "../assets/article-1.png"
import Article2 from "../assets/article-é.png"
import Article3 from "../assets/article-3.png"
import Article4 from "../assets/article-4.png"

function Articles() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='w-3/4 m-auto' style={{margin:"50px auto"}}>
        <h1 className="Article-Title" style={{textAlign:'center'}}>Nos Articles</h1>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
            <div className='flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt=""/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.review}</p>
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Voir plus..</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `Drink Water`,
    img:Article1,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Save Water`,
    img: Article2,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Water Factory`,
    img: Article3,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `our Products in Markets`,
    img: Article4,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  }
  
];

export default Articles;