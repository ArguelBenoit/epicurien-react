import './css/menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  let { menu } = props;
  if (menu.length > 0) {
    const menu = props.menu.map( (e, i) => {
      if (e.type === 'custom') {
        return <li key={i}>
          <a href={'/' + e.url || '/'} target="_blank">{e.title}</a>
        </li>;
      } else {
        return <li key={i}>
          <Link to={'/' + e.object_slug || '/'}>{e.title}</Link>
        </li>;
      }
    });
    return <div className="row menu">
      <ul>
        {menu}
      </ul>
    </div>;
  } else {
    return <p>
      There should be a menu here, maybe you did not create one or you did not install this <a href="https://fr.wordpress.org/plugins/wp-rest-api-v2-menus/">module</a>.
    </p>;
  }
};

export default Menu;
