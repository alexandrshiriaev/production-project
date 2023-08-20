import { classNames } from '@/shared/lib/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from '@/shared/ui/app-link';
import { AppLinkTheme } from '@/shared/ui/app-link';

export type NavbarProps = {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [ className ])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>О сайте</AppLink>
            </div>
        </div>
    );
};