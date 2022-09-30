import React from 'react';

class NotFoundPage extends React.Component {
  render(): React.ReactNode {
    return (
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>404, page Not found!</h1>
      </main>
    );
  }
}

export default NotFoundPage;
