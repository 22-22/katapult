export default function Filmi() {
    return (
        <section id="filmi" className="px-6 md:px-24 py-12 bg-white text-black">
            <h2 className="text-center text-3xl md:text-5xl font-bold my-6 text-orange-600">Filmska koprodukcija</h2>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 space-y-4 text-base leading-relaxed text-justify">
                    <p>
                        Društvo Katapult koproducira filme že več kot 15 let, predvsem družbenokritične dokumentarce. Njihov najnovejši film z naslovom <span className="font-bold">Kdor ne skače</span> bo leta 2026 predstavil nastajanje slovenske identitete skozi šport.
                    </p>
                    <p>
                        Film <span className="font-bold">LGBT_SLO_1984</span> (2022) prikaže zgodovino LGBT gibanja v Sloveniji in družbene pritiske, s poudarkom na aktivnem sodelovanju članov LGBT skupnosti v produkciji, kar jim je prineslo prepoznavnost in potrditev.
                    </p>
                    <p>
                        Katapult je produciral tudi <span className="font-bold">V letu hip hopa</span> (2010), ki predstavi razvoj slovenskega hip hopa kot glas mladih iz marginaliziranih okolij ter družbene premike po osamosvojitvi.
                    </p>
                    <a
                        href="https://bsf.si/sl/organizacija/katapult/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-700 font-semibold hover:underline"
                    >
                        Katapult v Basi slovenskih filmov
                    </a>
                </div>

                <div className="md:w-1/2">
                    <div className="aspect-video w-full">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/dCl5b_12quY?start=2"
                            title="LGBT_SLO_1984 Trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
