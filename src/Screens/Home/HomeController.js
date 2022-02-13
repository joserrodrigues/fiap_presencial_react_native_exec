import React from 'react';
import HomeView from './HomeView';
import { registerRootComponent } from 'expo';

const HomeController = () => {
    return (
        <HomeView />
    );
};

export default registerRootComponent(HomeController);