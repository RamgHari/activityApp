import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActivityScreen () {
    const activityItems = [
        { title: 'Running' }, { title: 'Cooking' }, { title: 'Working' }, { title: 'Reading' }, { title: 'Walking' }, { title: 'Sleeping' },
    ]
    return (
        <View>
            <View style={styles.activityItemContainer} >
                <Text style={styles.headingText}>Select what you are doing</Text>
                <View style={styles.listConatiner} >
                    {
                        activityItems.map( item => {
                            return (
                                <View key={item.title}>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        style={styles.button}
                                        onPress={() => console.log( item.title )}
                                    >
                                        <Text style={styles.text} >{item.title}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        } )
                    }
                </View>
            </View>
            <View style={styles.timerSection}>
                <Text style={styles.headingText}>Start tracking</Text>
                <Text style={styles.headingText}></Text>
            </View>

            <View style={styles.trackRecordSection}>
            <Text style={styles.headingText}>Time tracked</Text>
            <ScrollView >
                <View>
                    <View style={styles.tractRecordDaysHeading}>
                        <Text>Mar 31 2022</Text>
                    </View>
                <View style={styles.trackRocordBox}>
                    <Text>1.30pm</Text>
                    <Text>-</Text>
                    <Text>1.30pm</Text>
                    <Text>-</Text>
                    <Text>Walking</Text>
                </View>
                <View style={styles.trackRocordBox}>
                    <Text>1.30pm</Text>
                    <Text>-</Text>
                    <Text>1.30pm</Text>
                    <Text>-</Text>
                    <Text>Reading</Text>
                </View>
                </View>

                <View>
                    <View style={styles.tractRecordDaysHeading}>
                        <Text>Mar 30 2022</Text>
                    </View>
                <View style={styles.trackRocordBox}>
                    <Text>1.30pm</Text>
                    <Text>-</Text>
                    <Text>1.30pm</Text>
                    <Text>-</Text>
                    <Text>Sleeping</Text>
                </View>
                <View style={styles.trackRocordBox}>
                    <Text>1.30pm</Text>
                    <Text>-</Text>
                    <Text>1.30pm</Text>
                    <Text>-</Text>
                    <Text>Walking</Text>
                </View>
                </View>
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create( {
    activityItemContainer: {
        flex: 1,
        marginTop:20,
        // paddingHorizontal: 50,
    },
    headingText: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 15,
        paddingBottom:10
    },
    listConatiner: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        alignItems: 'center',
        borderColor: 'rgba(128, 128, 128, 0.479)',
        borderWidth: 2,
        borderRadius: 5,
        margin: '5%',
    },
    text: {
        textAlign: 'center',
        fontWeight: '600',
        paddingHorizontal: 10,
        fontSize: 13
    },
    timerSection: {
        marginTop:70,
        paddingBottom:20,
        marginHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    trackRecordSection: {
        flex:1.5,
        paddingBottom:20,
        paddingTop:5,
        marginHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    tractRecordDaysHeading: {
        paddingLeft:10
    },
    trackRocordBox: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        borderColor: 'rgba(128, 128, 128, 0.479)',
        borderWidth: 2,
        borderRadius: 5,
        margin: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
} );