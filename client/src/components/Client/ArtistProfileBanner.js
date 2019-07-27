import React from 'react'
import CreateApplicationModal from './CreateApplicationModal'
import CreateInquiryModal from './CreateInquiryModal'
import { Tag } from 'antd'
import styled from 'styled-components'

const BooksTag = styled(Tag)`
  margin: 5px;
`

const Avatar = styled.img`
  margin: 15px;
  height: 150px;
  width: 150px;
  object-fit: cover;
`

const InstagramHandle = styled.h3`
  font-style: italic;
`

const ArtistProfileBanner = ({artist}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '15px'
    }}>
      <Avatar alt={artist.name} src={artist.avatar} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <div>
          <h2 style={{
            display: 'inline-block'
          }}>
            {artist.name}
          </h2>
          {
            artist.books_open && (<BooksTag color="green">Books open!</BooksTag>)
          }
        </div>
        <InstagramHandle>@{artist.username}</InstagramHandle>
        <div style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          {
            artist.books_open && (<CreateApplicationModal artist={artist} />)
          }
          <CreateInquiryModal artist={artist} />
        </div>
      </div>
    </div>    
  )
}

export default ArtistProfileBanner