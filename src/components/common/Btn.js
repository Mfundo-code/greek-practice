import React from 'react';

// The app's standard button. kind="ghost" gives the outlined version.
export default function Btn({ kind, small, disabled, onClick, style, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles.btn,
        ...(kind === 'ghost' ? styles.ghost : null),
        ...(small ? styles.small : null),
        ...(disabled ? styles.disabled : null),
        ...style,
      }}
    >
      {children}
    </button>
  );
}

const styles = {
  btn: {
    border: 0,
    borderRadius: 12,
    padding: '14px 16px',
    font: 'inherit',
    fontWeight: 600,
    cursor: 'pointer',
    width: '100%',
    background: 'var(--accent)',
    color: 'var(--accent-ink)',
    marginBottom: 8,
  },
  ghost: { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--line)', fontWeight: 400 },
  small: { width: 'auto', padding: '8px 12px', fontWeight: 400 },
  disabled: { opacity: 0.45, cursor: 'default' },
};
