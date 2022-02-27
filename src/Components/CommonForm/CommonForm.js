import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Formik, ErrorMessage } from "formik";
import { View } from 'react-native';
import styles from "./CommonFormStyles";
import { Text, Input } from 'react-native-elements';
import PropTypes from 'prop-types';

const CommonForm = ({ signInSchema, onSubmit, listInfo}, ref) => {

    const itemsRef = useRef([]);
    let testSubmit = null;
    useImperativeHandle(ref, () => ({
        submitForm: () => { 
            if (testSubmit){
                testSubmit();
            }
        },
    }));


    const addNewKeyboard = (e, name) => {

        for (let index = 0; index < itemsRef.current.length; index++) {
            if (itemsRef.current[index].key === name) {
                return;
            }
        }

        itemsRef.current.push({
            keyboard: e,
            key: name
        });

    }
    const checkNextKeyboard = (name) => {

        let finalPosition = 0;
        for (let index = 0; index < itemsRef.current.length; index++) {
            if(itemsRef.current[index].key === name){
                finalPosition = index;
                break;
            }
        }

        let totalItems = itemsRef.current.length;
        if (totalItems - 1 === finalPosition){
            testSubmit();
        }else {
            itemsRef.current[finalPosition + 1].keyboard.focus();
        }
        
    }

    let initialValues = {};
    listInfo.forEach((element) => {
        initialValues[element.name] = "";
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={onSubmit}>
            {(formik) => {
                const { values, setFieldValue, handleSubmit } = formik;
                testSubmit = handleSubmit;

                let arrayItems = [];
                let totalItems = listInfo.length;
                let indPos = 0;  
                let indItem = 0;           
                listInfo.forEach((element) => {
                    arrayItems.push(
                        <Input
                            id={1}
                            key={indPos}
                            label={element.label}
                            ref={e => addNewKeyboard(e, element.name)}
                            onSubmitEditing={(e) => { checkNextKeyboard(element.name) }}
                            placeholder={element.placeholder}
                            onChangeText={text => setFieldValue(element.name, text)}
                            leftIcon={{ type: 'font-awesome', name: element.icon, size: 14 }}
                            secureTextEntry={element.secure}
                        />
                    )
                    indPos++;
                    arrayItems.push(
                        <ErrorMessage key={indPos} name={element.name}>
                            {msg => <Text style={styles.msgError}>{msg}</Text>}
                        </ErrorMessage>
                    )
                    indPos++;
                    indItem++;
                })
                return (
                    <View style={styles.formContainer}>
                        {arrayItems}
                        <View style={styles.spaceBottom} />
                    </View>
                );
            }}
        </Formik>
    );
};

// CommonForm.propTypes = {
//     listInfo: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//         placeholder: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired,
//         secure: PropTypes.bool.isRequired,
//     })).isRequired,
//     signInSchema: PropTypes.func.isRequired,
//     onSubmit: PropTypes.func.isRequired
// };

export default forwardRef(CommonForm);