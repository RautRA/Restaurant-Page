import fastFoodPic from "./fast-food.png";
import "./index.css";

export default `
    <section class="hero">
        <div class="hero-text">
            <h1 class="hero-title">All types of fast food is available at our restaurant</h1>
            <div class="hero-cta">
                <p>Order online or visit our restuarant</p>
                <div class="btns">
                    <button>Order Now</button>
                    <button>Visit Us</button>
                </div>
            </div>
        </div>
        <div>
            <img src=${fastFoodPic} class="hero-img" />
        </div>
    </section>
`;