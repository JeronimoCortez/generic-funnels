"use client";
import { useRef, useState, useEffect } from "react";
import CalificationFormDirect from "./components/CalificationFormDirect";
import Faqs from "./components/Faqs";
import {
  ALT_IMG_GENERIC,
  coachName,
  idVsl,
  MORE_CHANGES_IMG,
  srcVsl,
  TESTIMONIALS,
  TESTIMONIALS_VIDEO_PAGE,
} from "./utils/constantes";

export default function Home() {
  const [isFormOpened, setIsFormOpened] = useState(false);

  // 🔒 Nuevo: control de bloqueo por 5 minutos
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUnlocked(true);
    }, 0 * 60 * 1000); // 5 minutos

    return () => clearTimeout(timer);
  }, []);

  const variantRef = useRef<"A" | "B">(Math.random() < 0.5 ? "A" : "B");
  const variant = variantRef.current;
  console.log(variant);



  return (
    <div className="relative overflow-clip pt-8 md:pt-12">
      <img src="/images/Sombra.webp" alt="Sombra" className="w-[400px] absolute right-0 top-0 -z-50 hidden md:block" />
      <img src="/images/Sombra.webp" alt="Sombra" className="w-[400px] absolute left-0 top-0 scale-x-[-1] -z-50 hidden md:block" />
      <div className="bg-[var(--primary)]/80 size-[400px] rounded-full left-1/2 transform hidden md:block -translate-x-1/2 absolute -z-50  blur-[400px] -top-[300px]"></div>
      {isFormOpened && (
        <CalificationFormDirect
          variant={variant}
          onClose={() => setIsFormOpened(false)}
        />
      )}
      <header className="bg-linear-0 from-[#0E0E0E] to-[#1C1B1B] max-w-[85%] w-[500px] rounded-full mx-auto border border-[var(--primary)]/30 z-50">
        <div className="cf-container">
          <h3 className="text-center uppercase text-[var(--text-primary)]/80 tracking-widest text-[12px] py-3 leading-[130%]">
            <span>
              Exclusivo para profesionales mayores de 35
            </span>
          </h3>
        </div>
      </header>

      {/* Sección VSL (siempre visible) */}
      <section className="mt-6 pb-[60px] md:pb-[80px] border-b border-[var(--primary)] rounded-b-[45px] md:rounded-b-[60px] relative overflow-clip">
        <div className="cf-container">
          <h1 className="text-center text-[20px] md:text-[32px] font-bold uppercase leading-[140%]">
            <span>
              Bajá entre 6 y 15 kg de grasa corporal, recupera tu energía y tonificá en 90 días con mi Método [M] de forma 100% natural
            </span> <span className="text-[var(--primary)]">SIN DIETAS EXTREMAS NI RUTINAS IMPOSIBLES</span>
          </h1>
          <section className="relative">
            <div className="bg-[#131313] p-1 pt-0 border-1 border-[var(--primary)] overflow-clip rounded-[12px] md:rounded-[16px] border-[var(--primary)] mt-6 max-w-[750px] mx-auto">
              <div className="p-1 md:p-2 text-center text-[12px] uppercase text-[var(--text-primary)] tracking-widest bg-[#131313]">
                <span>Paso 1 de 2:</span> Mirá este video completo
              </div>
              <div className="bg-[#131313] aspect-video rounded-[8px] md:rounded-[12px] overflow-clip">
                <iframe
                  className="w-full aspect-video"
                  id={`${idVsl}`}
                  src={`${srcVsl}`}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                ></iframe>
              </div>
            </div>
          </section>
          <p className="mt-6 text-center text-[14px] mx-auto max-w-[350px]">
            <strong className="uppercase tracking-widest">Paso 2 de 2:</strong> <span className="text-white/80">Agenda una Llamada para Asegurar tu Lugar y tu Cambio Fisico.</span>
          </p>

          {/* Botón bloqueado 5 minutos */}
          <div className="mt-6">
            <button
              className="cf-btn disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={!isUnlocked}
              onClick={() => {
                if (!isUnlocked) return;
                setIsFormOpened(true);
              }}
            >
              ¡AGENDAR MI SESIÓN DE DIAGNÓSTICO!
            </button>
            <div className="h-[1px] relative overflow-clip max-w-[212px] mx-auto mt-4">
              <div className="bg-radial from-white to-black/0 size-[200px]"></div>
            </div>
            <p className="text-center mt-4 leading-[90%] text-white/40 mx-auto max-w-[350px] text-[14px] flex items-center justify-center gap-2">
              {isUnlocked
                ? "+50 alumnos activos"
                : "⚠️ El botón se habilitará luego de ver el video."}
              <img src="/images/Estrella.svg" alt="Estrellas" />
            </p>
          </div>
        </div>


        <div className="bg-[var(--primary)]/80 size-[400px] rounded-full left-[-200px] absolute -z-50  blur-[200px] -bottom-[300px]"></div>
        <div className="bg-[var(--primary)]/80 size-[400px] rounded-full right-[-200px] absolute -z-50  blur-[200px] -bottom-[300px]"></div>
      </section>

      {isUnlocked && (
        <>
          <section className="py-[90px] bg-[#0E0E0E] border-b border-[#282828] relative z-20">
            <div className="cf-container">
              <h2 className="text-[28px] font-bold text-white text-center uppercase max-w-[500px] leading-[130%] mx-auto">
                ELLOS YA LO LOGRARON ¿QUE ESTAS ESPERANDO?
              </h2>
              <div className="mt-8 max-w-[900px] mx-auto space-y-6">
                {TESTIMONIALS_VIDEO_PAGE.map((testimonial) => {
                  return (
                    <div className="shadow-[0_4px_90px_0_#FF3B0070] rounded-[25px]" key={testimonial.video}>
                      <div>
                        <div
                          key={testimonial.video}
                          className="p-1 md:p-2 rounded-[24px] relative overflow-clip z-50 bg-[var(--background)]"
                        >
                          <div className="h-[2px] absolute top-0 overflow-clip w-full">
                            <div className="bg-white size-[80px] md:size-[300px] -top-[40px] md:top-[-150px] blur-[20px] md:blur-[100px] opacity-[100%] rounded-full absolute left-[calc(50%-40px)] md:left-[calc(50%-150px)] -z-50"></div>
                          </div>
                          <div className="bg-[var(--primary)] size-[900px] top-[-450px] blur-[150px] opacity-[70%] rounded-full absolute -right-[450px] -z-40"></div>
                          <div className="bg-[var(--primary)] size-[900px] bottom-[-450px] blur-[150px] opacity-[70%] rounded-full absolute -left-[450px] -z-40"></div>
                          <div className="relative bg-[#171717] z-50 p-4 md:p-[50px] rounded-[20px] flex md:flex-row flex-col gap-4 md:gap-8">
                            <div className="w-full max-w-[400px] aspect-video rounded-[10px] overflow-hidden">
                              <iframe
                                className="w-full h-full"
                                src={testimonial.video}
                                title={testimonial.titulo}
                                allow="autoplay; fullscreen"
                              ></iframe>
                            </div>
                            <div className="py-4 flex flex-col justify-between">
                              <div>
                                <h3 className="text-[24px] leading-[120%] font-bold">
                                  {testimonial.titulo}
                                </h3>
                                <p className="text-white/80 mt-4">
                                  {testimonial.story}
                                </p>
                              </div>
                              <div className="mt-4">
                                <p>{testimonial.nombre}</p>
                                <p className="text-white/80 mt-2 text-[14px]">
                                  {testimonial.dato}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                className="cf-btn mt-8"
                onClick={() => {
                  setIsFormOpened(true);
                }}
              >
                ¡AGENDAR MI SESIÓN DE DIAGNÓSTICO!
              </button>
              <div className="h-[1px] relative overflow-clip max-w-[212px] mx-auto mt-4">
                <div className="bg-radial from-white to-black/0 size-[200px]"></div>
              </div>
              <p className="text-center mt-4 text-white/40 mx-auto max-w-[350px] text-[14px]">
                Solo 6 cupos nuevos por mes
              </p>
            </div>
          </section>
        </>
      )}

      <section className="py-[60px] md:py-[90px] relative overflow-clip">
        <div className="absolute w-full h-full -z-40 top-0 left-0 bg-[url('/images/fondo-cuadritos.webp')] filter saturate-0 bg-black bg-no-repeat bg-top"></div>
        <div className="">
          <div className="cf-container">
            <header className="bg-linear-0 from-[#0E0E0E] to-[#1C1B1B] max-w-[85%] w-fit px-8 rounded-full mx-auto border border-[var(--primary)]/30 z-50">
              <div className="cf-container">
                <h3 className="text-center uppercase text-[var(--text-primary)]/80 tracking-widest text-[12px] py-3 leading-[130%]">
                  <span>
                    Antes de seguir, esto es clave
                  </span>
                </h3>
              </div>
            </header>
            <h2 className="text-[22px] md:text-[40px] mt-6 font-bold text-white text-center uppercase max-w-[780px] leading-[130%] mx-auto">
              [M] no es para cualquiera. Pero si es para vos, <span className="text-[var(--primary)]">puede cambiarte la vida en 90 días...</span>
            </h2>
            <p className="text-white/80 text-[14px] text-center mx-auto max-w-[550px] mt-4">
              Este método fue diseñado especialmente para profesionales mayores de 35 años que buscan un cambio real y sostenible en su salud y apariencia física.
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-6 md:gap-12 max-w-[900px] mx-auto">
              <div className="overflow-clip relative p-1 rounded-[20px] bg-linear-[-142deg] from-[#FFF]/5 via-[#B4B4B4]/50 to-[#FFF]/5">

                <div className="bg-linear-0 z-50 border border-[#252525] from-[#070707] to-[#161616] p-8 rounded-[18px] h-full">
                  <h3 className="text-white text-[24px] font-semibold tracking-[-1%]">Para quién NO es [M]</h3>
                  <ul className="mt-4 max-w-[600px] mx-auto space-y-4 md:pe-12 list-disc list-inside text-white/60 text-[18px] leading-[24px]">
                    <li className="flex items-start gap-4">
                      <img src="/images/cross.webp" className="mt-[8px] size-[22px]" alt="Es para vos" />
                      Queres cambiar de la noche a la mañana.
                    </li>
                    <li className="flex items-start gap-4">
                      <img src="/images/cross.webp" className="mt-[8px] size-[22px]" alt="Es para vos" />
                      No te dejas ayudar en el proceso.
                    </li>
                    <li className="flex items-start gap-4">
                      <img src="/images/cross.webp" className="mt-[8px] size-[22px]" alt="Es para vos" />
                      No queres cambiar tu situación actual.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="overflow-clip relative p-1 rounded-[20px] bg-linear-[-142deg] from-[#FF3B00]/20 via-[#FF3B00]/100 to-[#FF3B00]/20">
                <div className="absolute w-full top-[5px] left-0 z-50">
                  <div className="h-[2px] relative overflow-clip w-full mx-auto">
                    <div className="bg-linear-90 from-[#FF3B00]/0 via-white to-[#FF3B00]/0 h-[200px] w-80 left-10 absolute -top-[100px]"></div>
                  </div>
                </div>
                <div className="bg-linear-0 z-40 border relative border-[#252525] from-[#070707] to-[#161616] p-8 rounded-[18px]">
                  <div className="size-[200px] bg-[var(--primary)]/20 blur-[100px] absolute z-10 -top-[100px] -left-[100px]"></div>
                  <h3 className="text-white text-[24px] font-semibold tracking-[-1%] relative z-20">Para quién <span className="text-[var(--primary)]">SÍ</span> es [M]</h3>
                  <ul className="mt-4 max-w-[600px] mx-auto space-y-4 md:pe-12 list-disc list-inside text-white/60 text-[18px] leading-[24px] relative z-20">
                    <li className="flex items-start gap-4">
                      <img src="/images/check.webp" className="mt-[8px] size-[22px]" alt="Es para vos" />
                      Tenes 30 años o más con una carrera profesional demandante.
                    </li>
                    <li className="flex items-start gap-4">
                      <img src="/images/check.webp" className="mt-[8px] size-[22px]" alt="Es para vos" />
                      Sentir estrés frecuentemente, desgano y baja energía.
                    </li>
                    <li className="flex items-start gap-4">
                      <img src="/images/check.webp" className="mt-[8px] size-[22px]" alt="Es para vos" />
                      Poder dedicarle al método 3 horas a la semana.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button
              className="cf-btn mt-8"
              onClick={() => {
                setIsFormOpened(true);
              }}
            >
              ¡AGENDAR MI SESIÓN DE DIAGNÓSTICO!
            </button>
            <div className="h-[1px] relative overflow-clip max-w-[212px] mx-auto mt-4">
              <div className="bg-radial from-white to-black/0 size-[200px]"></div>
            </div>
            <p className="text-center mt-4 text-white/40 mx-auto max-w-[350px] text-[14px]">
              Solo 6 cupos nuevos por mes
            </p>
          </div>
        </div>
      </section>


      <div className="bg-black">
        <section className="py-[60px] bg-[var(--background)] md:py-[90px] relative overflow-clip border-t border-[var(--primary)] rounded-t-[45px] md:rounded-t-[60px]">
          <div className="size-[500px] blur-[350px] bg-[var(--primary)] absolute top-[-250px] left-[-100px]"></div>
          <div className="size-[500px] blur-[350px] bg-[var(--primary)] absolute top-[-250px] right-[-100px]"></div>
          <div className="cf-container z-50 relative">
            <h2 className="text-[40px] font-bold text-white text-center max-w-[900px] leading-[130%] mx-auto">
              ¿Por que Funciona el Método [M]?
            </h2>
            <p className="text-white/80 text-center mt-4 max-w-[600px] text-[18px] mx-auto">
              Porque está diseñado específicamente para profesionales mayores de 35 años, teniendo en cuenta sus necesidades y desafíos únicos.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6 md:gap-12 max-w-[900px] mx-auto">
              <div className="text-center p-8 bg-[#1A1A1A] rounded-[20px]">
                <h3 className="text-[22px] font-semibold text-white">
                  Enfoque Personalizado
                </h3>
                <p className="text-white/80 mt-2">
                  Adaptamos el método a tus necesidades específicas.
                </p>
              </div>
              <div className="text-center p-8 bg-[#1A1A1A] rounded-[20px]">
                <h3 className="text-[22px] font-semibold text-white">
                  Soporte Continuo
                </h3>
                <p className="text-white/80 mt-2">
                  Te acompañamos en cada paso del camino para asegurar tu éxito.
                </p>
              </div>
              <div className="text-center p-8 bg-[#1A1A1A] rounded-[20px]">
                <h3 className="text-[22px] font-semibold text-white">
                  Resultados Sostenibles
                </h3>
                <p className="text-white/80 mt-2">
                  Nos enfocamos en cambios duraderos para una vida más saludable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="cf-container relative z-10">
          <h2 className="text-[28px] font-bold text-white text-center uppercase max-w-[600px] leading-[130%] mx-auto">
            ESTOS RESULTADOS PODES OBTENER SI AGENDAS HOY
          </h2>
          <p className="text-white/80 text-center mt-4 max-w-[400px] mx-auto">
            Si ellos pudieron, vos también podés. Solo necesitás un método
            pensado específicamente para vos.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {TESTIMONIALS.map((t, i) => (
              <div className="rounded-[14px] w-full md:w-[32%] bg-linear-150 from-[var(--primary)]/20 via-[var(--primary)] to-[var(--primary)]/20 p-1 overflow-clip">
                <p className="text-center py-2 tracking-wider text-[#f5f5f5]">
                  {t.weight}
                </p>
                <div className="overflow-clip relative">
                  <div className="absolute rounded-[10px] w-full h-full bg-gradient-to-t from-5% to-65% from-black/90 to-transparent"></div>
                  <img
                    className="w-full rounded-[10px] h-[310px] max-h-full object-cover"
                    src={`${t.img}`}
                    alt={`${ALT_IMG_GENERIC} cambio ${i + 1}`}
                  />
                </div>
              </div>
            ))}
            <div className="rounded-[14px] w-full md:w-[32%] bg-linear-150 from-[var(--primary)]/20 via-[var(--primary)] to-[var(--primary)]/20 p-1 overflow-clip">
              <p className="text-center py-2 tracking-wider text-[#f5f5f5]">
                TU PRÓXIMO CAMBIO
              </p>
              <div className="overflow-clip relative">
                <div className="absolute rounded-[10px] w-full h-full bg-gradient-to-t from-5% to-45% from-black/90 to-transparent"></div>
                <img
                  className="w-full rounded-[10px] h-[310px] max-h-full object-cover"
                  src={`${MORE_CHANGES_IMG}`}
                  alt={`${ALT_IMG_GENERIC}`}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              className="cf-btn disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={!isUnlocked}
              onClick={() => {
                if (!isUnlocked) return;
                setIsFormOpened(true);
              }}
            >
              ¡AGENDAR MI SESIÓN DE DIAGNÓSTICO!
            </button>
            <div className="h-[1px] relative overflow-clip max-w-[212px] mx-auto mt-4">
              <div className="bg-radial from-white to-black/0 size-[200px]"></div>
            </div>
            <p className="text-center mt-4 text-white/40 mx-auto max-w-[350px] text-[14px]">
              {isUnlocked
                ? "Solo 6 cupos nuevos por mes"
                : "⚠️ El botón se habilitará luego de ver el video."}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-[120px] pb-[80px]">
        <div className="cf-container">
          <Faqs />
          {/* Botón bloqueado 5 minutos */}
          <div className="mt-8">
            <button
              className="cf-btn disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={!isUnlocked}
              onClick={() => {
                if (!isUnlocked) return;
                setIsFormOpened(true);
              }}
            >
              ¡AGENDAR MI SESIÓN DE DIAGNÓSTICO!
            </button>
            <div className="h-[1px] relative overflow-clip max-w-[212px] mx-auto mt-4">
              <div className="bg-radial from-white to-black/0 size-[200px]"></div>
            </div>
            <p className="text-center mt-4 text-white/40 mx-auto max-w-[350px] text-[14px]">
              {isUnlocked
                ? "Solo 6 cupos nuevos por mes"
                : "⚠️ El botón se habilitará luego de ver el video."}
            </p>
          </div>
        </div>
      </section>

      <p className="pb-6 pt-8 text-[14px] text-center px-4 text-white/60">
        © {coachName} 2025. Todos los derechos reservados.
      </p>
      <div className="bg-[var(--primary)] size-[600px] md:size-[700px] blur-[100px] md:blur-[200px] opacity-[50%] rounded-full absolute left-[calc(50%-300px)] md:-left-[300px] -bottom-[300px] md:block hidden -z-50"></div>
      <div className="bg-[var(--primary)] size-[600px] md:size-[700px] blur-[100px] md:blur-[200px] opacity-[50%] rounded-full absolute right-[calc(50%-300px)] md:-right-[300px] -bottom-[300px] md:block hidden -z-50"></div>
    </div>
  );
}
