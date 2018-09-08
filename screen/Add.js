import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text, Root
} from 'native-base';
import { StyleSheet } from 'react-native';
import { Font, AppLoading } from 'expo';
import { connect } from 'react-redux';
import { allTodos } from '../Action';
import axios from 'axios';

import { API_URL } from '../consta/index';

class CreatePage extends Component {
  state = {
    loading: true,
    huruf: ""
  };
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ loading: false });
  }

  handleClick = () => {
    alert(this.state.huruf)
  }

  addData = () => {
    const { goBack } = this.props.navigation
    // alert(API_URL)
    axios.post(`${API_URL}`, {
      Name: this.state.huruf,
      Check: false
    })
      .then(res => {
        this.setState({
          huruf: ""
        })
        this.props.dispatch(allTodos())
        goBack()

      })

  }
  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      )
    }
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Todos</Label>
              <Input value={this.state.huruf}
                onChangeText={(text) => this.setState({ huruf: text })} />
            </Item>
          </Form>

        </Content>
        <Button onPress={() => this.addData()} style={styles.btnFooter}>
          <Text>Tambah</Text>
        </Button>
      </Container>
    );
  }
}
mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(CreatePage)

const styles = StyleSheet.create({
  btnFooter: { position: "absolute", bottom: 0, left: 0, right: 0 }
})