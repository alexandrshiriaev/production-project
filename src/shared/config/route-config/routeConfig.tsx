import { RouteObject } from 'react-router-dom';
import { MainPage } from '@/pages/main-page';
import { AboutPage } from '@/pages/about-page';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [ AppRoutes.MAIN ]: '/',
    [ AppRoutes.ABOUT ]: '/about'
};

export const routeConfig: RouteObject[] = [
    {
        path: RoutePath.main,
        element: <MainPage/>
    },
    {
        path: RoutePath.about,
        element: <AboutPage/>
    }
];