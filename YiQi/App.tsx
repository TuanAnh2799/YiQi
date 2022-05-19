import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useEffect } from 'react';
import { Routes } from './src/Navigation';
// import { io } from 'socket.io-client';


// const socket = io("http://192.168.1.138:3000/");



const App = () => {
//   const [initColor, setInitColor] = React.useState<string>("#fff");
//   const [data, setData] = React.useState<string>("");
//   const [text, setText] = React.useState<string>("");

//   socket.on("connect", () => {
//     console.log('my socket id: ',socket.id); //my socket id
//   });

//   const sendData =async()=> {
//     await socket.emit('send-data', text);
//     setText("");
//     ToastAndroid.show("Send success!", ToastAndroid.SHORT);
//   }

//   useEffect(() => {
//     socket.on('server-send-data', (value: string) => {
//     console.log('value từ server...',value);
//     setData(value);
//   })
//   },[]);

  
  return (
    <Routes />
  )
}

export default App

const styles = StyleSheet.create({})