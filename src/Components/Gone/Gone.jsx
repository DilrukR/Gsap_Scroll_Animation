import React, { useRef } from "react";
import "./Gone.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";
import Logo from "../Assest/logo.png";

gsap.registerPlugin("scroll", ScrollTrigger);

const Gone = () => {
  const Img1Ref = useRef(null);
  const Img2Ref = useRef(null);
  const Img3Ref = useRef(null);
  const Img4Ref = useRef(null);
  const Img5Ref = useRef(null);
  const Img6Ref = useRef(null);
  const Img7Ref = useRef(null);
  const Img8Ref = useRef(null);
  const Img9Ref = useRef(null);
  const Img10Ref = useRef(null);

  useEffect(() => {
    const el1 = Img1Ref.current;
    const el2 = Img2Ref.current;
    const el3 = Img3Ref.current;
    const el4 = Img4Ref.current;
    const el5 = Img5Ref.current;
    const el6 = Img6Ref.current;
    const el7 = Img7Ref.current;
    const el8 = Img8Ref.current;
    const el9 = Img9Ref.current;
    const el10 = Img10Ref.current;

    gsap.to(el1, {
      scale: 0.1,
      scrollTrigger: {
        trigger: "#gone",
        start: "top 0 ",
        end: "top -500%",
        markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className='Gone' id='gone'>
      <img src={Logo} alt='logo' className='logo' ref={Img1Ref} />

      <div className='container_title'>
        <div className='container_text'>
          <h1>Branding</h1>
          <h5>The essence of your business</h5>
        </div>
        <div className='text_container2'>
          <h1>We make it</h1>
          <h1>Outstanding</h1>
        </div>
        .
      </div>
    </div>
  );
};

export default Gone;
