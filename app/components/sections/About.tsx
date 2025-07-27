export default function About() {
    return (
        <section
            id="o-nas"
            className="relative h-[24rem] bg-fixed bg-cover bg-center md:bg-left-top bg-[url(/DoKKu25_Day01-7.jpg)]"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                <h2 className="text-white text-4xl md:text-5xl font-bold drop-shadow mb-4">
                    O nas
                </h2>
                <p className="max-w-3xl text-sm md:text-lg text-gray-100 leading-relaxed drop-shadow-lg">
                    Društvo Katapult Krško je kulturna in mladinska organizacija z več kot 20-letno prakso na področju videoprodukcije in neformalnega izobraževanja. S svojimi programi podpira mlade, ustvarjalce in lokalno skupnost ter razvija videoprodukcijske in izobraževalne vsebine. Povezuje umetniško ustvarjanje z mladinskim delom in ima izkušnje z opolnomočenjem mladih iz ranljivih skupin prek medijske pismenosti.
                </p>
            </div>
        </section>

    );
}