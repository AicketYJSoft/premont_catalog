import React from 'react';
export function Badge({ variant = 'default', className = '', children }) {
  const base = 'inline-flex items-center rounded-md text-xs font-medium px-2.5 py-1';
  const styles = {
    default: 'bg-gray-900 text-white',
    secondary: 'bg-gray-100 text-gray-700',
    outline: 'border border-gray-300 text-gray-700'
  }[variant] || styles.default;
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}