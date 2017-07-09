import * as React from 'react';
import {NavLink} from './Routes';

export interface IHelloProps { children: any; }

export class Hello extends React.Component<IHelloProps, undefined> {

  public say() {
    return 'Hi';
  }

  public render() {
    return (
      <div>
        <h1>{this.say()} from Route!</h1>
        <ul role="nav">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>
        <div>
        {this.props.children}        
      </div>
      </div>
    );
  }
}
