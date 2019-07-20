import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// import { withTheme } from 'styled-components';
// import PropTypes from 'prop-types';

// function Name(props) {
function Name() {
  // const { name, theme } = props;
  // const { palette } = theme;

  return <div className={css(styles.container)}>{/* <p>{name}</p> */}</div>;
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
