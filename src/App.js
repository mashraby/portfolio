import { useState } from "react";
import Header from "./Components/Header/Header";
import myPhoto from "./Assets/images/about-img.png";
import "./Assets/styles/main.css";
import Footer from "./Components/Footer/Footer";
import { Link } from "react-router-dom";

function App() {
  const [isSticky, setIsSticky] = useState(false);

  window.onscroll = () => {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 20) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <div className="App">
      <div class="background">
        <i className="fab fa-react"></i>

        <i className="fab fa-node"></i>

        <i className="fab fa-js"></i>

        <i className="fab fa-css3"></i>

        <i className="fab fa-html5"></i>

        <i className="fab fa-linux"></i>
      </div>
      <Header isSticky={isSticky} />
      <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one">Hi 👋,</div>
            <div className="text-two">I'm Mashrab,</div>
            <div className="text-three">I'm FullStack Web Developer</div>
          </div>
          <div className="button">
            <button>Download CV.</button>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="content">
          <div className="title">
            <span>About me</span>
          </div>
          <div className="about-details">
            <div className="left">
              <img src={myPhoto} alt="" />
            </div>
            <div className="right">
              <div className="topic">FullStack Developer</div>
              <p>
                My name is Mashrab, I'm 20 years old, I'm a full stack
                developer, I've been in the programming world for 1.5 years. I
                studied programming at the training center Najot Ta'lim, and I
                worked for a while as an assistant teacher in this Najot
                education, and then I worked as a front-end developer in the
                woodline-pro team, and gained a lot of experience
              </p>
              <div className="button">
                <button>Download CV.</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services" id="Skills">
        <div className="content">
          <div className="title">
            <span>Skills</span>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="icon">
                <i className="bx bxl-javascript"></i>
              </div>
              <div className="topic">JavaScript</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="bx bxl-react"></i>
              </div>
              <div className="topic">ReactJS</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="bx bxl-github"></i>
              </div>
              <div className="topic">Git, GitHub</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="bx bxl-css3"></i>
              </div>
              <div className="topic">CSS, SCSS, SASS</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="bx bxl-bootstrap"></i>
              </div>
              <div className="topic">Bootstrap</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="bx bxl-html5"></i>
              </div>
              <div className="topic">HTML</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="services contact" id="contact">
        <div class="content">
          <div class="title">
            <span>Contact Me</span>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="icon">
                <i className="bx bxl-gmail"></i>
              </div>
              <div className="topic">Gmail</div>
              <Link target="_blank" to="https://yoldashovmashrab@gmail.com">
                Contact me via gmail
              </Link>
            </div>
            <div className="box">
              <div className="icon">
                <i className="bx bxl-call"></i>
              </div>
              <div className="topic">Telephone</div>
              <Link target="_blank" to="tel:+998901117723">
                Contact me via +998901117723
              </Link>
            </div>
            <div className="box">
              <div className="icon">
                <i className="bx bxl-telegram"></i>
              </div>
              <div className="topic">Telegram</div>
              <Link target="_blank" to="https://t.me/MashrabYoldashov">
                Contact me via telegram
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
