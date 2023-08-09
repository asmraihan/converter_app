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
        console.log('unit rates',yarnUnitRate, rubberUnitRate)


        if(!yarnUnitRate && !rubberUnitRate){
            Alert.alert('Please enter both unit rates')
        }else{

            if(!yarnCtn && !rubberCtn){
                Alert.alert('Please enter both CTN values')
            } else {
                const yarnTotalTk = parseFloat(yarnCtn) * parseFloat(yarnUnitRate);
                setYarnTotalTk(yarnTotalTk);
                const rubberTotalTk = parseFloat(rubberCtn) * parseFloat(rubberUnitRate);
                setRubberTotalTk(rubberTotalTk);
            }
            setTotal(yarnTotalTk + rubberTotalTk);
        }
    }

    const onRefresh = () => {
        console.log('refreshing')
    
    }

    return (

        <SafeAreaView>
            <View className='mx-4 mb-20'>
                <Text className='text-gray-300 text-2xl font-semibold text-center mb-8'>RK Traders</Text>
                <DataTable style={styles.container}>
                    <DataTable.Header style={styles.topTableHeader}>
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
                            <TextInput textColor='white' onChangeText={(count) => {
                                setYarnUnitRate(parseFloat(count));
                            }} style={styles.input} keyboardType='number-pad' />
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text className='text-white font-semibold'>RUBBER</Text></DataTable.Cell>
                        <DataTable.Cell>
                        <TextInput textColor='white' onChangeText={(count) => {
                                setRubberUnitRate(parseFloat(count));
                            }} style={styles.input} keyboardType='number-pad' />
                        </DataTable.Cell>
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
                        <TextInput textColor='white' onChangeText={(count) => {
                            setYarnCtn(parseFloat(count) * 79.3656);
                            // setYarnTotalTk(parseFloat(yarnCtn * 70.999647204))
                        }} style={styles.input} keyboardType='number-pad' />
                    </DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>{(yarnCtn).toFixed(3)}</Text></DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>{(yarnTotalTk).toFixed(3)}</Text></DataTable.Cell>
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
                        <TextInput textColor='white' onChangeText={(count2) => {
                            setRubberCtn(parseFloat(count2) * 55.115);
                            // setRubberTotalTk((parseFloat(count2) * 6889.375).toFixed(3))
                        }} style={styles.input} keyboardType='number-pad' />
                    </DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>{(rubberCtn).toFixed(3)}</Text></DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>{(rubberTotalTk).toFixed(3)}</Text></DataTable.Cell>
                </DataTable.Row>


                <DataTable.Row>
                    <DataTable.Cell><Text className='text-white font-semibold text-sm'></Text></DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>TOTAL TAKA</Text></DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>             = </Text></DataTable.Cell>
                    <DataTable.Cell><Text className='text-white font-semibold'>{(total).toFixed(3)}</Text></DataTable.Cell>
                </DataTable.Row>

                <TouchableOpacity onPress={() => calculateTotal()} className='mt-10 mx-10 px-4 py-3 bg-[#0F4C75] hover:bg-zinc-500 rounded-md '>
                    <Text className='text-center text-white text-lg font-semibold'>Calculate</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onRefresh()} className='mt-10 mx-10 px-4 py-3 bg-red-500 hover:bg-zinc-500 rounded-md '>
                    <Text className='text-center text-white text-lg font-semibold'>Refresh</Text>
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
        borderBottomColor: '#001C30',
        // borderWidth: 1,

    },
    topTableHeader: {
        backgroundColor: '#3F72BF',
        borderRadius: 6,
        borderBottomColor: '#001C30',
        borderColor: '#FFF',
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
