import React from 'react';

export const TRANSFORMATION_PERSONNEL_1BY1 = `w_600,h_600,c_fill`;
export const TRANSFORMATION_4BY3 = `w_500,h_375,c_fill`;
export const TRANSFORMATION_5BY3 = `w_500,h_300,c_fill`;
export const TRANSFORMATION_FULL_BLOG = `w_872,c_scale`;
export const TRANSFORMATION_FULL_SCREEN = `w_1500,c_limit`;

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
