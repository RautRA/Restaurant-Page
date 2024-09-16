import "./index.css";
import aboutImg from "./about.png";

export default `
    <section class="about">
        <div class="about-text">
            <h1 class="about-heading">About Us</h1>
            <p>
                We are a fast food restaurant that serves all types of fast food. <br/>
                You can order any dish from our website or visit our restaurant.
            </p>
            <button class="read-more-btn">Read More</button>
        </div>
        <div>
            <img src=${aboutImg} class="about-img" />
        </div>
    </section>
`;