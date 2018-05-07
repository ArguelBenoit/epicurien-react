import './css/header.css';
import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { name, description } = props;
  return <div className="row header">
    <h1>{name}</h1>
    <div className="border"/>
    <p>{description}</p>
    <div className="border"/>
  </div>;
};

Header.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

export default Header;
