import React from 'react'
import PhotoMosaic from './PhotoMosaic';

const ReferenceImages = ({ photos }) => {
  return <PhotoMosaic cols={3} photos={photos} />
}

export default ReferenceImages