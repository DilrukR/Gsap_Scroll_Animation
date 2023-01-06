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

  useEffect(() => {
    const el = cirOne.current;
    const el2 = cirTwo.current;
    const el3 = cirThree.current;
    const el4 = cirFour.current;
    const el5 = cirFive.current;
    const el6 = cirSix.current;
    const cont = Container.current;

    gsap.to(cont, {
      // rotation: 360,
      scale: 1.2,

      translateX: -200,
      // transformOrigin: "center",

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -10%",
        end: "top -1000%",
        pinned: true,

        scrub: true,
      },
    });

    gsap.to(el, {
      opacity: 1,
      y: 250,
      x: 220,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",

        scrub: true,
      },
    });
    gsap.to(el2, {
      opacity: 1,
      y: 250,
      x: -220,
      duration: 2,
      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",
        scrub: true,
      },
    });

    gsap.to(el3, {
      x: 490,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",
        scrub: true,
      },
    });

    gsap.to(el4, {
      x: -490,
      duration: 2,
      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",
        scrub: true,
      },
    });
    gsap.to(el5, {
      opacity: 1,
      y: -310,
      x: 220,
      duration: 2,
      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",
        scrub: true,
      },
    });
    gsap.to(el6, {
      opacity: 1,
      y: -310,
      x: -220,
      duration: 2,
      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "bottom 0%",
        end: "top -10%",
        scrub: true,
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
    </div>
  );
};

export default Ciecles;
