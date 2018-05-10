import React from 'react';
import Parser from 'html-react-parser';
import './css/widgets.css';
import { Link } from 'react-router-dom';


const parserOptions = {
  replace: (domNode) => {
    if (!domNode.attribs) return;
    if (domNode.name === 'a') {
      // à améliorer :
      // - si le lien est externe ne pas remplacer par link de react-router
      // - si le lien est interne remplacer l'url par une url relative.
      // - générer les props keys de react dans les <li> des <ul>
      return <Link to={domNode.attribs.href}>
        {domNode.children[0].data}
      </Link>;
    }
  }
};

const Widget = props => {
  const { widgets } = props;
  if (widgets.length > 0) {
    const renderWidgets = widgets.map(e => {
      return Parser(e.rendered, parserOptions);
    });
    return <div className="widgets row">
      {renderWidgets}
    </div>;
  } else {
    return <p>
      There should be some widgets here, maybe you did not add them or you did not install this requested <a href="https://wordpress.org/plugins/wp-rest-api-sidebars/">module</a>.
    </p>;
  }
};

export default Widget;
