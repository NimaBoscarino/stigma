import React from 'react'
import styled from 'styled-components'

const Photo = ({src}) => {
  return (<img style={{
    width: '300px'
  }} alt={src} src={src} />)
}

const PhotosContainer = styled.div`
  line-height: 0;
  
  -webkit-column-count: ${props => props.cols};
  -webkit-column-gap:   0px;
  -moz-column-count:    ${props => props.cols};
  -moz-column-gap:      0px;
  column-count:         ${props => props.cols};
  column-gap:           0px;  

  & img {
    /* Just in case there are inline attributes */
    width: 100% !important;
    height: auto !important;
    padding: 3px;
  }
`

const PhotoMosaic = ({photos, cols = 4}) => (
  <PhotosContainer cols={cols}>
    {
      photos.map(p => <Photo key={p.id} src={p.url} />)
    }
  </PhotosContainer>
)

export default PhotoMosaic
