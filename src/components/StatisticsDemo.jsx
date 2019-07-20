import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Bar } from 'react-chartjs-2';
import CSVReader from 'react-csv-reader';
// import PropTypes from 'prop-types';

class StatisticsDemo extends Component {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          label: 'Cash Movement per Account',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [],
        },
      ],
    },
  };

  readCSV = csv => {
    console.log(csv);
    const { data } = this.state;
    const amountPerAccount = {};
    csv.forEach(entry =>
      Object.keys(amountPerAccount).includes(entry.account)
        ? (amountPerAccount[entry.account] += Math.abs(
            parseFloat(entry.amount)
          ))
        : (amountPerAccount[entry.account] = Math.abs(parseFloat(entry.amount)))
    );
    console.log(amountPerAccount);
    Object.keys(amountPerAccount).forEach(label => {
      data.labels.push(label);
      data.datasets[0].data.push(amountPerAccount[label]);
    });
    this.setState({ data });
  };

  uploadError = err => console.error(err);

  render() {
    const { data } = this.state;

    return (
      <div className={css(styles.container)}>
        <CSVReader
          label="Select CSV Wallet Statistics"
          onFileLoaded={this.readCSV}
          onError={this.uploadError}
          inputStyle={{ color: 'red' }}
          parserOptions={{ header: true }}
        />
        <Bar data={data} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
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
