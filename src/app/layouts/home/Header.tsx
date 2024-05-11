import { TrinityLogo } from '@/assets/icons';
import { FC } from 'react';

export const Header: FC = () => {
    return (
        <div className="flex flex-col items-center gap-[20px]">
            <TrinityLogo className="w-[70%] mobile:w-[40%] mt-24" />

            <h2 className=" text-trinity-yellow">ČEKATELSKÝ LESNÍ KURZ</h2>
            <h1 className=" text-trinity-yellow">TRINITY</h1>
            <p>
                to je tvůj průvodce na cestě ke spokojenému hrdinství. Přijmi proto naši pomocnou ruku a vydej se s námi do známých i neznámých hlubin skautingu
                i sama sebe. Další možnost na tebe čeká v roce 2023.
            </p>
        </div>
    );
};
