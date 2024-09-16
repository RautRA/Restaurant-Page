import "./index.css";
import sandwhichImg from "./sandwich.png";
import burgerImg from "./burger.png";
import pizzaImg from "./pizza.png";
import friesImg from "./fries.png";
import nuggetsImg from "./nuggets.png";
import drinkImg from "./drink.png";

export default `
    <section class="menu">
        <h1 class="menu-heading">Our Menu</h1>
        <div class="menu-subheading-container">
            <p class="menu-subheading">Choose from a large variety of dishes & order online from the comfort of your home</p>
            <button class="view-more-btn">View More</button>
        </div>

        <ul class="menu-items">
            <li class="menu-item">
                <div class="img-container">
                    <img src=${sandwhichImg} alt="sandwich" />
                </div>

                <h2>Sandwhich</h2>

                <div class="price-details">
                    <p>₹30/-</p>
                    <button>Order Now</button>
                </div>
            </li>

            <li class="menu-item">
                <div class="img-container">
                    <img src=${burgerImg} alt="burger" />
                </div>

                <h2>Burger</h2>

                <div class="price-details">
                    <p>₹40/-</p>
                    <button>Order Now</button>
                </div>
            </li>

            <li class="menu-item">
                <div class="img-container">
                    <img src=${pizzaImg} alt="pizza" />
                </div>

                <h2>Pizza</h2>

                <div class="price-details">
                    <p>₹100/-</p>
                    <button>Order Now</button>
                </div>
            </li>
            <li class="menu-item">
                <div class="img-container">
                    <img src=${friesImg} alt="french fries" />
                </div>

                <h2>French Fries</h2>

                <div class="price-details">
                    <p>₹50/-</p>
                    <button>Order Now</button>
                </div>
            </li>
            <li class="menu-item">
                <div class="img-container">
                    <img src=${nuggetsImg} alt="chicken nuggets" />
                </div>

                <h2>Chicken Nuggets</h2>

                <div class="price-details">
                    <p>₹80/-</p>
                    <button>Order Now</button>
                </div>
            </li>
            <li class="menu-item">
                <div class="img-container">
                    <img src=${drinkImg} alt="cold drink" />
                </div>

                <h2>Cold Drink</h2>

                <div class="price-details">
                    <p>₹20/-</p>
                    <button>Order Now</button>
                </div>
            </li>
        </ul>
    </section>
`;