import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function ActivityScreen () {
    const activityItems = [
        { title: 'Running' }, { title: 'Cooking' }, { title: 'Working' }, { title: 'Reading' }, { title: 'Walking' }, { title: 'Sleeping' },
    ]
    const [start, setstart] = useState(false)
    return (
        <View>
            <View style={styles.activityItemContainer} >
                <Text style={[styles.headingText,{fontSize:18}]}>Select what you are doing</Text>
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
                                        {item.title == 'Running'? 
                                        <FontAwesome5 name="running" size={20} color="black" />:item.title == 'Cooking'?
                                        <MaterialCommunityIcons name="chef-hat" size={20} color="black" /> :item.title == 'Working'?
                                        <MaterialIcons name="work" size={20} color="black" />: item.title == 'Reading'?
                                        <FontAwesome5 name="book-reader" size={20} color="black" />:item.title == 'Walking'?
                                        <FontAwesome5 name="walking" size={20} color="black" />:item.title == 'Sleeping'&&
                                        <MaterialCommunityIcons name="sleep" size={20} color="black" />}
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
                {start ? <FontAwesome5 name="stop-circle" size={40} color="red" style={{alignSelf:'center'}} onPress={()=>{setstart(!start)}}/> :
                <AntDesign name="playcircleo" size={40} color="black" style={{alignSelf:'center'}} onPress={()=>{setstart(!start)}}/>}
            </View>

            <View style={styles.trackRecordSection}>
                <View style={styles.trackRecordHeadingSection}>
            <Text style={[styles.headingText,{paddingVertical:5}]}>Time tracked</Text>
            </View>
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
        marginTop:50,
        paddingHorizontal: 50,
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
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        // borderColor: 'rgba(128, 128, 128, 0.479)',
        // borderWidth: 2,
        borderRadius: 5,
        margin: '5%',
        backgroundColor:'orange',
        shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    text: {
        textAlign: 'center',
        fontWeight: '600',
        paddingHorizontal: 10,
        fontSize: 13
    },
    timerSection: {
        marginTop:50,
        paddingBottom:20,
        marginHorizontal:20,
    },
    trackRecordSection: {
        flex:1.5,
        paddingBottom:20,
        // paddingTop:5,
        marginHorizontal:20,
        backgroundColor:'#ffffff',
        // borderWidth:1,
        borderRadius: 10,
        borderColor:'gray',
        shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    trackRecordHeadingSection: {
        backgroundColor: '#1FE0A2',
        borderTopRightRadius:10,
        borderTopLeftRadius: 10,
        justifyContent:'center',
        alignContent:'center',
        alignItems: 'center'
        // borderBottomWidth: 2,
        // borderBottomColor: 'green'
    },
    tractRecordDaysHeading: {
        paddingLeft:10
    },
    trackRocordBox: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor:'#ffffff',
        // borderColor: 'rgba(128, 128, 128, 0.479)',
        // borderWidth: 2,
        borderRadius: 10,
        margin: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
} );