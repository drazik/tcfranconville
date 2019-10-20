import React from 'react'

export const Table = props => {
  return (
    <table
      css={{
        width: '100%',
        borderCollapse: 'collapse'
      }}
      {...props}
    />
  )
}

export const TableHead = props => {
  return (
    <thead {...props} />
  )
}

export const TableBody = props => {
  return (
    <tbody {...props} />
  )
}

export const TableRow = props => {
  return (
    <tr
      css={{
        'tbody &': {
          borderTop: '1px solid #dfdfdf'
        },

        'tbody &:nth-child(2n)': {
          backgroundColor: 'white'
        },

        'tbody &:nth-child(2n + 1)': {
          backgroundColor: '#f7f2f2'
        }
      }}
      {...props}
    />
  )
}

export const TableCell = props => {
  const { heading, align = 'left', ...rest } = props

  const Component = heading ? 'th' : 'td'

  return (
    <Component
      css={{
        padding: '1rem',
        textAlign: align
      }}
      {...rest}
    />
  )
}
