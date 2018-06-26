import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the testReactTable state domain
 */

const selectTestReactTableDomain = state =>
  state.get('testReactTable', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TestReactTable
 */

const makeSelectTestReactTable = () =>
  createSelector(selectTestReactTableDomain, substate => substate.toJS());

export default makeSelectTestReactTable;
export { selectTestReactTableDomain };
