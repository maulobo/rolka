"use client";
import React, { useRef } from "react";
import { valores } from "../../../data/data";
import "./nosotros.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BiExpandAlt } from "react-icons/bi";

const Mision = () => {
  const misionRef = useRef(null);
  const visionRef = useRef(null);
  const valoresRef = useRef(null);
  const contRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contRef.current,
        start: "top center",
      },
    });

    tl.from(misionRef.current, {
      duration: 1,
      opacity: 0,
      x: -100,
      ease: "power3.inOut",
    })
      .from(visionRef.current, {
        duration: 1,
        opacity: 0,
        x: -100,
        ease: "power3.inOut",
      })
      .from(valoresRef.current, {
        duration: 1,
        opacity: 0,
        x: -100,
        ease: "power3.inOut",
      });
  }, []);

  return (
    // mision
    <div
      ref={contRef}
      className="px-[var(--padding-x)] py-[var(--padding-y)]  flex flex-col gap-8 imagen-bg text-[var(--text-color-light)]"
    >
      <div
        ref={misionRef}
        className="min-h-36 flex gap-8 flex-wrap items-center bg-[var(--bg-grey)] py-[var(--padding-y)]  h-full opacity-100 rounded-2xl "
      >
        <section className="flex-1 min-w-56 text-center ">
          <h2>MISIÓN</h2>
        </section>
        <section className="flex-1 min-w-56 text-center px-8">
          <p>
            Como empresa de servicio integral del Sector Oil & Gas, nuestro
            objetivo es la satisfacción del cliente de manera eficiente y
            eficaz, generando un impacto positivo en lo económico, social y
            ambiental.
          </p>
        </section>
      </div>

      {/* vision */}

      <div
        ref={visionRef}
        className="min-h-36 flex gap-8 flex-wrap items-center h-full bg-[var(--bg-grey)] py-[var(--padding-y)] rounded-2xl"
      >
        <section className="order-2 md:order-1 flex-1 min-w-56 text-center px-8">
          <p>
            Ser líderes en el sector Oil & Gas brindando una solución integral a
            nivel nacional e internacional.
          </p>
        </section>
        <section className="order-1 md:order-2 flex-1 min-w-56 text-center">
          <h2>VISIÓN</h2>
        </section>
      </div>

      {/* valores */}

      <div
        ref={valoresRef}
        className=" flex flex-col  flex-wrap items-center h-full justify-center  bg-[var(--bg-grey)] md:py-[var(--padding-y)] rounded-2xl "
      >
        <section className="text-center py-8">
          <h2>NUESTROS VALORES</h2>
        </section>
        <section className="flex flex-wrap  justify-center items-center py-8  ">
          {valores.map((val, i) => (
            <div
              key={i}
              className="flex gap-4 w-80 h-20 text-3xl items-center  align-middle"
            >
              <BiExpandAlt />
              <h3 className=" ">{val}</h3>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Mision;
