import React from "react";
import "./circles.scss";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin("scroll", ScrollTrigger);

const Ciecles = () => {
  const cirOne = useRef(null);
  const cirTwo = useRef(null);
  const cirThree = useRef(null);
  const cirFour = useRef(null);
  const cirFive = useRef(null);
  const cirSix = useRef(null);
  const Container = useRef(null);
  const Card = useRef(null);

  useEffect(() => {
    const el = cirOne.current;
    const el2 = cirTwo.current;
    const el3 = cirThree.current;
    const el4 = cirFour.current;
    const el5 = cirFive.current;
    const el6 = cirSix.current;
    const cont = Container.current;
    const card = Card.current;

    // Animation For cards

    gsap.to(cont, {
      // rotation: 360,
      scale: 1.5,

      translateX: -400,
      // transformOrigin: "center",

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -10%",
        end: "top -50%",

        scrub: 1,
      },
    });

    gsap.to(el, {
      opacity: 1,
      y: 285,
      x: 220,
      duration: 2,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",

        scrub: 1,
      },
    });
    gsap.to(el2, {
      opacity: 1,
      y: 285,
      x: -220,
      duration: 2,
      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",
        scrub: 1,
      },
    });

    gsap.to(el3, {
      x: 485,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",
        scrub: 1,
      },
    });

    gsap.to(el4, {
      x: -485,
      duration: 2,
      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",
        scrub: 1,
      },
    });
    gsap.to(el5, {
      opacity: 1,
      y: -345,
      x: 220,
      duration: 2,
      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",
        scrub: 1,
      },
    });
    gsap.to(el6, {
      opacity: 1,
      y: -345,
      x: -220,
      duration: 2,
      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className='c_con'>
      <div className='circle_container' ref={Container}>
        <div className='circle' id='trig'>
          <svg className='c1' id='#cone' height='197' width='197' ref={cirOne}>
            <circle
              cx='50'
              cy='50'
              r='40'
              stroke='#33B858'
              stroke-width='4'
              fill='transparent'
            />
          </svg>
          <svg className='c2' height='100' width='100' ref={cirTwo}>
            <circle
              cx='50'
              cy='50'
              r='40'
              stroke='#3495EF'
              stroke-width='4'
              fill='transparent'
            />
          </svg>{" "}
          <svg className='c3' height='100' width='100' ref={cirThree}>
            <circle
              cx='50'
              cy='50'
              r='40'
              stroke='#F68909'
              stroke-width='4'
              fill='transparent'
            />
          </svg>{" "}
          <svg className='c4' height='100' width='100' ref={cirFour}>
            <circle
              cx='50'
              cy='50'
              r='40'
              stroke='#8077EB'
              stroke-width='4'
              fill='transparent'
            />
          </svg>
          <svg className='c5' height='100' width='100' ref={cirFive}>
            <circle
              cx='50'
              cy='50'
              r='40'
              stroke='#FF84B7'
              stroke-width='4'
              fill='transparent'
            />
          </svg>
          <svg className='c6' height='100' width='100' ref={cirSix}>
            <circle
              cx='50'
              cy='50'
              r='40'
              stroke='#C709F6'
              stroke-width='4'
              fill='transparent'
            />
          </svg>
        </div>
      </div>

      <div className='card-container'>
        <div className='cards' ref={Card}>
          <div className='space'></div>
        </div>
        <div className='cards'>
          <div className='space'></div>
        </div>
        <div className='cards'>
          <div className='space'></div>
        </div>
        <div className='cards'>
          <div className='space'></div>
        </div>
      </div>
    </div>
  );
};

export default Ciecles;
