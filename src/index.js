import React from 'react';
import ReactDOM from 'react-dom';
import './component/css/index.css';
import App from './component/App';
import { store } from './redux/store';
import axios from 'axios';
import * as actions from './redux/actions';
import initState from './redux/initState';


axios.all([
  axios.get(`${initState.apiUrl}wp-json/wp/v2/posts?_embed`),
  axios.get(`${initState.apiUrl}wp-json/wp/v2/pages`),
  axios.get(`${initState.apiUrl}wp-json/wp/v2/categories`),
  axios.get(`${initState.apiUrl}wp-json/wp/v2/tags`),
  axios.get(`${initState.apiUrl}wp-json`)
]).then(axios.spread((posts, pages, categories, tags, info) => {
  store.dispatch(actions.downloadPosts(posts.data));
  store.dispatch(actions.downloadPages(pages.data));
  store.dispatch(actions.downloadCateg(categories.data));
  store.dispatch(actions.downloadTags(tags.data));
  store.dispatch(actions.downloadInformation({
    name: info.data.name,
    description: info.data.description
  }));
}));

axios.all([
  axios.get(`${initState.apiUrl}wp-json/wp-api-menus/v2/menus/2`),
  axios.get(`${initState.apiUrl}wp-json/wp-rest-api-sidebars/v1/sidebars/sidebar-1`)
]).then(axios.spread((menu, widgets) => {
  store.dispatch(actions.downloadMenu(menu.data.items));
  store.dispatch(actions.downloadWidgets(widgets.data.widgets));
  store.dispatch(actions.jsonLoaded());
})).catch(() => {
  alert('This wordpress theme requires two speciphic modules:\n - wp-rest-api-v2-menus\n - wp-rest-api-sidebars');
  store.dispatch(actions.jsonLoaded());
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
