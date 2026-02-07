export function Entrada() {
    return (
        <>
            <div className="bg-secundario min-h-screen flex flex-col md:flex-row mt-0 pt-0 relative isolation-auto">
                <div className="pt-12 ps-10">
                    <p className="titulo-5 pb-0 uppercase ">Núcleo de rock</p>
                    <p className="subtitulo-1 mt-0 mb-4 uppercase">da associação académica <br /> de Aveiro</p>
                </div>

                <img src="/src/assets/imgs/icons/borble.png"
                    alt="Borble icon"
                    className="hidden md:block absolute top-[-68px] right-[58%] scale-50 md:w-60 z-50 rotate-[6deg] pointer-events-none"
                />

                <img
                    src="/src/assets/imgs/icons/rock.png"
                    alt="Rock icon"
                    className="hidden md:block absolute top-[-12px] right-[28%] scale-88 md:w-60 z-50 rotate-[-5deg] pointer-events-none"
                />

                <img
                    src="/src/assets/imgs/icons/x.png"
                    alt="X icon"
                    className="hidden md:block absolute top-[62%] right-[29%] scale-58 md:w-60 z-50 rotate-[-5deg] pointer-events-none"
                />

                <div className="relative mt-8 md:mt-0 md:absolute left-0 right-0 top-80 z-40 px-10">
                    <div className="flex flex-wrap justify-center md:justify-between w-full gap-4 md:gap-0">
                        <p className="uppercase subtitulo-2 text-texto-principal">Underground</p>
                        <p className="uppercase subtitulo-2 text-texto-principal">Rock</p>
                        <p className="uppercase subtitulo-2 text-texto-principal">Talento</p>
                        <p className="uppercase subtitulo-2 text-texto-principal">Cultura</p>
                        <p className="uppercase subtitulo-2 text-texto-principal">Música</p>
                    </div>
                </div>

                <div className="flex items-center md:items-right justify-center md:justify-end p-0 m-0 flex-grow mt-8 md:mt-0">
                    <div className="w-full md:w-130 h-64 md:h-full overflow-hidden relative">
                        <img
                            src="/src/assets/imgs/home/54947798477_1eb3645f07_c1.png"
                            alt="Entrada NRock"
                            className="block w-auto h-auto max-w-full max-h-full object-contain p-0 m-0"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                    </div>
                </div>


                <div className="relative mt-8 md:mt-0 md:absolute left-0 right-0 top-[28rem] z-30 px-10">
                    <p className="texto-1 uppercase text-principal indent-8">
                        O NRock nasceu em 2018 de um sonho entre <br />
                        amigos que ansiava por uma maior oferta da cultura <br />
                        alternativa na academia e na cidade de Aveiro. <br />
                    </p>
                    <p className="texto-1 uppercase text-principal mt-4 indent-8">
                        De sonhos e convívios amadores, depressa<br />
                        tornámo-nos num Núcleo da Associação Académica da<br />
                        Universidade e, desde então, não parámos de crescer<br />
                        com eventos regulares e incríveis: De concertos, a<br />
                        sunset’s, festas com o nosso famoso DJ Set, ações<br />
                        de cariz social e muito mais!
                    </p>
                </div>

                <div className="relative mt-12 md:mt-0 md:absolute bottom-[0px] right-[42px] pointer-events-none overflow-hidden text-center md:text-right">
                    <p className="titulo-nrock leading-none mix-blend-difference opacity-90 select-none">
                        NROCK
                    </p>
                </div>


                <div className="relative mt-8 mb-8 md:mt-0 md:mb-0 md:absolute bottom-10 right-130 z-50 flex flex-col items-center md:items-end text-center md:text-right">
                    <a
                        href="https://www.instagram.com/nrock_aauav?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-end gap-2 text-principal uppercase texto-1 hover:text-texto-principal transition-colors"
                    >
                        Instagram <i className="bi bi-instagram text-xl"></i>
                    </a>
                    <a
                        href="https://open.spotify.com/user/8fzwlgjp022guetq8p3pc6c5q?si=48daf9b198b44397&nd=1&dlsi=763fe1dd515d47fa"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-end gap-2 text-principal uppercase texto-1 hover:text-texto-principal transition-colors"
                    >
                        Spotify <i className="bi bi-spotify"></i>
                    </a>
                </div>
            </div>
        </>
    );
}
