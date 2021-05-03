import * as React from 'react';
import 'react-image-lightbox/style.css';
import LightboxBase from 'react-image-lightbox';

const Lightbox = ({ isOpen, onClose, images, currentIndex, onCurrentIndexChange }) => {
  return (
          <>
            {isOpen && !!images.length && (
                    <LightboxBase
                            mainSrc={images[currentIndex]}
                            nextSrc={images[(currentIndex + 1) % images.length]}
                            prevSrc={images[(currentIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => onClose()}
                            onMovePrevRequest={() => onCurrentIndexChange((currentIndex + images.length - 1) % images.length)}
                            onMoveNextRequest={() => onCurrentIndexChange((currentIndex + 1) % images.length)}
                    />
            )}
          </>
  )
}

export default Lightbox;
