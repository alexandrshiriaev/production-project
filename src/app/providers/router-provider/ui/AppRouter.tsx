import { Suspense } from 'react';
import { routeConfig } from '@/shared/config/route-config';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routeConfig.map(route => (
                    <Route key={route.path} path={route.path} element={<div className="page-wrapper">{route.element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;