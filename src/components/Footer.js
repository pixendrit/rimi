import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <div className="special">
  <ul>
    <li><a href="https://www.facebook.com/Rimi-Com-422097234550609">Facebook</a></li>
    <li><a href="https://www.instagram.com/rimicom/">Instagram</a></li>
    <li><a href="tel:+383 44 143 086">tel📞</a></li>
    
    <li>
      <p>👋</p>
    </li>
  </ul>
</div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Të gjitha të drejtat e rezervuara. Zhvilluar nga{' '}
          <a href="https://pixendrit.com">Pixendrit</a>.
        </span>
      </div>
    </footer>
  </div>
)
