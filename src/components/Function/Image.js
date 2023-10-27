const imageCache = {};

export const preloadImage = (url) => {
  if (!imageCache[url]) {
    const img = new Image();
    img.src = url;
    imageCache[url] = img;
  }
};
