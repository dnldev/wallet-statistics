import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';
// import { withTheme } from 'styled-components';
// import PropTypes from 'prop-types';

class Name extends Component {
  state = {};
  // constructor(props) {
  //   super(props);
  //   // ...
  // }

  // componentDidMount() {}
  // ...

  render() {
    // const { name, theme } = this.props;
    // const { palette } = theme;

    return <div className={css(styles.container)}>{/* <p>{name}</p> */}</div>;
  }
}

const styles = StyleSheet.create({
  container: {},
});

// Name.propTypes = {
//   name: PropTypes.string,
// };

// Name.defaultProps = {
//   name: '<Name>',
// };

// export default withTheme(Name);
export default Name;
