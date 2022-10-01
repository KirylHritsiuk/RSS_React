import Htag from 'components/Htag/Htag';
import React from 'react';

class NotFoundPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Htag tag="h2">404, page Not found!</Htag>
      </div>
    );
  }
}

export default NotFoundPage;
