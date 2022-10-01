import Htag from 'components/Htag/Htag';
import React from 'react';

class About extends React.Component {
  render(): React.ReactNode {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Htag tag="h2">
          This APP create by{' '}
          <a href={'https://gitHub.com/KirylHritsiuk'} target={'_blank'} rel="noreferrer">
            Kiryl Hritsiuk
          </a>
        </Htag>
      </div>
    );
  }
}

export default About;
