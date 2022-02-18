import React from 'react';
import { SafeAreaView, FlatList, View, Text, ActivityIndicator, RefreshControl } from 'react-native';
import { Image, SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../Utils/Constants/Colors';
import PropTypes from 'prop-types';

import styles from './HomeStyles';

const HomeView = ({ dataConnectionFiltered, isLoading, goToDetail, searchText, onSearchUpdate, onRefresh }) => {

    const RenderItem = ({ item }) => {

        return (
            <TouchableOpacity style={styles.containerItem} onPress={() => goToDetail(item)}>
                <>
                    <View style={styles.textsView}>
                        <View style={styles.imageBox} >
                            <Image
                                source={{ uri: item.image }}
                                containerStyle={styles.imageItem}
                            />
                        </View>
                        <View style={styles.TextBox}>
                            <View style={styles.textNameStyle}>
                                <Text style={styles.textTitle}>{item.firstName} {item.lastName}</Text>
                            </View>
                            <View style={styles.textNameStyle}>
                                <Text style={styles.textDetail}>{item.address} - {item.state} - {item.zipCode}</Text>
                            </View>
                            <View style={styles.textNameStyle}>
                                <Text style={styles.textDetail}>{item.jobTitle}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </>
            </TouchableOpacity>
        );
    }

    let loadingBox = null
    if (isLoading) {
        loadingBox = (
            <ActivityIndicator style={styles.loadingBox} size="large" color={Colors.activityColor} />
        )
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <SearchBar
                placeholder="Digite Aqui..."
                onChangeText={onSearchUpdate}
                value={searchText}
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInputContainer}
            />            
            {loadingBox}
            <FlatList
                data={dataConnectionFiltered.persons}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={item => item.CPF.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={onRefresh}
                    />
                }
            />
        </SafeAreaView>
    );
};

HomeView.propTypes = {
    dataConnectionFiltered: PropTypes.shape({
        persons: PropTypes.array.isRequired
    }),
    isLoading: PropTypes.bool.isRequired,
    searchText: PropTypes.string.isRequired,
    goToDetail: PropTypes.func.isRequired,
    onSearchUpdate: PropTypes.func.isRequired,
    onRefresh: PropTypes.func.isRequired,
};

export default HomeView;