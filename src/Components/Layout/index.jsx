import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => (
    <div>
        <Header />
        <main className="grow mx-auto">
            <Outlet />
        </main>
        <Footer />
    </div>
);
