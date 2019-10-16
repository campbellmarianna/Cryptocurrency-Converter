import React, { Component} from 'react';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

class Home extends Component {
  render() {
    return (
      <Container>
        <Logo/>
      </Container>
    )
  }
}

export default Home;