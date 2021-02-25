import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ErrorBoundary extends React.Component {
  state = {
    hasError: null,
  };

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={style.wrapper}>
          <Text style={style.title}>Something went wrong</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ErrorBoundary;
