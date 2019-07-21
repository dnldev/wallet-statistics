import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Bar } from 'react-chartjs-2';
import CSVReader from 'react-csv-reader';
// import PropTypes from 'prop-types';

import { Button, Slider, Text } from '../theme/my-styled-components';

import { copy, daysBetween, roundToTwo } from '../helperFunctions';

class StatisticsDemo extends Component {
  defaultData = {
    labels: [],
    datasets: [
      {
        label: 'Withdrawal per Account',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',

        data: [],
      },
      {
        label: 'Addition per Account',
        backgroundColor: 'rgb(54, 247, 106)',
        borderColor: 'rgb(54, 247, 106)',
        data: [],
      },
    ],
  };

  state = {
    data: copy(this.defaultData),
    reportDays: 30,
  };

  calculateAdditions(csv) {
    const additionPerAccount = {};
    csv.forEach(entry => {
      const amount = parseFloat(entry.amount);
      if (amount > 0) {
        Object.keys(additionPerAccount).includes(entry.account)
          ? (additionPerAccount[entry.account] += amount)
          : (additionPerAccount[entry.account] = amount);
      }
    });

    console.log(additionPerAccount);

    return additionPerAccount;
  }

  calculateWithdrawals(csv) {
    const withdrawalsPerAccount = {};
    csv.forEach(entry => {
      const amount = parseFloat(entry.amount);
      if (amount < 0) {
        Object.keys(withdrawalsPerAccount).includes(entry.account)
          ? (withdrawalsPerAccount[entry.account] += amount)
          : (withdrawalsPerAccount[entry.account] = amount);
      }
    });

    console.log(withdrawalsPerAccount);

    return withdrawalsPerAccount;
  }

  filterCSVByDays = (csv, days) =>
    csv.filter(entry => daysBetween(new Date(), new Date(entry.date)) < days);

  saveCSV = csv => this.setState({ csv });

  readData = () => {
    const csv = this.filterCSVByDays(this.state.csv, this.state.reportDays);
    const { data } = this.state;
    const additionPerAccount = this.calculateAdditions(csv);
    const withdrawalsPerAccount = this.calculateWithdrawals(csv);

    Object.keys(additionPerAccount)
      .sort()
      .forEach(label => {
        data.labels.push(label);
        const withdrawalAmount = roundToTwo(withdrawalsPerAccount[label]);
        const additionAmount = roundToTwo(additionPerAccount[label]);
        data.datasets[0].data.push(withdrawalAmount);
        data.datasets[1].data.push(additionAmount);
      });
    this.setState({ dataset: () => data });
  };

  uploadError = err => console.error(err);

  render() {
    return (
      <div className={css(styles.container)}>
        <CSVReader
          label="Select CSV Wallet Statistics"
          onFileLoaded={this.saveCSV}
          onError={this.uploadError}
          inputStyle={{ color: 'red' }}
          parserOptions={{ header: true }}
        />
        <div>
          <Text>Report Days: {this.state.reportDays}</Text>
          <Slider
            type="range"
            min="1"
            max="100"
            step="1"
            value={this.state.reportDays}
            onChange={e => this.setState({ reportDays: e.target.value })}
          />
          <Button
            onClick={() =>
              this.setState({
                data: copy(this.defaultData),
                dataset: () => this.state.data,
              })
            }
          >
            Clear Values
          </Button>
        </div>
        <Bar data={this.state.dataset} />
        <Button onClick={this.readData}>Process Data</Button>
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
