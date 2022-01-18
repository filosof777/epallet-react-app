import React from 'react';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderCenter from './HeaderCenter/HeaderCenter';
import HeaderTop from './HeaderTop/HeaderTop';

function Header() {
  return (
    <header className="header">
      {/* header top */}
      <HeaderTop />
      {/* header center */}
      <HeaderCenter />
      {/* header bottom */}
      <HeaderBottom />
    </header>
  )
}

export default Header;
