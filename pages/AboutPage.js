import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import read from '../assets/read.png'

export default function AboutPage () {
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>Hi! 스파르타 코딩 앱개발 반에 오신것 환영합니다</Text>
            </View>
            <View style={styles.subContainer}>
                <Image source={read} style={styles.image} resizeMode='contain'/>
                <Text style={styles.subTitle}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.subContent}>꼭 완주하셔서 꼭 여러분것으로 만들어가시길 바랍니다.</Text>
                <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>인스타계정</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'lightblue'
    },
    titleContainer:{
        flex:1,
        marginBottom:50,
    },
    textTitle:{
        fontSize:30,
        fontWeight:'700',
        marginLeft:35,
        color:'white',
        marginTop:100,
        width:'85%'
    },
    subContainer:{
        flex:3,
        margin:35,
        marginBottom:70,
        backgroundColor:'white',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    subTitle:{
        fontSize:15,
        fontWeight:'700',
        textAlign:'center',
        marginBottom:20,
        width:'80%'
    },
    subContent:{
        fontSize:13,
        width:'80%',
        textAlign:'center'
    },
    image:{
        width:'30%',
        height:'30%'
    },
    middleButtonText: {
        color:"#fff",
        fontWeight:"700",
        //텍스트의 현재 위치에서의 정렬 
        textAlign:"center"
      },
    middleButton04: {
        width:100,
        height:50,
        padding:15,
        backgroundColor:"#f886a8",
        borderRadius:15,
        margin:7
    },
})