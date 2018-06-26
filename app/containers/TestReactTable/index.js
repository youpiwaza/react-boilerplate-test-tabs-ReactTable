/**
 *
 * TestReactTable
 * Based on doc from : https://github.com/react-tools/react-table
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import injectReducer from 'utils/injectReducer';
import makeSelectTestReactTable from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class TestReactTable extends React.Component {
  render() {
    const data = [
      {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        },
      },
      {
        name: 'Bob l eponge',
        age: 10,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        },
      },
      {
        name: 'Patrick star',
        age: 15,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        },
      },
      {
        name: 'Carlo le calamar',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        },
      },
      {
        name: 'Mr Crabs',
        age: 18,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        },
      },
      {
        name: 'Plankton',
        age: 65,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        },
      },
    ];

    const columns = [
      {
        Header: 'Name',
        accessor: 'name', // String-based value accessors!
      },
      {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
      },
      {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name, // Custom value accessors!
      },
      {
        Header: () => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age',
      },
    ];

    return (
      <ReactTable
        data={data}
        columns={columns}
        defaultSorted={[
          {
            id: 'age',
            desc: true,
          },
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}

TestReactTable.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  testreacttable: makeSelectTestReactTable(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'testReactTable', reducer });

export default compose(
  withReducer,
  withConnect,
)(TestReactTable);
