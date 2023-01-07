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
        end: "top -700%",

        scrub: 2,
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
        end: "top -120%",
        scrub: 0.5,
        stagger: 1,
      },
    });

    gsap.to(card2, {
      top: "20%",
      zIndex: 9,
      opacity: 1,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -140%",
        end: "top -170%",
        scrub: 0.5,
        stagger: 1,
      },
    });

    gsap.to(card3, {
      top: "40%",
      zIndex: 99,
      opacity: 1,
      stagger: 1,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -190%",
        end: "top -220%",
        scrub: 0.5,
        stagger: 1,
      },
    });

    gsap.to(card4, {
      top: "60%",
      zIndex: 199,
      opacity: 1,
      stagger: 1,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -240%",
        end: "top -270%",
        scrub: 0.5,
        stagger: 1,
      },
    });

    gsap.to(card5, {
      top: "80%",
      zIndex: 299,
      opacity: 1,
      stagger: 1,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -300%",
        end: "top -330%",
        scrub: 0.5,
        stagger: 1,
      },
    });

    gsap.to(card6, {
      top: 0,
      zIndex: 399,
      opacity: 1,
      stagger: 1,

      scrollTrigger: {
        trigger: "#trig",
        toggleActions: "restart pause resume complete",
        markers: true,
        start: "top -360%",
        end: "top -390%",
        scrub: 0.5,
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
        <div className=' card1  cards' ref={Card1ref}>
          <h1>Discovery & analysis</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloribus facere accusantium enim ab voluptatibus adipisci,
            distinctio placeat consectetur optio porro maxime voluptatem
            delectus et ad beatae nemo sint quibusdam.
          </p>
        </div>
        <div className='card2 cards' ref={Card2ref}>
          <h1>UI/UX Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloribus facere accusantium enim ab voluptatibus adipisci,
            distinctio placeat consectetur optio porro maxime voluptatem
            delectus et ad beatae nemo sint quibusdam.
          </p>
        </div>
        <div className=' card3 cards' ref={Card3ref}>
          <h1>Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloribus facere accusantium enim ab voluptatibus adipisci,
            distinctio placeat consectetur optio porro maxime voluptatem
            delectus et ad beatae nemo sint quibusdam.
          </p>
        </div>
        <div className='card4 cards' ref={Card4ref}>
          <h1>Release</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloribus facere accusantium enim ab voluptatibus adipisci,
            distinctio placeat consectetur optio porro maxime voluptatem
            delectus et ad beatae nemo sint quibusdam.
          </p>
        </div>
        <div className='card5 cards' ref={Card5ref}>
          <h1>Maintenance</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            doloribus facere accusantium enim ab voluptatibus adipisci,
            distinctio placeat consectetur optio porro maxime voluptatem
            delectus et ad beatae nemo sint quibusdam.
          </p>
        </div>
        <div className='card6 cards' ref={Card6ref}>
          <div className='space'></div>
        </div>
      </div>
    </div>
  );
};

export default Ciecles;
