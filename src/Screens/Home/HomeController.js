import React, { useState, useEffect } from 'react';
import HomeView from './HomeView';
import useAPI from '../../Services/APIs/Common/useAPI';
import persons from '../../Services/APIs/Persons/persons';

const HomeController = ({ navigation }) => {
    const [dataConnection, setDataConnection] = useState({});
    const [dataConnectionFiltered, setDataConnectionFiltered] = useState({ persons: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const getPersonsGetAPI = useAPI(persons.getAllPersons);

    useEffect(() => {
        getDataPage();
    }, [])


    const onSearchUpdate = (text) => {
        let textToSearch = text.toLowerCase().trim();
        let newArray = dataConnection.persons.filter((item) => {
            if (item.firstName.toLowerCase().trim().includes(textToSearch) || 
                item.lastName.toLowerCase().trim().keincludes(textToSearch) ||
                item.jobTitle.toLowerCase().trim().includes(textToSearch)){
                return true;
            }
            return false;
        })
        let newData = {... dataConnectionFiltered};
        setSearchText(text);
        newData.persons = newArray;
        setDataConnectionFiltered(newData);
    }
    const getDataPage = () => {
        setIsLoading(true);
        getPersonsGetAPI.requestPromise()
            .then(info => {
                setIsLoading(false);
                setDataConnection(info);
                setDataConnectionFiltered(info);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const onRefresh = () => {
        getDataPage();
    }

    const goToDetail = (item) => {
        navigation.push('Details', {
            item: JSON.stringify(item)
        });
    }

    return (
        <HomeView navigation={navigation} 
            dataConnectionFiltered={dataConnectionFiltered} 
            isLoading={isLoading} 
            searchText={searchText}
            onRefresh={onRefresh}
            goToDetail={goToDetail} 
            onSearchUpdate={onSearchUpdate}
        />
    );
};

export default HomeController;