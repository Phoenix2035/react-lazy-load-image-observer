import LazyLoadImage from "./components/LazyLoadImage";
import Img1 from "./img/1.png"
import Img2 from "./img/2.png"
import Img3 from "./img/3.png"


function App() {
    const images = [Img1, Img2, Img3]

    return (
        <div>
            <div className="large-text" />

            {
                images.map((item, index) =>
                    <LazyLoadImage src={item} key={index} />
                )
            }
        </div>
    )
}

export default App;
