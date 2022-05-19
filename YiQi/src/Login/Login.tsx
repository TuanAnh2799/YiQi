import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { width, height } from '../getScreen/getSize';
import CustomButton from './CustomButton';


const LoginScreen = ({navigation}: any) => {

  const [page, setPage] = useState<string>('LOGIN');

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <Header page={page} setPage={setPage}/>
      <Body page={page}/>
      <Footer />
    </SafeAreaView>
  )
}

const Header =({page,setPage}: any)=> {
  //console.log('header render')
  return (
  <View style={styles.wrapHeader}>
        <View style={styles.headerImg}>
          <Image source={{uri: 'https://hinhnen123.com/wp-content/uploads/2021/09/Tuyen-tap-444-anh-girl-che-mat-tuyet-dep-chat-lu-ngau-loi-18.jpg'}} style={{width: '100%', height: '100%'}} resizeMode={'cover'}/>
        </View>
        <View style={styles.wrapButton}>
          <TouchableOpacity onPress={()=> {
            setPage('LOGIN');
          }} disabled ={page == 'LOGIN' ? true : false}
          style={styles.touchAble}>
              <Text style={styles.textTouchAble}>Sign In</Text>
              {
                page == 'LOGIN' ? (
                  <View style={styles.viewUnderButton}></View>
                ): null
              }
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {
            setPage('REGISTER');
          }} disabled ={page == 'REGISTER' ? true : false} 
          style={styles.touchAble}>
              <Text style={styles.textTouchAble}>Register</Text>
              {
                page == 'REGISTER' ? (
                  <View style={styles.viewUnderButton}></View>
                ): null
              }
          </TouchableOpacity>
        </View>
      </View>
      )
}

const Body =({page}: any )=> {

  const [email, onChangeEmail] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const [fullname, onChangeFullName] = useState<string>('');
  const [email2, onChangeEmail2] = useState<string>('');
  const [password2, onChangePassword2] = useState<string>('');
  const [hidePassword2, setHidePassword2] = useState<boolean>(true);

  const navigation :any = useNavigation();

  return (
    <View style={styles.wrapBody}>
      {
        page == 'LOGIN' ? 
        (
          <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.wrapInput}>
                <View style={styles.wrapText}>
                  <Text style={styles.textBody}>Login your account.</Text>
                </View>
                <View style={styles.viewInput}>
                  <View style={styles.wrapTextInput}>
                    <Icon name='envelope' size={height * 0.02} color='black'style={{marginLeft: 10}}/>
                    <TextInput 
                      placeholder='Email ...'
                      style={styles.inputEmail}
                      onChangeText={onChangeEmail}
                      value={email}
                    />
                  </View>
                </View>

                <View style={styles.viewInput}>
                  <View style={styles.wrapTextInput}>
                    <Icon name='lock' size={height * 0.028} color='black'style={{marginLeft: 10}}/>
                    <TextInput 
                      placeholder='Password ...'
                      style={styles.inputPass}
                      onChangeText={onChangePassword}
                      value={password}
                      secureTextEntry={hidePassword}
                    />
                    {
                      hidePassword == false ? 
                      <Icon name='eye' size={height * 0.028} color='black' style={{marginLeft: 10}} onPress={()=>setHidePassword(!hidePassword)}/> 
                      : 
                      <Icon name='eye-slash' size={height * 0.028} color='black' style={{marginLeft: 10}} onPress={()=>setHidePassword(!hidePassword)}/>
                    }
                  </View>
                </View>

                <View style={styles.wrapForgetPass}>
                    <TouchableOpacity onPress={()=> navigation.navigate("Forget Password")}>
                      <Text>Forget password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.wrapButtonView}>
                  <TouchableOpacity style={styles.touchAbleButton}>
                    <View>
                      <Text style={styles.textTouch}>Sign In</Text>
                    </View>
                  </TouchableOpacity>
                </View>      

              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        ) : (
          <View style={styles.wrapInput}>
            <View style={styles.wrapText}><Text style={styles.textBody}>Create an account.</Text></View>
            <View style={styles.viewInput}>
              <View style={styles.wrapTextInput}>
                <Icon name='envelope' size={height * 0.02} color='black'style={{marginLeft: 10}}/>
                <TextInput 
                  placeholder='Email ...'
                  style={styles.inputEmail}
                  onChangeText={onChangeEmail2}
                  value={email2}
                />
              </View>
            </View>

            <View style={styles.viewInput}>
              <View style={styles.wrapTextInput}>
                <Icon name='user' size={height * 0.025} color='black' style={{marginLeft: 10}}/>
                <TextInput 
                  placeholder='Fullname ...'
                  style={{width: '90%',marginLeft:10, fontSize: height * 0.02}}
                  onChangeText={onChangeFullName}
                  value={fullname}
                />
              </View>
            </View>

            <View style={styles.viewInput}>
              <View style={styles.wrapTextInput}>
                <Icon name='lock' size={height * 0.028} color='black' style={{marginLeft: 10}}/>
                <TextInput 
                  placeholder='Password ...'
                  style={styles.inputPass}
                  onChangeText={onChangePassword2}
                  value={password2}
                  secureTextEntry={hidePassword2}
                />
                {
                  hidePassword2 == false ? 
                  <Icon name='eye' size={height * 0.028} color='black' style={{marginLeft: 5}} onPress={()=>setHidePassword2(!hidePassword2)}/> 
                  : 
                  <Icon name='eye-slash' size={height * 0.028} color='black' style={{marginLeft: 5}} onPress={()=>setHidePassword2(!hidePassword2)}/>
                }
              </View>
            </View>

            <View style={styles.wrapButtonView}>
              <TouchableOpacity style={styles.touchAbleButton}>
                <View>
                  <Text style={styles.textTouch}>Register</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        )
      }
    </View>
    
  )
}

