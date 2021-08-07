import React from 'react';

const style = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    bottom: '0px',
    width: '100%',
    backgroundColor: '#D7CEB2',
    color: '#212529',
    textAlign: 'center',
    height: '50px'
  }
}

export default function Footer() {
  return (
    <div className="footer" style={style.footer}>
      <span>bryan barnes © 2021</span>-
      <span><a href="https://www.linkedin.com/in/bryan-barnes-40a455207/" target="_blank" rel="noreferrer">linkedin</a></span>-
      <span><a href="https://github.com/bryan-barnes12" target="_blank" rel="noreferrer">github</a></span>
    </div>
  );
}
