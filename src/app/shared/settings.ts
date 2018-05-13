export let mClientId = 'dUFPUnNpY2lyT1VFN1ZzUk5mRnRnUTo1MDlhMDE3MDQxMGM1ZDFk';

export const mRootUrl = 'https://a.mapillary.com/v3/';

export const cloudRootUrl = 'https://d1cuyjsrcm0gby.cloudfront.net/';

export const urls = {
  getSequences: `${mRootUrl}sequences`,
  getImage: key => `${mRootUrl}images/${key}`,
  getUser: key => `${mRootUrl}users/${key}`
};

export const imageSrc = {
  thumb320: key => {
    return `${cloudRootUrl}${key}/thumb-320.jpg`;
  },
  thumb640: key => {
    return `${cloudRootUrl}${key}/thumb-640.jpg`;
  },
  thumb1024: key => {
    return `${cloudRootUrl}${key}/thumb-1024.jpg`;
  },
  thumb2048: key => {
    return `${cloudRootUrl}${key}/thumb-2048.jpg`;
  }
};

export const settings = {
  featuresPerPage: 10,
  numberOfStoredFeaturePages: 5
};
