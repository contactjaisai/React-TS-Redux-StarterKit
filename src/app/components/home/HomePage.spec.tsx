import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { HomePage } from './HomePage';

test('should render correctly', () => {
  const component = renderer.create(<HomePage statData="abc" product="xyz" />);
  expect(component.toJSON()).toMatchSnapshot();
});
