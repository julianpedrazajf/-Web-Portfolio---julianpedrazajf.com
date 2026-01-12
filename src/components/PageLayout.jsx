import React from 'react';

export default function PageLayout({ title, children, className = '' }) {
  return (
    <main className={`page-container ${className}`.trim()}>
      {title && (
        <>
          <h1 className="page-title">{title}</h1>
          <div className="section-separator" aria-hidden="true" />
        </>
      )}
      {children}
    </main>
  );
}
