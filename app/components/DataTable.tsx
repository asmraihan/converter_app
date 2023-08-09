import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DataTable, TextInput } from 'react-native-paper';


const TableExample = () => {
    const [yarnUnitRate, setYarnUnitRate] = useState();
    const [rubberUnitRate, setRubberUnitRate] = useState();
    const [yarnCtn, setYarnCtn] = useState<number>(0);
    const [yarnTotalTk, setYarnTotalTk] = useState<number>(0);
    const [rubberCtn, setRubberCtn] = useState<number>(0);
    const [rubberTotalTk, setRubberTotalTk] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    const calculateTotal = () => {
        setTotal(yarnTotalTk + rubberTotalTk);
    }

 
    console.log(yarnUnitRate)
    return (

        <SafeAreaView>
            <View className='mx-4 mb-20'>
                <Text className='text-gray-300 text-2xl font-semibold text-center mb-8'>RK Traders</Text>
                <DataTable style={styles.container}>
                    <DataTable.Header style={styles.tableHeader}>
                        <DataTable.Title style={styles.tableTitle}><Text className='text-white font-semibold'>Item</Text></DataTable.Title>
                        <DataTable.Title style={styles.tableTitle}>
                            <TouchableOpacity>
                                <Text className='text-white'>LBS Rate (Tk)</Text>
                                {/* <ModalComponent /> */}
                            </TouchableOpacity>
                        </DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell><Text className='text-white font-semibold'>YARN</Text></DataTable.Cell>
                        <DataTable.Cell>
                            <TextInput onChangeText={(count) => {
                                setYarnUnitRate(parseFloat(count));
                            }} style={styles.input} keyboardType='number-pad' />
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text className='text-white font-semibold'>RUBBER</Text></DataTable.Cell>
                        <DataTable.Cell><Text className='text-white font-semibold'>2342</Text></DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>

                        {/* asdasd */}

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
                        <TextInput onChangeText={(count) => {
                            setYarnCtn((parseFloat(count) * 79.3656).toFixed(3));
                            setYarnTotalTk(parseFloat(yarnCtn * 70.999647204))
                        }} style={styles.input} keyboardType='number-pad' />
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
                    <DataTable.Cell> </DataTable.Cell>
                    <DataTable.Cell>
                        <TextInput onChangeText={(count2) => {
                            setRubberCtn((parseFloat(count2) * 55.115).toFixed(3));
                            setRubberTotalTk((parseFloat(count2) * 6889.375).toFixed(3))
                        }} style={styles.input} keyboardType='number-pad' />
                    </DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>{rubberCtn}</Text></DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>{rubberTotalTk}</Text></DataTable.Cell>
                </DataTable.Row>


                <DataTable.Row>
                    <DataTable.Cell><Text className='text-white font-semibold'>Calculated</Text></DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>Total Amount</Text></DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'> = </Text></DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>{total}</Text></DataTable.Cell>
                </DataTable.Row>

                <TouchableOpacity onPress={() => calculateTotal()} className='mt-10 mx-10 px-4 py-3 bg-[#0F4C75] hover:bg-zinc-500 rounded-md '>
                    <Text className='text-center text-white text-lg font-semibold'>Calculate</Text>
                </TouchableOpacity>
            </DataTable>
        </SafeAreaView>


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
        width: 70,
        // margin: 2,
        // borderWidth: 1,
    }
});
