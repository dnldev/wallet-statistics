import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Bar } from 'react-chartjs-2';
// import PropTypes from 'prop-types';

function StatisticsDemo() {
  const data = {};

  return (
    <div className={css(styles.container)}>
      <Bar data={data} />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
  },
});

// Name.propTypes = {
//   name: PropTypes.string,
// };

// Name.defaultProps = {
//   name: '<Name>',
// };

export default StatisticsDemo;
// export default Home;
