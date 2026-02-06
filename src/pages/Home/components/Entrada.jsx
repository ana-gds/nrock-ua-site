export function Entrada() {
    return (
        <>
            <div className="bg-secundario min-h-screen flex mt-0 pt-0 relative">
                <div className="pt-12 ps-10">
                    <p className="titulo-5 pb-0 uppercase ">Núcleo de rock</p>
                    <p className="subtitulo-1 mt-0 mb-4 uppercase">da associação académica <br/> de Aveiro</p>
                </div>

                <img src="/src/assets/imgs/icons/borble.png"
                     alt="Borble icon"
                     className="absolute top-[-68px] right-[58%] scale-50 md:w-60 z-50 rotate-[6deg] pointer-events-none"
                />

                <img
                    src="/src/assets/imgs/icons/rock.png"
                    alt="Rock icon"
                    className="absolute top-[-12px] right-[28%] scale-88 md:w-60 z-50 rotate-[-5deg] pointer-events-none"
                />

                <div className="absolute left-0 right-0 top-80 z-40 px-10">
                    <div className="flex w-full justify-between">
                        <p className="uppercase subtitulo-2 text-texto-principal">Underground</p>
                        <p className="uppercase subtitulo-2 text-texto-principal">Rock</p>
                        <p className="uppercase subtitulo-2 text-texto-principal">Talento</p>
                        <p className="uppercase subtitulo-2 text-texto-principal">Cultura</p>
                        <p className="uppercase subtitulo-2 text-texto-principal">Música</p>
                    </div>
                </div>

                <div className="flex items-right justify-end p-0 m-0 flex-grow">
                    <div className="w-130 h-full overflow-hidden relative">
                        <img
                            src="/src/assets/imgs/home/54947798477_1eb3645f07_c1.png"
                            alt="Entrada NRock"
                            className="block w-auto h-auto max-w-full max-h-full object-contain p-0 m-0"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                    </div>
                </div>


                <div className="absolute left-0 right-0 top-[28rem] z-30 px-10">
                    <p className="texto-1 uppercase text-principal indent-8">
                        O NRock nasceu em 2018 de um sonho entre <br/>
                        amigos que ansiava por uma maior oferta da cultura <br/>
                        alternativa na academia e na cidade de Aveiro. <br/>
                    </p>
                    <p className="texto-1 uppercase text-principal mt-4 indent-8">
                        De sonhos e convívios amadores, depressa<br/>
                        tornámo-nos num Núcleo da Associação Académica da<br/>
                        Universidade e, desde então, não parámos de crescer<br/>
                        com eventos regulares e incríveis: De concertos, a<br/>
                        sunset’s, festas com o nosso famoso DJ Set, ações<br/>
                        de cariz social e muito mais!
                    </p>
                </div>
            </div>
        </>
    );
}
