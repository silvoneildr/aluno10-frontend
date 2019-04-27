import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HelloComponent from 'Components/HelloComponent';

import PropTypes from 'prop-types';

import { Creators as WelcomeActions } from '../../store/ducks/welcome';

import { Container } from './styles';

class Welcome extends Component {
  static propTypes = {
    getUserGit: PropTypes.func.isRequired,
    welcome: PropTypes.shape({
      text: PropTypes.string,
      userName: PropTypes.string
    }).isRequired
  };

  state = {
    now: Date()
  };

  componentDidMount() {
    this.props.getUserGit('wagnerdutra');
  }

  render() {
    return (
      <Container>
        <p>{this.state.now}</p>
        <HelloComponent {...this.props.welcome} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  welcome: state.welcome
});

const mapDispatchToProps = disptach => bindActionCreators(WelcomeActions, disptach);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
