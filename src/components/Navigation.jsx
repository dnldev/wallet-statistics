import React from 'react';

import { StyleSheet, css } from 'aphrodite';
// import { withTheme } from 'styled-components';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Button } from '../theme/my-styled-components';

function Navigation(props) {
  const { children } = props;

  return (
    <div className={css(styles.container)}>
      <Link to="stat-demo">
        <Button>Go to Stat Demo</Button>
      </Link>
      {children}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Navigation;
