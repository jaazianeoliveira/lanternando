import React, {useState, useEffect} from 'react';
import { View, 
  StyleSheet,
  Image, 
  TouchableOpacity
} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';


const App = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() =>{
Torch.switchState(toggle);

  }, [toggle]);

  useEffect(()=>{
    const subscription =RNShake.addListener(() =>{
      setToggle(oldToggle => !oldToggle)})
  })

  //if  toggle return light 
  return (
     <View style = {
      toggle ? style.containerLight : style.container
    }>
    <TouchableOpacity onPress={() =>{
      setToggle(oldToggle => !oldToggle);
    }}>


    <
    Image style = {
      toggle ? style.lightingOn : style.lightingOff
    }
    source = {
      toggle ? require('./assets/icones/eco-light.png') : require('./assets/icones/eco-light-off.png')
    }
    />
    <
    Image style = {
     style.dioLogo}

    source = {
      toggle ? require('./assets/icones/logo-dio.png') : require('./assets/icones/logo-dio-white.png')
    }
    />
</TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroudColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  }
});