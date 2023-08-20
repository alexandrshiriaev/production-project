import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';

import { classNames } from '@/shared/lib/classNames';
import { Theme, useTheme } from '@/app/providers/theme-provider';

import cls from './SwitchThemeButton.module.scss';
import { Button, ThemeButton } from '@/shared/ui/button';

export type SwitchThemeButtonProps = {
  className?: string
}

export const SwitchThemeButton = ({ className }: SwitchThemeButtonProps) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(className, {}, [])}>
            {
                theme === Theme.LIGHT
                    ? (
                        <MoonIcon className={classNames(cls.moonIcon, {}, [ cls.themeIcon ])}/>
                    )
                    : (
                        <SunIcon className={classNames(cls.sunIcon, {}, [ cls.themeIcon ])}/>
                    )
            }
        </Button>
    );
};
