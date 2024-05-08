import clsx from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IcoArrowDown } from 'src/assets/icons/IcoArrowDown';
import { IcoLeftMenu } from 'src/assets/icons/IcoLeftMenu';
import useAuth from '../hooks/auth/use-auth';

interface IProps {
    className?: string;
    toggleNavMenu: () => void;
}
export const AppMenu: FC<IProps> = ({ className, toggleNavMenu }) => {
    const { t } = useTranslation();
    const { user } = useAuth();

    const appMenuStyle = clsx(
        { 'bg-navy-950 text-floral-white flex items-center justify-center relative border-b-[1px] border-b-beige w-full': true },
        className
    );

    return (
        <div className={appMenuStyle}>
            <div className="absolute left-2 top-0 tablet:hidden text-[2rem] text-beige mt-2" onClick={toggleNavMenu}>
                <IcoLeftMenu className="fill-white w-8" />
            </div>
            <div className=" flex text-beige">
                {user?.current_unit.name} <IcoArrowDown className="ml-4 w-6 fill-white" />
            </div>
        </div>
    );
};
