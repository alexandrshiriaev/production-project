import { classNames } from '@/shared/lib/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { SwitchThemeButton } from '@/features/switchTheme';
import { SwitchLanguageButton } from '@/features/switchLanguage';
export type SidebarProps = {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {

    const {
        className
    } = props;

    const [ isCollapsed, setIsCollapsed ] = useState<boolean>(false);

    const onToggle = () => {
        setIsCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [ cls.collapsed ]: isCollapsed }, [ className ])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <SwitchThemeButton />
                <SwitchLanguageButton />
            </div>
        </div>
    );
};
