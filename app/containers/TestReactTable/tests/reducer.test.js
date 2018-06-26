import { fromJS } from 'immutable';
import testReactTableReducer from '../reducer';

describe('testReactTableReducer', () => {
  it('returns the initial state', () => {
    expect(testReactTableReducer(undefined, {})).toEqual(fromJS({}));
  });
});
