import React from "react";
import "./circles.scss";
import { gsap } from "gsap";
import { useEffect, useRef, useLayoutEffect } from "react";
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
  const Card1ref = useRef(null);
  const Card2ref = useRef(null);
  const Card3ref = useRef(null);
  const Card4ref = useRef(null);
  const Card5ref = useRef(null);
  const Card6ref = useRef(null);

  useEffect(() => {
    const el = cirOne.current;
    const el2 = cirTwo.current;
    const el3 = cirThree.current;
    const el4 = cirFour.current;
    const el5 = cirFive.current;
    const el6 = cirSix.current;
    const cont = Container.current;
    const card1 = Card1ref.current;
    const card2 = Card2ref.current;
    const card3 = Card3ref.current;
    const card4 = Card4ref.current;
    const card5 = Card5ref.current;
    const card6 = Card6ref.current;

    // Animation for Container(scale and position for Xaxis)

    gsap.to(cont, {
      scale: 1.6,

      translateX: -400,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -20%",
        end: "top -40%",

        scrub: 1,
      },
    });

    // Animation for Container (rotation and origin transformations)
    gsap.to(cont, {
      rotation: 360,
      transformOrigin: "49.8% 46.5%",

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -50%",
        end: "top -500%",

        scrub: 1,
      },
    });

    // Animation for Circles (That each circles are positioned with x and y axis values. don't change the conainer width and positions that will cause animation miss behaviours)

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
      opacity: 1,
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
      opacity: 1,
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

    // Animation For cards

    gsap.to(card1, {
      opacity: 1,
      top: 0,
      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -90%",
        end: "top -100%",
        scrub: 1,
        stagger: 1,
      },
    });

    gsap.to(card2, {
      top: 0,
      zIndex: 9,
      opacity: 1,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -100%",
        end: "top -110%",
        scrub: 1,
        stagger: 1,
      },
    });

    gsap.to(card3, {
      top: 0,
      zIndex: 9,
      opacity: 1,
      stagger: 1,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -130%",
        end: "top -140%",
        scrub: 1,
        stagger: 1,
      },
    });

    gsap.to(card4, {
      top: 0,
      zIndex: 9,
      opacity: 1,
      stagger: 1,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -150%",
        end: "top -160%",
        scrub: 1,
        stagger: 1,
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

      <div className='card-container' id='cardtrig'>
        <div className=' card1' ref={Card1ref}>
          <div className='space'></div>
        </div>
        <div className='card2' ref={Card2ref}>
          <div className='space'></div>
        </div>
        <div className='cards card3' ref={Card3ref}>
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
