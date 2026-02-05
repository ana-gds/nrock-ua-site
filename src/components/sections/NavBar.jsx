
export function NavBar () {
    return(
        <>
            <div className="bg-principal min-h-24 flex items-center justify-between px-14">
                <img src="/src/assets/imgs/logo/logo.png" alt="Logo NRock" className="h-16 w-auto pe-65" />
                <p className="subtitulo-3 uppercase cursor-pointer">Sobre Nós</p>
                <p className="subtitulo-3 uppercase cursor-pointer">Galeria</p>
                <p className="subtitulo-3 uppercase cursor-pointer">Rubricas</p>
                <p className="subtitulo-3 uppercase cursor-pointer">Merch</p>
                <p className="subtitulo-3 uppercase cursor-pointer">Eventos</p>
                <p className="subtitulo-3 uppercase cursor-pointer">Contactos</p>
            </div>
        </>
    );
}