import React from 'react';
import './css/curtain.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Curtain = (props) => {
  let { loaded } = props;
  const curtainProps = {
    className: 'curtain',
    style: !loaded
      ? {
          background: '#fff',
          pointerEvents: 'inherit'
        }
      : {
          background: 'transparent',
          pointerEvents: 'none'
        }
  };
  return <div {...curtainProps}/>;
};

Curtain.propTypes = {
  loaded: PropTypes.bool
};

const mapStateToProps = state => ({
  loaded: state.loaded
});
export default connect(mapStateToProps)(Curtain);
