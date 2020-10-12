import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Na ndiqni {' '}
      <a href="https://instagram.com/rimicom/">@rimicom</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Zhvilluar nga{' '}
          <a href="https://pixendrit.com">Pixendrit</a>.
        </span>
      </div>
    </footer>
  </div>
)
