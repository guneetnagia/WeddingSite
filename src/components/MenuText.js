import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuText extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Story'
          active={activeItem === 'Story'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Events'
          active={activeItem === 'Events'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
