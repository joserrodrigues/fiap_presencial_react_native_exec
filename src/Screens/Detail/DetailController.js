import React from 'react';
import DetailView from './DetailView';
import PropTypes from 'prop-types';

const DetailController = ({ route, navigation }) => {

    let objectItem = null;
    if (route && route.params) {
        const { item } = route.params;
        objectItem = JSON.parse(item);
    }

    return (
        <DetailView navigation={navigation} objectItem={objectItem} />
    );
};

DetailController.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            item: PropTypes.string.isRequired
        })
    })
}

export default DetailController;