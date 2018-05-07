import React from 'react';
import Parser from 'html-react-parser';
import './css/pageContainer.css';
import PropTypes from 'prop-types';

const PageContainer = (props) => {
  const { data } = props;
  return <div className="page-container row">
    <h2>
      {Parser(data.title.rendered)}
    </h2>
    {Parser(data.content.rendered)}
  </div>;
};

PageContainer.propTypes = {
  data: PropTypes.object
};

export default PageContainer;
