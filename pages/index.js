"use client"
import DataSwitcher from '../components/DataSwitcher';
import { useData } from '../contexts/DataContext';
import { useState } from 'react';

const Home = () => {
    const { msg } = useData();



    return (
        <div>
            <DataSwitcher />
            <h1>{msg}</h1>
        </div>
    );
};

export default Home;
