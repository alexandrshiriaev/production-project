import { classNames } from '@/shared/lib/classNames';
import cls from './Button.module.scss';
import React, { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
    CLEAR = 'clear'
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children? : React.ReactNode | string;
    theme?: ThemeButton;
};



export const Button = (props: ButtonProps) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button className={classNames(cls.Button, {}, [ className, cls[ theme ] ])} {...otherProps}>
            {children}
        </button>
    );
};
