import { FC } from 'react';

export const Introducing: FC = () => {
    return (
        <div className="flex flex-col items-center gap-12 mobile:w-full ">
            <h1 className="text-trinity-yellow">Představení kurzu</h1>
            <span>
                <h3 className="text-trinity-yellow">Kdo jsme ?</h3>
                Pod symbolem Trinity se skrývá různorodý tým lidí, kteří rádi hledají nové, dosud neprošlapané cesty ve svém osobním i skautském životě. Každý
                jsme trochu jiný, jinak přemýšlíme a máme jiné zkušenosti, ale naše vize vzdělávání je stejná.
            </span>
            <span>
                <h3 className="text-trinity-yellow ">Co chceme ?</h3>
                Chceme nabídnout vzdělávání postavené na zážitcích a vlastních zkušenostech, které mají podle nás výraznější a trvalejší dopad na člověka než
                samotná teorie. Chceme společně zkoušet, hledat a nalézat, co všechno pro nás může myšlenka skautingu představovat. Neočekávej proto příkazy a
                návody, ale nabídky a inspiraci. Principem dobrovolnosti klademe důraz na osobní zodpovědnost jedince. Každý si tak z kurzu odnese právě tolik,
                kolik si sám zvolí.
            </span>
            <div className="w-full flex flex-col mobile:flex-row justify-evenly gap-8">
                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-trinity-yellow">ANO</h3>
                    <span>Otevřená diskuze a sdílení </span>
                    <span>Zážitky </span>
                    <span>Dobrovolnost </span>
                    <span>Hledání možných řešení</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-red">NE</h3>
                    <span>Návody </span>
                    <span>Nudné přednášky </span>
                    <span>Příkazy </span>
                    <span>Jediné správné řešení</span>
                </div>
            </div>
            <span>
                <h3 className="text-trinity-yellow">Jak to děláme ?</h3>
                <p>
                    Pomocí spokojeného hrdinství. Cílem našeho výchovného působení je ukázat každému, že i on/a se může stát svým vlastním hrdinou a nepotřebuje
                    k tomu žádné zvláštní schopnosti. Hrdina je totiž úplně obyčejný člověk, který dokáže dělat neobyčejné věci a měnit tak sebe i své okolí k
                    lepšímu. Spokojený hrdina tak navíc činí s ohledem na sebe sama a svoje vlastní potřeby. Náš instruktorský tým ti pomůže v hledání tvého
                    pravého směru a zároveň tě podpoří na začátku této celoživotní cesty.
                </p>
                <p>
                    Líbí se ti naše vize skautského vzdělávacího kurzu? Chtěl/a by ses stát součástí dalšího ročníku Trinity a společně s námi vykročit na
                    dobrodružnou cestu k hrdinství? Učiň tedy první krok a <a href="#">přihlaš se!</a>
                </p>
            </span>
        </div>
    );
};
