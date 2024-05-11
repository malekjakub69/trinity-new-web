import { FC, useEffect, useState } from 'react';

type courseType = {
    courseYear: number;
    courseNumber: number;
    registrationVisible: boolean;
    registrationUrl: string;
    registrationStart: string;
    description: string;
    trinityCalc: string;
};

export const NextCourse: FC = () => {
    const [course, setcourse] = useState<courseType | undefined>(undefined);

    const getData = async () => {
        const data = await fetch('data/course.json');
        const file = await data.json();
        if (file) setcourse(file);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="inside-container gap-4 mt-8">
            <h1>
                {course?.courseNumber}.ROČNÍK ({course?.courseYear})
            </h1>
            <p>
                {course?.description.split('\n').map((paragraph) => (
                    <>
                        {paragraph} <br />
                    </>
                ))}
            </p>
            <p>Spuštění přihlašování: {course?.registrationStart} </p>
            <h2>NEŽ SE ROZHODNEŠ K NÁM PŘIHLÁSIT…</h2>
            <ul>
                <li className="mb-2  text-justify">
                    〉Nejprve si zkus naši <u>Trinity kalkulačku</u> (viz níže), která ti napoví, zda jsme ten pravý kurz pro tebe a ty ten pravý účastník pro
                    nás :)
                </li>
                <li className="mb-2  text-justify">
                    〉Počítej s tím, že mezi jednotlivými částmi kurzu po tobě budeme chtít plnit různé úkoly. Odevzdání některých z nich podmiňuje absolvenci
                    kurzu a čekatelské zkoušky.
                </li>
                <li className="mb-2  text-justify">
                    〉Pokud jsi zarytý masožrout a vyžaduješ maso denně (a nejlépe ke každému jídlu), budeš u nás určitě zklamán/a. O víkendech maso nevaříme
                    vůbec a v létě nejčastěji obden. Naše strava je tedy převážně vegetariánská s možností zvolit si zdravější (především celozrnné či méně
                    obvyklé přílohy) a veganskou alternativu.
                </li>
            </ul>
            <p className="mt-4 text-justify">
                Ačkoli to může vypadat, že se tě snažíme odradit od odeslání přihlášky, není tomu tak. Na základě zkušeností z předchozích ročníků bychom rádi
                upozornili na určitá specifika kurzu, která byla pro některé účastníky překvapivá a maličko diskomfortní. Pokud je však bereš jako výzvu a chceš
                si vyzkoušet něco nového, klidně se přihlaš. Ti, co se dobrovolně chtějí vydávat za hranice své komfortní zóny, k nám na Trinity určitě patří :)
                TRINITY KALKULAČKA Tento nástroj slouží k tomu, abys dokázal/a lépe posoudit, zda je Trinity pro tebe tou správnou volbou. Z nabízených odpovědí
                vždy vyber tu, která nejlépe odpovídá realitě. Kalkulačka bude fungovat pouze v případě, kdy tvoje odpovědi budou upřímné. Na jejich základě ti
                na konci doporučí, zda jet na Trinity či se poohlédnout po jiném typu kurzu. Je zcela anonymní, takže výsledky nehrají žádnou roli při výběru
                účastníků.
            </p>
            <p>
                Neváhej a vstup do <a href={course?.trinityCalc}>Trinity kalkulačky</a>.
            </p>
            {course?.registrationVisible && (
                <a href={course?.registrationUrl}>
                    <button className="px-12 py-4 bg-trinity-yellow rounded-lg text-trinity-black text-xl font-semibold">Přihlásit se</button>
                </a>
            )}
        </div>
    );
};
