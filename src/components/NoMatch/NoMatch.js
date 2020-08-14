import React from 'react';
import { useLocation } from 'react-router-dom';

function NoMatch() {
    let location = useLocation();
  
    return (
      <div className="container">
        <h3>
          No match for URL route: <code>{location.pathname}</code>
        </h3>
      </div>
    );
}

export default NoMatch;