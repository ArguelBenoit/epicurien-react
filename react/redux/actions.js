

export const downloadInformation = (res) => {
  return {
    type: 'DOWNLOAD_INFO',
    res
  };
};

export const downloadMenu = (res) => {
  return {
    type: 'DOWNLOAD_MENU',
    res
  };
};

export const downloadWidgets = (res) => {
  return {
    type: 'DOWNLOAD_WIDGETS',
    res
  };
};

 // stop here
export const downloadPosts = (res) => {
  return {
    type: 'DOWNLOAD_POSTS',
    res
  };
};

export const downloadPages = (res) => {
  return {
    type: 'DOWNLOAD_PAGES',
    res
  };
};

export const downloadTags = (res) => {
  return {
    type: 'DOWNLOAD_TAGS',
    res
  };
};

export const downloadCateg = (res) => {
  return {
    type: 'DOWNLOAD_CATEG',
    res
  };
};
//
export const jsonLoaded = () => {
  return {
    type: 'JSON_LOADED',
    res: true
  };
};
