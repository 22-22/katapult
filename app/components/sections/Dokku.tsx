import Image from "next/image";
import Carousel from "../ui/Carousel";
import YouTubeGridWithPlayer from "../ui/YouTubeGridWithPlayer";

export default function Dokku() {
    return (
        <section id="dokku" className="py-10 text-gray-800 font-sans">
            <h2 className="text-center text-3xl md:text-5xl font-bold my-4 md:my-6 text-orange-600">
                Mednarodna filmska delavnica DoKKu
            </h2>

            <div className="px-6 md:px-24 pt-4 pb-16 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">
                {/* Image block */}
                <div className="w-full md:w-1/2">
                    <div className="h-[320px] md:h-[620px] w-full overflow-hidden">
                        <Image
                            src="/dokku-2019.JPG"
                            width={800}
                            height={620}
                            alt="a girl filming a boy in front of a factory"
                            className="w-full h-full object-cover rounded-sm"
                            priority
                        />
                    </div>
                    <p className="py-1 text-sm italic text-slate-600">Foto: Tomaž Pavkovič</p>
                </div>

                {/* Text box overlapping and vertically centered */}
                <div className="w-full md:w-1/2 flex items-center relative z-10 md:-ml-20 px-6 md:px-0 h-[620px]">
                    <article className="bg-white rounded-xl shadow-lg p-2 md:p-8 text-base leading-relaxed max-w-[500px] mx-auto text-justify">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-700 text-center md:text-left">
                            DoKKu: film kot glas mladih
                        </h3>
                        <p>
                            Društvo Katapult že več kot 20 let sodeluje z DZMP Luksuz produkcijo
                            pri organizaciji mednarodne delavnice dokumentarnega filma DoKKu v
                            Krškem. Skozi praktične delavnice snemanja kratkih dokumentarnih
                            filmov mladi iz različnih etničnih, nacionalnih, kulturnih in
                            družbenih okolij pridobivajo veščine medijskega ustvarjanja, ki jim
                            omogočajo večjo javno slišnost.
                        </p>
                        <p className="mt-4">
                            Mladi so spodbujeni, da v filmih reflektirajo družbo, v kateri
                            živijo, da predstavljajo različne manjšine, ljudi z manj
                            priložnostmi, ter da kritično gledajo na svet. Vsako leto so njihovi
                            izdelki predstavljeni na zaključni javni projekciji, ki ji sledi
                            razprava. Kasneje so filmi prikazani na različnih filmskih
                            festivalih, dogodkih in spletu.
                        </p>
                    </article>
                </div>
            </div>
            <div className="bg-gray-50">
                <div className="px-6 md:px-24 pt-4 md:pb-14 flex flex-col justify-center md:flex-row gap-4 md:gap-16">
                    <article className="max-w-[500px] text-base leading-relaxed text-justify">
                        <h3 className="text-2xl text-center md:text-3xl font-semibold mb-4 text-orange-700">DoKKu 2025</h3>
                        <p>Letos je nas bilo <span className="font-bold">več kot 30 udeležencev iz različnih držav</span>! Poleg ustvarjanja kratkih, družbeno angažiranih dokumentarcev, je bil poseben poudarek na praktičnem usposabljanju bodočih mentorjev filmskih delavnic, s čimer v DZMP in Katapultu skrbijo za dvig kvalitete programov filmske vzgoje doma in v tujini.</p>
                        <p className="mt-4">Svoje bogate izkušnje in znanje je v uvodnem delu delil režiser <span className="font-bold">Želimir Žilnik</span>, eno največjih imen jugoslovanskega filma, hkrati pa še vedno zelo aktiven filmski avtor. V nadaljevanju je prevzela vajeti mlajša ekipa mentorjev, ki jo sestavljajo režiser <span className="font-bold">Miha Možina</span>, direktorja fotografije <span className="font-bold">Jure Černec in Tadej Pernuš</span> ter montažerja <span className="font-bold">Rožana Švara in Nemanja Babić</span>.</p>
                        <p className="mt-4"> V okviru sodelovanja z Društvom slovenskih režiserjev in režiserk so si ogledali večkrat nagrajeni dokumentarec Cen’tAnni, čemur je sledil pogovor z režiserko <span className="font-bold">Majo Dorotejo Prelog</span>.</p>
                        <p className="mt-4"> Projekcija končnih izdelkov - kratkih dokumentarnih filmov je bila v soboto, 19.7, v dvorani Mladinskega centra Krško. <span className="font-bold">Kmalu in na YouTube!</span></p>
                        <p className="mt-4 text-2xl text-center tracking-widest">Vidimo se julija 2026!</p>
                    </article >
                    <Carousel />
                </div>
            </div>
            <YouTubeGridWithPlayer />
        </section>
    );
}
