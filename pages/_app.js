"use client"
import { DataProvider } from '../contexts/DataContext';
import '../styles/globals.css'; // Or your CSS file if different

function MyApp({ Component, pageProps }) {
    return (
        <DataProvider>

            <Component {...pageProps} />
        </DataProvider>
    );
}

export default MyApp;
