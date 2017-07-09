import * as React from 'react';
import AddToComment from '../../containers/AddComment';

export interface IDashboardProps { statData: string; product: string; }

export class DashboardPage extends React.Component<IDashboardProps, void> {

  public render() {
    return (
      <div>
        <h2>Hello from Dashboard!</h2>
        <AddToComment />
      </div>
    );
  }

}
