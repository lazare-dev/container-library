import React from 'react';
import { Link, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { getBreadcrumbStyles } from './styles';

const BreadcrumbComponent = ({ items, type = 'primary' }) => {
  const theme = useTheme();  // get theme object
  const styles = getBreadcrumbStyles(theme, type);  // pass theme object

  const LinkItem = ({ href, label }) => (
    <Link 
      style={{ 
        textDecoration: 'none',
        cursor: 'pointer',
        color: styles.linkColor,
        padding: styles.linkPadding,
        borderRadius: styles.linkBorderRadius,
        margin: styles.linkMargin,
        border: styles.linkBorder,
        backgroundColor: styles.linkBackgroundColor,
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.linkHoverColor}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.linkBackgroundColor}
      href={href}
      onClick={(e) => e.preventDefault()}
    >
      {label}
    </Link>
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '5px 10px' }}>
      <LinkItem href="/" label={<HomeIcon fontSize="small" />} />
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span style={{ color: styles.separatorColor, margin: '0 5px' }}>/</span>
          <LinkItem {...item} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadcrumbComponent;
