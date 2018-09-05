import React from 'react';
import PropTypes from 'prop-types';

import { Host, Info, Button } from './styles';

class BuildVersion extends React.PureComponent {
  static propTypes = {
    version: PropTypes.string.isRequired,
    live: PropTypes.bool,
  };

  state = {
    open: true,
  };

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const { live, version } = this.props;

    if (live) return null;

    return (
      <Host className="BuildVersion NonFunctionals">
        {this.state.open && (
          <Info>{version}</Info>
        )}
        <Button
          className="BuildVersion-Button"
          onClick={this.toggle}
        >
          [ {this.state.open ? '-' : '+'} ]
        </Button>
      </Host>
    );
  }
}

export { BuildVersion };
