import React from 'react';

export default function Logo({ alt = 'Home' }) {
  return (
    <div className="site-logo-wrapper" aria-hidden="false">
      <a href="#/" aria-label="Home">
        <img
          src="/img/image1.png"
          alt={alt}
          className="site-logo site-logo--small"
          style={{ verticalAlign: 'middle', cursor: 'pointer' }}
        />
      </a>
    </div>
  );
}
