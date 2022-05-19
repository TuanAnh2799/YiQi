import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height } from '../getScreen/getSize';

interface Props {
    iconName: string,
    color: string,
    title: string
}
const CustomButton = ({iconName, color, title}:Props) => {
  return (
    <TouchableOpacity>
        <View style={styles.wrapButton}>
            <View style={styles.wrapIcon}>
                <Icon name={iconName} color={color} size={height * 0.03}/>
            </View>
            <View style={{width: '60%'}}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    wrapButton: {
        flexDirection:'row',
        width: '100%',
        backgroundColor:'#fff',
        height: height * 0.05,
        alignItems:'center',
        borderRadius: 5,
        shadowColor:'black',
        elevation: 5,
        marginTop:10
    },
    wrapIcon: {
        width: '40%',
        alignItems:'center',
    },
    text: {
        color: 'black',
        fontSize: height * 0.02
    },
})