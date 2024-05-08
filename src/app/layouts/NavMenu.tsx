import useLogout from '@/app/hooks/auth/use-logout';
import clsx from 'clsx';
import { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { FlagCZ, FlagUS } from 'src/assets/flags';
import { IcoCollapsedArrow, IcoHome, IcoMeet, IcoPeople, IcoPower, IcoUnit, IcoWrench } from 'src/assets/icons';
import { IcoLocalization } from 'src/assets/icons/IcoLocalization';
import useAuth from '../hooks/auth/use-auth';

let LARGE_LOGO: string;
import('../../assets/images/large-logo.png').then((res) => (LARGE_LOGO = res.default));

type NavMenuProps = {
    className?: string;
    toggled: boolean;
    setToggled: (expanded: boolean) => void;
};

type NavItemProps = {
    icon?: ReactNode;
    name: string;
    url: string;
    submenu?: NavItemProps[];
};

export const NavMenu: FC<NavMenuProps> = ({ toggled, setToggled }) => {
    const { t } = useTranslation();

    const { user } = useAuth();
    const { logout } = useLogout();

    const isMobileDevice = useMediaQuery({ query: '(max-width: 1024px)' });

    const [open, setOpen] = useState<string | undefined>(undefined);
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [_, setBroken] = useState(window.matchMedia('(max-width: 1024px)').matches);

    const handleOpenSubMenu = (key: string) => {
        if (open === key) {
            setOpen(undefined);
        } else {
            setOpen(key);
        }
    };

    const { i18n } = useTranslation();

    const changeLng = useCallback(
        (lng: string) => {
            i18n.changeLanguage(lng);
            setOpen(undefined);
        },
        [i18n]
    );

    const navItems = useMemo<NavItemProps[]>(
        () => [
            {
                icon: <IcoHome className="menu-icon" />,
                name: t('Home'),
                url: 'dashboard'
            },
            {
                icon: <IcoPeople className="menu-icon" />,
                name: t('People'),
                url: 'people'
            },
            {
                icon: <IcoMeet className="menu-icon" />,
                name: t('Meets'),
                url: 'meets'
            },
            {
                icon: <IcoUnit className="menu-icon" />,
                name: t('Units'),
                url: 'units'
            },
            {
                icon: <IcoWrench className="menu-icon" />,
                name: t('Settings'),
                url: 'settings'
            }
        ],
        [t]
    );

    const itemIcoStyle = clsx({ 'menu-icon text-left': true, 'fill-black': collapsed });
    const itemTextStyle = clsx({ 'menu-item-bg bg-navy': true, 'text-black': collapsed });

    return (
        <Sidebar
            toggled={toggled}
            collapsed={collapsed}
            onBackdropClick={() => setToggled(false)}
            customBreakPoint="1024px"
            onBreakPoint={setBroken}
            transitionDuration={1000}
            backgroundColor="none"
            className=" menu-bg text-white"
        >
            {/* LOGO element */}
            <div className="flex items-center justify-center h-20">
                <img src={LARGE_LOGO} alt="logo" className="w-40 mt-4" />
            </div>

            {/* USER element */}
            <Menu className="w-full my-4">
                <SubMenu
                    key={'user'}
                    label={
                        <div className=" w-full text-center">
                            {user?.first_name} {user?.last_name}
                        </div>
                    }
                    icon={
                        <span className="flex items-center justify-center rounded-full bg-mint text-black px-3 py-1 aspect-square">
                            {user?.first_name[0]}
                            {user?.last_name[0]}
                        </span>
                    }
                    open={open === 'user'}
                    onClick={() => handleOpenSubMenu('user')}
                >
                    <MenuItem
                        icon={<IcoPeople className={itemIcoStyle} />}
                        className={itemTextStyle}
                        key={'profile'}
                        component={<Link onClick={() => setToggled(false)} to={'profile'} />}
                    >
                        Profile
                    </MenuItem>
                </SubMenu>
            </Menu>

            {/* MENU element */}
            <Menu>
                {navItems.map((item) => {
                    if (item.submenu) {
                        return (
                            <SubMenu key={item.url} label={item.name} icon={item.icon} onClick={() => handleOpenSubMenu(item.name)} open={open === item.name}>
                                {item.submenu.map((subitem) => (
                                    <MenuItem
                                        className="menu-item-bg"
                                        icon={subitem.icon}
                                        key={subitem.url}
                                        component={<Link onClick={() => setToggled(false)} to={subitem.url} />}
                                    >
                                        {subitem.name}
                                    </MenuItem>
                                ))}
                            </SubMenu>
                        );
                    } else {
                        return (
                            <MenuItem
                                className="menu-item-bg"
                                key={item.url}
                                icon={item.icon}
                                component={<Link onClick={() => setToggled(false)} to={item.url} />}
                            >
                                {item.name}
                            </MenuItem>
                        );
                    }
                })}
            </Menu>

            {/* Logout MENU element */}
            <Menu className="absolute bottom-4 w-full">
                <SubMenu
                    label={t('Language')}
                    className="menu-item-bg"
                    key={'language'}
                    icon={<IcoLocalization className="menu-icon" />}
                    onClick={() => handleOpenSubMenu('language')}
                    open={open === 'language'}
                >
                    <MenuItem
                        className={itemTextStyle}
                        icon={<FlagCZ className="menu-icon" />}
                        key={'language-cz'}
                        component={<Link onClick={() => changeLng('cs')} to={''} />}
                    >
                        {t('Czech')}
                    </MenuItem>
                    <MenuItem
                        className={itemTextStyle}
                        icon={<FlagUS className="menu-icon" />}
                        key={'language-en'}
                        component={<Link onClick={() => changeLng('en')} to={''} />}
                    >
                        {t('English')}
                    </MenuItem>
                </SubMenu>
                <MenuItem
                    className="menu-item-bg"
                    key={'lougout'}
                    icon={<IcoPower className="menu-icon" />}
                    component={<Link to={''} onClick={() => logout()} />}
                >
                    {t('Logout')}
                </MenuItem>
            </Menu>

            {!isMobileDevice && (
                <div
                    className="absolute top-1/2 -translate-y-1/2 -right-3 rounded-r-md text-white w-3 h-16 bg-navy-700 flex items-center justify-center cursor-pointer"
                    onClick={() => setCollapsed((value) => !value)}
                >
                    <IcoCollapsedArrow className={`stroke-white fill-transparent bg-transparent w-4 ${collapsed ? '' : 'rotate-180'}`} />
                </div>
            )}
        </Sidebar>
    );
};
