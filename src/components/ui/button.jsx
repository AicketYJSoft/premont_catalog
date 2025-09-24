import React from 'react';
export function Button({ variant = 'default', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center h-9 px-4 rounded-md text-sm transition';
  const styles = {
    default: 'bg-black text-white hover:opacity-90',
    outline: 'border border-gray-300 hover:bg-gray-50'
  }[variant] || 'bg-black text-white';
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}