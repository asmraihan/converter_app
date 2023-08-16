import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DataTable, TextInput } from 'react-native-paper';
import ModalComponent from './Modal';

const TopTable = ( {yarnUnitRate, setYarnUnitRate}) => {
    // console.log(yarnUnitRate)
    return (
        <View className='mx-4'>
            <Text className='text-gray-300 text-2xl font-semibold text-center mb-8'>Unit Conversion</Text>
            <DataTable style={styles.container}>
                <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title style={styles.tableTitle}><Text className='text-white font-semibold'>Item</Text></DataTable.Title>
                    <DataTable.Title style={styles.tableTitle}>
                        <TouchableOpacity>
                            <Text className='text-white'>CTN Rate (Tk)</Text>
                            {/* <ModalComponent /> */}
                        </TouchableOpacity>
                    </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell><Text className='text-white font-semibold'>YARN</Text></DataTable.Cell>
                    <DataTable.Cell>
                    <TextInput defaultValue={yarnUnitRate}  onChangeText={(count) => {

                     
                    }}  style={styles.input} keyboardType='number-pad'/>
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell><Text className='text-white font-semibold'>RUBBER</Text></DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>2342</Text></DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    );
};

export default TopTable;

const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
        padding: 15,
        fontSize: 20,
    },
    topTableHeader: {
        backgroundColor: '#3F72AF',
        borderRadius: 10,
        borderBottomColor: '#001C30',
        borderColor: '#FFF',
        // borderWidth: 1,

    },
    tableTitle: {
        // fontSize: 20,
        // fontWeight: 'bold',
        // color: '#fff',
        // marginHorizontal: 4,
        // marginVertical: 4,
    },
    input: {
        color: 'white',
        backgroundColor: '#001C30',
        height: 36,
        width: 70,
        // margin: 2,
        // borderWidth: 1,
    }
});
