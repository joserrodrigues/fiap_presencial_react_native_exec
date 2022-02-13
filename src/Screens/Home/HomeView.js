import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button, Input } from 'react-native-elements';
import styles from './HomeStyles';

const HomeView = () => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                source={{ uri: "https://previews.123rf.com/images/chagin/chagin1501/chagin150100001/35151812-business-people-working-together.jpg" }}
                resizeMode="cover" style={styles.image}>
                <View style={styles.frontImageBackground}>
                    <View style={styles.topScreen}>                        
                        <Text style={styles.logoDiv}>RH App</Text>
                    </View>
                    <View style={styles.bottomScreen}>
                        <View style={styles.loginBox}>
                            <Text style={ styles.labelLogin}>
                                Login
                            </Text>
                            <Input
                                placeholder="email@email.com"
                                leftIcon={{ type: 'font-awesome', name: 'envelope', color:"red" }}
                                placeholderTextColor={'#999'}
                                onChangeText={value => this.setState({ comment: value })}
                            />
                            <Text style={ styles.labelLogin}>
                                Senha
                            </Text>
                            <Input
                                placeholder="ABCabc1234"
                                leftIcon={{ type: 'font-awesome', name: 'lock', color: "red" }}
                                placeholderTextColor={'#999'}
                                onChangeText={value => this.setState({ comment: value })}
                            />
                            <View style={styles.bottomButton}>
                                <Button
                                    title="Login"
                                    buttonStyle={styles.buttonStyle}
                                    containerStyle={styles.buttonContainerStyle}
                                />
                            </View>
                        </View>
                    </View>
                </View>                
            </ImageBackground>
        </View>
    );
};

export default HomeView;