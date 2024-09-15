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
            <p class="img-credit">Image by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=155764">OpenClipart-Vectors</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=155764">Pixabay</a></p>
        </div>
    </section>
`;