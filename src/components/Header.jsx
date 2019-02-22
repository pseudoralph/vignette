import React from 'react';
import { STYLES } from './styles';
import { Link } from 'react-router-dom';
import Hover from './Hover';
// import Active from './Active';

function Header() {
  const sectionHeadings = [
    { heading: 'About', path: '/' },

    { heading: 'Vignette', path: '/blog' }
  ];

  return (
    <div style={STYLES.header} className="header">
      <ul style={STYLES.headings} className="headings">
        {sectionHeadings.map((section, i) => (
          <Link style={STYLES.sectionLink} to={section.path} key={i}>
            <li style={STYLES.section} id={section.path}>
              <Hover>{section.heading}</Hover>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Header;
