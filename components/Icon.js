import React from 'react';
import { Icon } from 'expo';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={60}
        //style={{ marginLeft: 50 }}
        color={this.props.color ? this.props.color : '#00ff00'}
      />
    );
  }
}