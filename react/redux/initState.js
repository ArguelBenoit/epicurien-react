
const initState = {
  // apiUrl: 'http://benoitarguel.ddns.net/',
  apiUrl: `${window.location.protocol}//${window.location.hostname}`,
  information: {
    name: '',
    description: ''
  },
  menu: [],
  widgets: [],
  posts: [],
  pages: [],
  tags: [],
  categ: [],
  loaded: false
};

export default initState;
