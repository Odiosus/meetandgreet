/*
import PropTypes from "prop-types";
import React from "react";
import x12 from "./1-2.png";
import x22 from "./2-2.png";
import x23 from "./2-3.png";
import x32 from "./3-2.png";
import x33 from "./3-3.png";
import X11 from "./3-4x-1.png";
import image2 from "./image-2.svg";
import image3 from "./image-3.svg";
import image4 from "./image-4.svg";
import image1 from "./image.png";
import line242 from "./line-24-2.svg";
import line243 from "./line-24-3.svg";
import line252 from "./line-25-2.svg";
import "./style.scss";

export const Footer = ({
                         size,
                         instClassName,
                         telegramClassName,
                         element = "3.png",
                         line = "line-24.svg",
                         img = "line-25.svg",
                         img1 = "image.svg",
                       }) => {
  return (
    <div className={`footer ${size}`}>
      <div className="overlap-group">
        {size === "s-375" && (
          <>
            <div className="frame">
              <p className="strong-madrid">
                Jsc «первоклассные Решения»
                <br />
                moscow, 1st Tikhvinsky Tulip, No. 5-7, Premises. 1p
                <br />
                tel: +66 99 160 97 11
              </p>
            </div>

            <div className="after" />

            <div className="div" />
          </>
        )}

        {["XL-1920", "m-768", "s-375"].includes(size) && (
          <div className="CONTACT-US">
            {size === "s-375" && <>CONTACT US</>}

            {["XL-1920", "m-768"].includes(size) && (
              <p className="text-wrapper-9">
                Jsc «первоклассные Решения»
                <br />
                moscow, 1st Tikhvinsky Tulip, No. 5-7, Premises. 1p
                <br />
                tel: +66 99 160 97 11
              </p>
            )}
          </div>
        )}

        {size === "s-375" && (
          <>
            <div className="frame-2">
              <img className="img" alt="Img" src={image4} />

              <div className="text-wrapper">Meet Plus Greet</div>
            </div>

            <div className="frame-3">
              <img className="element" alt="Element" src={x12} />

              <img className="element" alt="Element" src={x23} />

              <img className="element" alt="Element" src={x33} />
            </div>

            <div className="TIN-RRC-wrapper">
              <div className="TIN-RRC">
                TIN: 9707025574
                <br />
                RRC:&nbsp;&nbsp;770701001
              </div>
            </div>

            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-2">Privacy Policy</div>

                <div className="text-wrapper-3">·</div>

                <div className="text-wrapper-2">Cookies Policy</div>
              </div>

              <p className="text-wrapper-2">2024 © All Rights Reserved</p>
            </div>
          </>
        )}

        {["XL-1920", "m-768"].includes(size) && <div className="after-2" />}

        {size === "l-1440" && (
          <div className="overlap">
            <p className="p">
              Jsc «первоклассные Решения»
              <br />
              moscow, 1st Tikhvinsky Tulip, No. 5-7, Premises. 1p
              <br />
              tel: +66 99 160 97 11
            </p>

            <img className="line" alt="Line" src={line242} />
          </div>
        )}

        {["XL-1920", "l-1440", "m-768"].includes(size) && (
          <>
            <div className="text-wrapper-4">Privacy Policy</div>

            <div className="cookies-policy">Cookies Policy</div>

            <div className="text-wrapper-5">·</div>

            <p className="element-all-rights">2024 © All Rights Reserved</p>
          </>
        )}

        {size === "l-1440" && (
          <>
            <a
              className="inst"
              href="https://www.instagram.com/ilovefirstclass/?hl=ru"
              rel="noopener noreferrer"
              target="_blank"
            />

            <div className="telegram" />

            <div className="WA">
              <img className="element-x" alt="Element" src={X11} />
            </div>

            <div className="TIN-RRC-2">
              TIN: 9707025574
              <br />
              RRC:&nbsp;&nbsp;770701001
            </div>
          </>
        )}

        {["l-1440", "m-768"].includes(size) && (
          <img
            className="element-2"
            alt="Element"
            src={size === "l-1440" ? line252 : image1}
          />
        )}

        {size === "l-1440" && (
          <>
            <div className="text-wrapper-6">CONTACT US</div>

            <div className="frame-6">
              <img className="img-2" alt="Img" src={image2} />

              <div className="strong-madrid-2">Meet Plus Greet</div>
            </div>
          </>
        )}

        {size === "m-768" && (
          <>
            <img className="element-3" alt="Element" src={x22} />

            <img className="element-4" alt="Element" src={x32} />

            <div className="TIN-RRC-3">
              TIN: 9707025574
              <br />
              RRC:&nbsp;&nbsp;770701001
            </div>

            <img className="line-2" alt="Line" src={line243} />

            <div className="text-wrapper-7">CONTACT US</div>

            <div className="frame-7">
              <img className="img-2" alt="Img" src={image3} />

              <div className="strong-madrid-3">Meet Plus Greet</div>
            </div>
          </>
        )}

        {size === "XL-1920" && (
          <>
            <a
              className={`inst-2 ${instClassName}`}
              href="https://www.instagram.com/ilovefirstclass/?hl=ru"
              rel="noopener noreferrer"
              target="_blank"
            />

            <div className={`telegram-2 ${telegramClassName}`} />

            <div className="element-wrapper">
              <img className="element-x" alt="Element" src={element} />
            </div>

            <div className="TIN-RRC-4">
              TIN: 9707025574
              <br />
              RRC:&nbsp;&nbsp;770701001
            </div>

            <img className="line-3" alt="Line" src={line} />

            <img className="line-4" alt="Line" src={img} />

            <div className="text-wrapper-8">CONTACT US</div>

            <div className="frame-6">
              <img className="img-2" alt="Img" src={img1} />

              <div className="strong-madrid-2">Meet Plus Greet</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Footer.propTypes = {
  size: PropTypes.oneOf(["m-768", "l-1440", "s-375", "XL-1920"]),
  element: PropTypes.string,
  line: PropTypes.string,
  img: PropTypes.string,
  img1: PropTypes.string,
};
*/
