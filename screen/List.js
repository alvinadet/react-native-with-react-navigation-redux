import React, { Component } from 'react';
import { Container } from 'native-base';

import { Main } from '../components/index';

import { Icon, Fab, View } from 'native-base';

export default class componentName extends Component {
  render() {
    return (
      <Container>
        <Main />
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('CreateData')}>
          <Icon name="add" />
        </Fab>
        {/* flatList sama seperti map di react JS, bedanya ini seperti senter */}

      </Container>
    );
  }
}
