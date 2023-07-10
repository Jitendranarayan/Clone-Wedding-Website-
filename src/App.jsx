import "./App.CSS";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function App() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="App">
            <h1>React multi carousel </h1>
            <Carousel responsive={responsive}>
              <div className="card">
                <img className="product--image" 
                src="" alt="product image" />
                <h2></h2>
                <p className=""></p>
            
              </div>
            
            </Carousel>; 

        </div>
    );
}