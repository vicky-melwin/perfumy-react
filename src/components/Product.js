import one from "../assets/images/1.jpg"
import two from "../assets/images/2.jpg"
import three from "../assets/images/3.gif"

// Product Component 
function Product() {
    return (
        <div className="products">
            <div class="box">
                <img src={one} alt="Not found"></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus, assumenda deleniti perferendis delectus impedit ea ex ullam possimus a.</p>
            </div>

            <div class="box">
                <img src={two} alt="Not found"></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus, assumenda deleniti perferendis delectus impedit ea ex ullam possimus a.</p>
            </div>

            <div class="box">
                <img src={three} alt="Not found"></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus, assumenda deleniti perferendis delectus impedit ea ex ullam possimus a.</p>
            </div>
        </div>
    )
}

export default Product