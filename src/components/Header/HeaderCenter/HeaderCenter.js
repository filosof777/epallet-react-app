import React from 'react';
import './HeaderCenter.css';
import HeaderCenterForm from './HeaderCenterForm/HeaderCenterForm';
import HeaderCenterInfo from './HeaderCenterInfo/HeaderCenterInfo';
import HeaderCenterLogo from './HeaderCenterLogo/HeaderCenterLogo';

function HeaderCenter() {
  return (
    <div className="header-center">
      <div className="header-center__container container">
        <div className="header-center__content">
          {/* header logo */}
          <HeaderCenterLogo />
          {/* header form */}
          <HeaderCenterForm />
          {/* header info */}
          <HeaderCenterInfo />
        </div>
      </div>
    </div>
  )
}

export default HeaderCenter
