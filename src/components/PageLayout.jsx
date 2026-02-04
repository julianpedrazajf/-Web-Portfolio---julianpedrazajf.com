import React from 'react';

export default function PageLayout({ title, description, children, className = '' }) {
  return (
    <main className={`page-container ${className}`.trim()}>
      {title && (
        <>
          <h1 className="page-title">{title}</h1>
          {description && <p className="mb-8 text-gray-300">{description}</p>}
          <div className="section-separator" aria-hidden="true" />
        </>
      )}
      {children}
    </main>
  );
}
