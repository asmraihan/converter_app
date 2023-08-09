import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DataTable, TextInput } from 'react-native-paper';

const TableExample = () => {

    const [yarnCtn, setYarnCtn] = useState(0);
    const [yarnTotalTk, setYarnTotalTk] = useState(0);
    const [rubberCtn, setRubberCtn] = useState(0);
    const [rubberTotalTk, setRubberTotalTk] = useState(0);
    const [total, setTotal] = useState(0);
   const calculateTotal = () => {
        setTotal(yarnTotalTk + rubberTotalTk);
    }


    return (
        <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={styles.tableTitle}> <Text className='text-white font-semibold'>YARN (150/D)</Text> </DataTable.Title>
                <DataTable.Title style={styles.tableTitle}><Text className='text-white font-semibold'>CTN</Text></DataTable.Title>
                <DataTable.Title style={styles.tableTitle}><Text className='text-white font-semibold'>LBS</Text></DataTable.Title>
                <DataTable.Title style={styles.tableTitle}>
                    <TouchableOpacity>
                        <Text className='text-white'>Rate (Tk)</Text>
                    </TouchableOpacity>
                </DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
            <DataTable.Title className=''> <Text className='text-white font-semibold'></Text> </DataTable.Title>
                <DataTable.Cell>
                    <TextInput  onChangeText={(count) => {
                        setYarnCtn(parseFloat(count) * 10);
                        setYarnTotalTk(parseFloat(count) * 100);
                    }}  style={styles.input} keyboardType='number-pad'/>
                </DataTable.Cell>
                <DataTable.Cell><Text className='text-white font-semibold'>{yarnCtn}</Text></DataTable.Cell>
                <DataTable.Cell><Text className='text-white font-semibold'>{yarnTotalTk}</Text></DataTable.Cell>
            </DataTable.Row>

            
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={styles.tableTitle}> <Text className='text-white font-semibold'>RUBBER 42-C</Text> </DataTable.Title>
                <DataTable.Title style={styles.tableTitle}><Text className='text-white font-semibold'>CTN</Text></DataTable.Title>
                <DataTable.Title style={styles.tableTitle}><Text className='text-white font-semibold'>LBS</Text></DataTable.Title>
                <DataTable.Title style={styles.tableTitle}>
                    <TouchableOpacity>
                        <Text className='text-white'>Rate (Tk)</Text>
                    </TouchableOpacity>
                </DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
                <DataTable.Cell></DataTable.Cell>
                <DataTable.Cell>
                <TextInput  onChangeText={(count2) => {
                        setRubberCtn(parseFloat(count2) * 20);
                        setRubberTotalTk(parseFloat(count2) * 200);
                    }}  style={styles.input} keyboardType='number-pad'/>
                </DataTable.Cell>
                <DataTable.Cell><Text className='text-white font-semibold'>{rubberCtn}</Text></DataTable.Cell>
                <DataTable.Cell><Text className='text-white font-semibold'>{rubberTotalTk}</Text></DataTable.Cell>
            </DataTable.Row>




            <DataTable.Row>
                <DataTable.Cell><Text className='text-white font-semibold'>Calculated</Text></DataTable.Cell>
                <DataTable.Cell><Text className='text-white font-semibold'>Total Amount</Text></DataTable.Cell>
                <DataTable.Cell><Text className='text-white font-semibold'> ---------></Text></DataTable.Cell>
                <DataTable.Cell><Text className='text-white font-semibold'>{total}</Text></DataTable.Cell>
            </DataTable.Row>

            <TouchableOpacity onPress={()=> calculateTotal()} className='mt-10 mx-10 px-4 py-3 bg-[#0F4C75] hover:bg-zinc-500 rounded-md '>
                <Text className='text-center text-white text-lg font-semibold'>Calculate</Text>
            </TouchableOpacity>
        </DataTable>
    );
};

export default TableExample;

const styles = StyleSheet.create({
    container: {
        // padding: 15,
        // fontSize: 20,
        // // borderColor: '#000000',
        // borderWidth: 2,

    },
    tableHeader: {
        backgroundColor: '#001C30',
        borderColor: '#000000',
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
        width: 60,
        // margin: 2,
        // borderWidth: 1,
    }
});
