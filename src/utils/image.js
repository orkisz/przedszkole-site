import React from 'react';

export const TRANSFORMATION_4BY3 = `w_500,h_375,c_fill`;
export const TRANSFORMATION_5BY3 = `w_500,h_300,c_fill`;

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
