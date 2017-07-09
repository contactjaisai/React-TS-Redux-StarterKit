import * as React from 'react';
import { Link } from 'react-router';

export class NavLink extends React.Component<any, void> {

  public render() {
    return <Link {...this.props} activeClassName="active"/>;
  }
}
