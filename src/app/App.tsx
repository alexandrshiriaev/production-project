import './styles/index.scss';
import { useTheme } from './providers/theme-provider';
import { classNames } from '@/shared/lib/classNames';
import { AppRouter } from './providers/router-provider';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { Suspense } from 'react';

const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selected: false }, [ theme ])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;