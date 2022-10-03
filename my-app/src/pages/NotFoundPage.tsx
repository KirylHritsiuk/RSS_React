import { Htag } from 'components';
import React from 'react';

class NotFoundPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        data-testid="404-page"
      >
        <Htag tag="h2">
          404, page Not found! Please go back to <a href={'/'}>Home</a> page
        </Htag>
      </div>
    );
  }
}

export default NotFoundPage;
