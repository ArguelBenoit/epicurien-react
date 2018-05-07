import initState from './initState';


const reducers = (state = initState, action) => {
  switch (action.type) {

    case 'DOWNLOAD_INFO':
      return Object.assign({}, state, {
        information: action.res
      });

    case 'DOWNLOAD_MENU':
      return Object.assign({}, state, {
        menu: action.res
      });

    case 'DOWNLOAD_WIDGETS':
      return Object.assign({}, state, {
        widgets: action.res
      });

    case 'DOWNLOAD_POSTS':
      return Object.assign({}, state, {
        posts: action.res
      });

    case 'DOWNLOAD_PAGES':
      return Object.assign({}, state, {
        pages: action.res
      });

    case 'DOWNLOAD_TAGS':
      return Object.assign({}, state, {
        tags: action.res
      });

    case 'DOWNLOAD_CATEG':
      return Object.assign({}, state, {
        categ: action.res
      });

    case 'JSON_LOADED':
      return Object.assign({}, state, {
        loaded: action.res
      });

    default:
      return state;
  }
};


export default reducers;
