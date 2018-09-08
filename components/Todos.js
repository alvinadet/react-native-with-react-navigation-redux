import React, { Component } from 'react';
import { Content, Text, ListItem, CheckBox, Body, SwipeRow, View, Button, Icon } from 'native-base';
import axios from 'axios'
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { allTodos } from '../Action';
import { API_URL } from '../consta'


class ListTodos extends Component {

  async handleDelete(id) {
    await axios.delete(`${API_URL}/${id}`)
    alert('success')
    this.props.dispatch(allTodos())

  }
  async pressCheck(id) {
    await axios.patch(`${API_URL}/${id}`, {
      Check: !this.props.datum.Check
    })

    alert('success')
    this.props.dispatch(allTodos())
  }
  render() {
    const { id, Check, Name } = this.props.datum;
    return (


      <SwipeRow
        key={id}
        rightOpenValue={-75}
        body={
          <View style={styles.atas}>
            <View style={styles.anak}><CheckBox checked={Check} onPress={() => this.pressCheck(id)} /></View>
            <View style={styles.anak}><Text>{Name}</Text></View>
          </View>
        }
        right={
          <Button danger onPress={() => this.handleDelete(id)}>
            <Icon active name="trash" />
          </Button>
        }
      />

    );
  }
}
const mapStateToProps = () => ({})
export default connect(mapStateToProps)(ListTodos)

const styles = StyleSheet.create({
  atas: {
    flexDirection: 'row',
  },
  anak: {
    padding: 10,
  }
})