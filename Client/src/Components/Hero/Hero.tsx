import { useContext, useEffect, useRef } from "react";
import Typed from "typed.js";
import "bootstrap/dist/css/bootstrap.css";
import "./Hero.css";
import sahrfear from "../../Images/sahrfear.png";
import TheameContex from "../Theame/Theame";

type Props = {
  id: string;
};
export default function Hero(props: Props) {
  const { lightMode } = useContext(TheameContex);
  const { id } = props;
  const el = useRef<HTMLSpanElement>(null); // Create reference to store the DOM element containing the animation
  const typed = useRef<any>(null); // Create reference to store the Typed instance itself

  useEffect(() => {
    const options = {
      strings: [
        '<span class="js-developer">JavaScript Developer</span>',
        '<span class="fullstack-developer">FullStack Developer</span>',
        '<span class="mobile-app-developer">Mobile App Developer</span>',
      ],
      typeSpeed: 100,
      startDelay: 500,
      backDelay: 1000,
      backSpeed: 80,
      loop: true,
      showCursor: false,
      cursorChar: "|",
      contentType: "html", // Allow HTML content in the strings
    };

    // Initialize Typed.js
    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    // Cleanup on component unmount
    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <section
      id={id}
      className="hero vh-100 d-flex align-items-center"
      data-lightmode={lightMode ? "true" : "false"}
    >
      <div className="container">
        <div className="row align-items-center hero-sec">
          <div className="col-12 col-md-8 text-center text-md-start  mb-md-0">
            <h1 className="display-4 fw-bold top-header">I'm Sahrfear</h1>
            <h2 className="fs-3 fw-semibold">
              <span ref={el} />
            </h2>
          </div>
          <div className="col-12 col-md-4 text-center text-md-end">
            <img
              src={sahrfear}
              alt="Hero"
              className="img-fluid"
              style={{ maxWidth: "400px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
