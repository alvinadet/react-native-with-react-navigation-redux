import React, { Component } from 'react';
import { Header, Body, Title, Left, Right, Root } from 'native-base';
import { Font, AppLoading } from 'expo';

class Menu extends Component {
  state = {
    loading: true
  };
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ loading: false });
  }
  render() {

    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Header>
        <Left />
        <Body>
          <Title>Hai</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default Menu;
