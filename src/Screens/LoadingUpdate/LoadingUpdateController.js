import React, { useEffect } from 'react';
import LoadingUpdateView from './LoadingUpdateView';
import * as Updates from "expo-updates";

const LoadingUpdateController = () => {
    useEffect(() => {
        async function updateApp() {
            //*
            const { isAvailable } = await Updates.checkForUpdateAsync();
            if (isAvailable) {
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync(); // depende da sua estratégia
            }
            /*/
                setTimeout(async () => {
                    await Updates.reloadAsync(); // depende da sua estratégia
                }, 5000);
            //*/
        }
        updateApp();
    }, []);

    return (
        <LoadingUpdateView  />
    );
};

export default LoadingUpdateController;