import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import {categoryFontSize} from './GStyleSize';

const { width, height } = Dimensions.get('window');
const boxWidth = width/5; 

export default class App extends React.Component {
  render() {
    return (  
                  <View style={styles.box}>
                      <Text> <Ionicons name="md-checkmark-circle" size={45} color="red" /></Text>
                      <Text  style={{fontSize:categoryFontSize,padding:15}}>{this.props.name}</Text>
                  </View>
    );
  }
}

const styles = StyleSheet.create({
   box:{  
      flexDirection:'row',
      alignItems:'center', 
      justifyContent:'flex-start',
  }
});
