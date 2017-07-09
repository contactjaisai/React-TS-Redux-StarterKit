import * as React from 'react';

export interface IHomePageProps { statData: string; product: string; }

export class HomePage extends React.Component<IHomePageProps, void> {

  public render() {
    return (
        <h2>Hello from Home!</h2>
    );
  }
}
