import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class ExampleOne extends Component {
  constructor(props) {
    super(props);

    const elementButton = (value) => (
      <TouchableOpacity onPress={() => this._alertIndex(value)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        [elementButton('1'),'1', '2', '3', '4'],
        [elementButton('5'),'a', 'b', 'c', 'd'],
        [elementButton('1'),'1', '2', '3', '456\n789'],
        [elementButton('1'),'a', 'b', 'c', 'd']
      ]
    }
  }
  
  _alertIndex(index) {
    alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const tableWidth = this.props.contentWidth * 0.9;


    return (
      <ScrollView horizontal={true} >
        <View style={[styles.container, {width: tableWidth}]}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData} textStyle={styles.text}/>
          </Table>
        </View>
      </ScrollView>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, paddingTop: 10, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});