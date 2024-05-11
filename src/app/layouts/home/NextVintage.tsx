import { FC, useEffect, useState } from 'react';

type VintageType = {
    nextYear: number;
    vintageNumber: number;
    registrationVisible: boolean;
    registrationUrl: string;
    registrationStart: string;
    description: string;
    trinityCalc: string;
};

export const NextVintage: FC = () => {
    const [vintage, setVintage] = useState<VintageType | undefined>(undefined);

    const getData = async () => {
        const data = await fetch('data/vintage.json');
        const file = await data.json();
        if (file) setVintage(file);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="inside-container gap-4 mt-8">
            <h1>
                {vintage?.vintageNumber}.ROČNÍK ({vintage?.nextYear})
            </h1>
            <p>
                {vintage?.description.split('\n').map((paragraph) => (
                    <>
                        {paragraph} <br />
                    </>
                ))}
            </p>
            <p>Spuštění přihlašování: {vintage?.registrationStart} </p>
            <h2>NEŽ SE ROZHODNEŠ K NÁM PŘIHLÁSIT…</h2>
            <ul className="mobile:w-4/5 ">
                <li>
                    〉Nejprve si zkus naši <u>Trinity kalkulačku</u> (viz níže), která ti napoví, zda jsme ten pravý kurz pro tebe a ty ten pravý účastník pro
                    nás :)
                </li>
                <li>
                    〉Počítej s tím, že mezi jednotlivými částmi kurzu po tobě budeme chtít plnit různé úkoly. Odevzdání některých z nich podmiňuje absolvenci
                    kurzu a čekatelské zkoušky.
                </li>
                <li>
                    〉Pokud jsi zarytý masožrout a vyžaduješ maso denně (a nejlépe ke každému jídlu), budeš u nás určitě zklamán/a. O víkendech maso nevaříme
                    vůbec a v létě nejčastěji obden. Naše strava je tedy převážně vegetariánská s možností zvolit si zdravější (především celozrnné či méně
                    obvyklé přílohy) a veganskou alternativu.
                </li>
            </ul>
            <p className="mobile:w-4/5  mt-12">
                Ačkoli to může vypadat, že se tě snažíme odradit od odeslání přihlášky, není tomu tak. Na základě zkušeností z předchozích ročníků bychom rádi
                upozornili na určitá specifika kurzu, která byla pro některé účastníky překvapivá a maličko diskomfortní. Pokud je však bereš jako výzvu a chceš
                si vyzkoušet něco nového, klidně se přihlaš. Ti, co se dobrovolně chtějí vydávat za hranice své komfortní zóny, k nám na Trinity určitě patří :)
                TRINITY KALKULAČKA Tento nástroj slouží k tomu, abys dokázal/a lépe posoudit, zda je Trinity pro tebe tou správnou volbou. Z nabízených odpovědí
                vždy vyber tu, která nejlépe odpovídá realitě. Kalkulačka bude fungovat pouze v případě, kdy tvoje odpovědi budou upřímné. Na jejich základě ti
                na konci doporučí, zda jet na Trinity či se poohlédnout po jiném typu kurzu. Je zcela anonymní, takže výsledky nehrají žádnou roli při výběru
                účastníků.
            </p>
            <p>
                Neváhej a vstup do <a href={vintage?.trinityCalc}>Trinity kalkulačky</a>.
            </p>
            {vintage?.registrationVisible && (
                <a href={vintage?.registrationUrl}>
                    <button className="px-12 py-4 bg-trinity-yellow rounded-lg text-trinity-black text-xl font-semibold">Přihlásit se</button>
                </a>
            )}
        </div>
    );
};