const Footer = () => {
  //console.log('footer render')
  return (
    <View style={styles.wrapFooter}>

      <View style={styles.wrapConnect}>
        <View style={styles.line}></View>
        <View> 
          <Text style={styles.textConnect}> Connect with </Text>
        </View>
        <View style={styles.line}></View>
      </View>

      <View style={styles.wrapOtherConnect}>
        <View style={{width: '40%'}}>
          <CustomButton iconName={'facebook'} color={'blue'} title={'Facebook'} />
          <CustomButton iconName={'twitter'} color={'#1DA1F2'} title={'Twitter'} />
        </View>

        <View style={{width: '40%',}}>
          <CustomButton iconName={'google'} color={'orange'} title={'Google'} />
          <CustomButton iconName={'wechat'} color={'green'} title={'Wechat'} />
        </View>

      </View>

    </View>
  )
}
export default LoginScreen;

const styles = StyleSheet.create({
  wrapHeader: {
    width: '100%',
    height:'33%',
  },
  wrapBody: {
    width: '100%',
    height:'45%',
  },
  wrapFooter: {
    width: '100%',
    height: '22%',
  },

  // Header
  headerImg: {
    justifyContent:'center',
    alignItems:'center',
    height: '82%'
  },
  wrapButton: {
    width: '100%',
    height: '18%',
    flexDirection:'row',
  },
  touchAble: {
    width:'50%',
    justifyContent:'center',
  },
  textTouchAble: {
    fontSize: height * 0.022,
    fontWeight: '600',
    textAlign:'center',
    color:'black'
  },
  viewUnderButton: {
    width:'100%',
    height: 3,
    backgroundColor:'green',
    bottom: 0,
    position:'absolute',
  },

  //end header

  // start body
  wrapInput: {
    width: '100%',
    height:'100%'
  },
  wrapText: {
    marginLeft: '5%',
    marginTop: 25
  },
  textBody: {
    fontSize: height * 0.025,
    fontWeight:'600',
    color: 'black'
  },
  viewInput: {
    width:'100%',
    marginTop: 20
  },
  wrapTextInput: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#fff',
    flexDirection:'row',
    height: height * 0.05,
    borderRadius: 7,
    alignItems:'center',
    shadowColor:'black',
    elevation: 5
  },
  inputEmail: {
    width: '90%',
    marginLeft:5,
    fontSize: height * 0.02,
  },
  inputPass: {
    width: '75%',
    marginLeft: 5,
    fontSize: height * 0.02
  },
  wrapButtonView: {
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 20,
  },
  touchAbleButton: {
    width: '40%',
    height: height * 0.05,
    backgroundColor:'#fb923c',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20
  },
  wrapForgetPass: {
    width:'95%',
    justifyContent:'center',
    alignItems:'flex-end',
    marginTop: 15
  },
  textTouch: {
    color:'#fff',
    fontSize: height * 0.022
  },

  // footer
  wrapConnect: {
    flexDirection:'row',
    width: '100%',
    justifyContent:'space-around',
    alignItems:'center'
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    width: '30%',
  },
  textConnect: {
    fontSize: height * 0.02,
    color: 'black',
  },
  wrapOtherConnect: {
    flexDirection:'row',
    width: '100%',
    justifyContent:'space-around',
    marginTop: 10
  },
  // end footer
})