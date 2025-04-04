import React from 'react';
import './Header.css'

function Header() {
  return (
    <div>
      <header className="topo">
        <div className="container">
          <div className="divlogo">
            <div className="img">
              <img 
                className="logo" 
                src="https://images.vexels.com/media/users/3/153242/isolated/preview/6076a2083aacc2b3affbc0cc7a35c0d7-icone-plano-do-disco-compacto-multimidia.png" 
                alt="Logo" 
              />
            </div>
            <div className="h1">
              <h1>MUZAAC</h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;