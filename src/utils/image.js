import React from 'react';

export const applyTransform = (imgUrl, transformation) => {
  const [pre, post] = imgUrl.split('/upload/');
  return `${pre}/upload/${transformation}/${post}`; // create new url
}

export const getTransformedImg = (imgUrl, transformation, alt) => {
  const thumbUrl = applyTransform(imgUrl, transformation);
  return (
    <img key={thumbUrl}
         src={thumbUrl}
         alt={alt}/>
  );
}
