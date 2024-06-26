"use client";
import { useRef } from "react";
import "./lateral.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import pileta from "/public/simbols/Pileta_red.png";

gsap.registerPlugin(ScrollTrigger);

const LateralScroll = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {/* page 1 */}
      <section className="panel flex flex-col items-center justify-evenly px-[var(--padding-x)] py-[var(--padding-y)]  ">
        <div className="flex w-full text-right justify-end">
          <p className="md:w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel
            accusamus tempore magnam, itaque consectetur vero eum reprehenderit
            quasi laboriosam, minus impedit sit voluptates earum doloremque quia
            aliquam. Reiciendis, tempora. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa vel accusamus tempore magnam, itaque
            consectetur vero eum reprehenderit quasi laboriosam, minus impedit
            sit voluptates earum doloremque quia aliquam. Reiciendis, tempora.
          </p>
        </div>
        <div className="flex w-full justify-end ">
          <h3 className="border-solid border-2 rounded-xl border-red-500 py-2 px-8 text-red-500">
            NUESTROS SERVICIOS
          </h3>
        </div>
      </section>
      {/* page 2 */}
      <section className=" panel flex flex-col  px-[var(--padding-x)] py-[var(--padding-y)]">
        <div className="flex-1 flex  align-middle items-center ">
          <Image src={pileta} width={300} height={300} alt="pileta" />
          <h2 className="md:block hidden">PIELTAS</h2>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-3xl ">PILETAS PETROLERAS DE AGUA Y LODO</h3>
          <p className="md:block hidden">
            Diseñadas para contener y gestionar eficientemente el agua y lodo
            producidos durante las operaciones petroleras, formando parte
            esencial del sistema de separación y tratamiento de fluidos.
          </p>
          <h3>MEDIDAS GENERALES Y PERSONALIZADAS.</h3>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-3xl ">PILETAS PILETAS DE AGITACIÓN DE LODOS</h3>
          <p className="md:block hidden">
            Espacialmente diseñada para agitar y mezclar lodos, asegurando una
            suspensión homogénea de partículas sólidas en el líquido. La
            agitación es crucial para facilitar el procesamiento de lodos.
          </p>
          <h3>MEDIDAS GENERALES Y PERSONALIZADAS.</h3>
        </div>
      </section>
      {/* page 3 */}
      <section className=" panel  flex flex-col  px-[var(--padding-x)] py-[var(--padding-y)]">
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-3xl">PILETAS DE DESFOGUE</h3>
          <p>
            Destinada a contener y gestionar los efluentes generados durante las
            operaciones, con sistemas de control y tratamiento para cumplir con
            las normativas ambientales.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-3xl">PILETAS CON ZARANDA</h3>
          <p>
            Equipadas con zaranda para separar eficientemente partículas sólidas
            de fluidos como lodos, garantizando que el fluido descargado esté
            libre de impurezas.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-3xl">PILETAS DE ENSAYO</h3>
          <p>
            Un espacio controlado para realizar pruebas y experimentos con
            diferentes fluidos, sustancias o procesos relacionados con la
            industria petrolera. Ideal para evaluar el rendimiento de equipos y
            probar nuevas tecnologías.
          </p>
        </div>
      </section>
      {/* page 4 */}
      <section className=" panel flex flex-col  px-[var(--padding-x)] py-[var(--padding-y)] justify-evenly  ">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl">CISTERNAS Y TANQUES PARA GAS OIL</h3>
          <p>
            Contenedores diseñados para el almacenamiento y transporte seguro de
            combustible diesel y otros derivados del petróleo, construidos con
            materiales resistentes y características específicas.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl">TRAILERS Y MODULOS HABITACIONALES</h3>
          <p>
            Vehículos de transporte y estructuras móviles que ofrecen soluciones
            flexibles para oficinas móviles, dormitorios o instalaciones
            temporales en sitios remotos.
          </p>
        </div>
      </section>
      {/* page 5 */}
      <section className=" panel flex flex-col  px-[var(--padding-x)] py-[var(--padding-y)] justify-evenly  ">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl">ESTRUCTURAS Y PLATAFORMAS</h3>
          <p>
            Elementos diseñados para proporcionar soporte y acceso a equipos en
            diferentes entornos industriales, ideales para instalaciones de
            procesamiento, perforación u otras operaciones petroleras y de gas.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl">SKIDS Y SKID GAS LIFT</h3>
          <p>
            Plataformas modulares versátiles para el montaje rápido de equipos,
            desde componentes mecánicos hasta sistemas específicos como el skid
            gas lift, diseñado para mejorar la recuperación de petróleo mediante
            la inyección de gas.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LateralScroll;
