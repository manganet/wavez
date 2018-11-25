import React from 'react';

import FontAwsomeIcon from '@fortawesome/react-fontawesome';
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="not_found_container">
        <FontAwsomeIcon icon={faExclamationCircle}/>
      
        <div>
          Oops!! page not found
        </div>
      </div>
      
    </div>
  );
};

export default PageNotFound;
