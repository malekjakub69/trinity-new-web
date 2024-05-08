import { FC, useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppMenu } from '../layouts/AppMenu';
import { NavMenu } from '../layouts/NavMenu';

export const MainPage: FC = () => {
    const [toggledNavMenu, setToggledNavMenu] = useState<boolean>(false);

    const toggleNavMenu = useCallback(() => setToggledNavMenu((s) => !s), [setToggledNavMenu]);

    return (
        <div className="bg-white flex absolute top-0 left-0 right-0 bottom-0">
            <NavMenu toggled={toggledNavMenu} setToggled={setToggledNavMenu} className={' shrink-0 grow-0'} />
            <div className="flex flex-col basis-full shrink bg-tuna w-[100vw] max-h-full h-full overflow-hidden">
                <AppMenu toggleNavMenu={toggleNavMenu} className={'basis-12 shrink-0 grow-0'} />
                <div className="basis-full shrink px-10 py-7 overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
