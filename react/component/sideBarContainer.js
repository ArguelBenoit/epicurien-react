import './css/sideBarContainer.css';
import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';
import Search from './search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import PropTypes from 'prop-types';
import Widgets from './widgets';


class SideBarContainer extends Component {
  constructor(props) {
    super(props);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.state = {
      clicked: false
    };
  }
  onClickMenu() {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked
    });
  }
  render() {
    const { information, menu, widgets } = this.props;
    const { clicked } = this.state;
    const classNameMain = `sidebar-container ${clicked ? 'clicked' : ''}`;

    return <div className={classNameMain}>
      <div className="container">
        <Header {...information}/>
        <Menu menu={menu} />
        <Search />
        <Widgets widgets={widgets} />
      </div>
    </div>;
  }
}



SideBarContainer.propTypes = {
  downloadInformation: PropTypes.func,
  jsonLoaded: PropTypes.func,
  downloadWidgets: PropTypes.func,
  apiUrl: PropTypes.string,
  information: PropTypes.object,
  downloadMenu: PropTypes.func,
  menu: PropTypes.array,
  widgets: PropTypes.array
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}
const mapStateToProps = state => ({
  apiUrl: state.apiUrl,
  menu: state.menu,
  information: state.information,
  widgets: state.widgets
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
