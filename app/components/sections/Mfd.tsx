import Image from "next/image";
import Parallax from "../ui/Parallax";

export default function Mfd() {
    return (
        <section id="mfd">
            <Parallax />

            <div className="px-6 md:px-24 py-12 flex flex-col md:flex-row gap-10 items-start bg-gray-50 text-gray-800">
                {/* Text Content */}
                <article className="flex-1 text-base leading-relaxed text-justify space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold text-orange-700">
                        Prijave za MFD v Krškem so odprte
                    </h3>

                    <h4 className="text-lg md:text-xl font-medium text-gray-700">
                        Ponedeljek, 25. do četrtka, 28. avgusta 2025, 10.00–16.00<br />
                        Mencingerjeva hiša Krško (CKŽ 2)
                    </h4>

                    <p>
                        Delavnica je namenjena predvsem mladim od 10 let+, ki jih zanima
                        filmska/video produkcija s poudarkom na družbeno angažiranih temah.
                        Na usposabljanju se bodo naučili osnov filmskega jezika, uporabe video
                        kamere, računalniške montaže ter osnov filmskega izražanja.
                    </p>

                    <p>
                        Delavnica bo potekala predvsem v obliki praktičnega dela pod
                        mentorstvom mednarodne ekipe filmskih ustvarjalcev. Udeleženci se bodo
                        razdelili v manjše skupine, v katerih bodo posneli kratke filme na
                        osnovi njihovih idej. Dobili bodo priložnost, da se preizkusijo kot
                        scenaristi, režiserji, snemalci slike, snemalci zvoka, boom
                        operaterji, scenografi, kostumografi, igralci, montažerji ...
                        Filmi bodo na koncu javno predvajani na zaključni prireditvi ter na spletu.
                    </p>

                    <p className="font-semibold">
                        Kotizacija: <span className="font-normal">25 EUR (vključno z DDV)</span><br />
                        Število mest je omejeno.<br />
                        Prijave zbiramo do zapolnitve mest oz. do <strong>15. avgusta 2025</strong> na: <br />
                        <a
                            href="https://forms.gle/imbsZFQCJJTwXzrP9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-700 underline hover:text-orange-900"
                        >
                            https://forms.gle/imbsZFQCJJTwXzrP9
                        </a>
                    </p>
                </article>

                {/* Image */}
                <div className="flex-1">
                    <Image
                        src="/mfd/knk-2.jpg"
                        width={400}
                        height={550}
                        alt="kids with makeup filming"
                        className="rounded-xl shadow-lg w-full max-w-md object-cover"
                    />
                    <p className="py-1 text-sm italic text-slate-600">Foto: Yuliya Kohal</p>
                </div>
            </div>
            <div
                className="relative h-screen bg-cover bg-center text-white"
                style={{ backgroundImage: "url('/mfd/tolmin-1.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full text-center px-4 md:px-12">
                    <div className="max-w-5xl">
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
                            Filmske delavnice za mlade
                        </h1>
                        <p className="mt-2 md:mt-4 text-base md:text-xl text-gray-100 leading-relaxed md:leading-loose drop-shadow-md">
                            (Krško, Kostanjevica na Krki, Tolmin)
                        </p>
                        <p className="mt-6 text-sm md:text-lg text-gray-100 leading-relaxed drop-shadow">
                            Društvo Katapult izvaja filmske delavnice v soorganizaciji z Luksuz produkcijo že več kot 20 let. Delavnice omogočajo otrokom in mladostnikom učno okolje, v katerem se lahko pobliže seznanijo z umetnostjo in obrtjo ustvarjanja filmskih ter medijskih vsebin, in možnost razvoja lastnega glasu in kreativnosti.
                            <br /><br />
                            Organizacija je zavezana izboljševanju medijske pismenosti med otroki in mladino preko ponujanja učinkovitih orodij, s katerimi bodo lahko uspešno navigirali nasičeno sodobno medijsko krajino, pa tudi dosegli novo raven opolnomočenosti z možnostjo izražanja svojih idej, izkušenj, refleksij in kritik preko filma in videa.
                            <br /><br />
                            Otrokom in mladim želi približati različna digitalna orodja vizualnega upovedovanja, snemanja in montaže ter jim vzporedno pomaga tudi pri večanju njihove socialne občutljivosti, osveščenosti in družbene, politične, kulturne angažiranosti.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
