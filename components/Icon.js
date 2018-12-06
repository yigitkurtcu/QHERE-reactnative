import React from 'react';
import { Icon } from 'expo';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={50}
        style={{ marginLeft: 10 }}
        color={this.props.color ? this.props.color : '#00ff00'}
      />
    );
  }
}