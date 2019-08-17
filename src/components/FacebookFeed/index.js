import React from 'react'

export const FacebookFeed = props => {
  return (
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTCFranconvilleOfficiel%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
      css={{
        border: 'none',
        overflow: 'hidden',
        width: '100%',
        maxWidth: 340,
        height: 500,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
      scrolling="no"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title="Faceboook feed"
      {...props}
    />
  )
}
