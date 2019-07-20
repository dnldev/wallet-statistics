import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import StatisticsDemo from './StatisticsDemo';

function AppContent() {
  return (
    <div className={css(styles.container)}>
      <Navigation>
        <Switch>
          <Route exact path="/stat-demo" component={StatisticsDemo} />
        </Switch>
      </Navigation>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    display: 'flex',
    flexDirection: 'column',
  },
});

export default AppContent;
