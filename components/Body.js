import React, { Component } from 'react';
import {
  Content,
  Text,
  ListItem,
  CheckBox,
  Body,
  List,
  Icon,
  Fab,
  View,
  Container
} from 'native-base';
import Todos from './Todos';
import { FlatList } from 'react-native';
import axios from 'axios';
import { API_URL } from '../consta/index';
import { connect } from 'react-redux';
import { allTodos } from '../Action';

class Main extends Component {




  // getData = () => {

  //   //   axios.get(`https://rizkyarifnur-example.glitch.me/api/Data`)
  //   //     .then(res => {
  //   //       console.log(res.data)
  //   //       this.setState({
  //   //         todos: res.data,
  //   //         loading: false,
  //   //       })
  //   //     })
  //   //     .catch(err =>
  //   //       alert('data tidak masuk'))
  // }

  getData = () => {
    this.props.dispatch(allTodos())
  }
  //Disptatch Redux

  componentWillMount() {
    this.getData()
  }
  _keyExtractor = (item, index) => item.id.toString();

  //idntifikasi id supaya jadi string

  render() {

    return (
      <Container>
        <Content>
          <List>
            <FlatList
              data={this.props.todosReducer.todos}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={({ item }) => <Todos datum={item}
                getData={this.getData} />}
            />

          </List>
        </Content>
        {/* <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
        // onPress={() => navigation.dispatch({ type: 'CreateData' })}
        >
          <Icon name="add" />
        </Fab> */}
        {/* // this.props.navigation.navigate('CreateData') => sama saja seperti <Link> di react router */}
      </Container>
    );
  }
}
;

const mapStatetoProps = (state) => ({
  todosReducer: state.todosReducer
})

//todosReducer => combineReducers di app Reducers

export default connect(mapStatetoProps)(Main)

//main => nama class
//map to props nama fungsi
//conect => supaya redux bisa terkoneksi