import React from 'react'
import PropTypes from 'prop-types'

const Teacher = props => {
  const { name, description, photo, ...rest } = props

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',

        '& + &': {
          marginTop: '2rem'
        }
      }}
      {...rest}
    >
      <div
        css={{
          height: 100,
          flexBasis: 100,
          flexShrink: 0,
          flexGrow: 0,
          backgroundImage: `url(${photo})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          borderRadius: '50%',
          boxShadow: '0 40px 30px -30px rgba(0, 0, 0, 0.5)'
        }}
      />
      <div
        css={{
          marginLeft: '1rem',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          css={theme => ({
            fontWeight: 'bold',
            fontSize: '1.15rem',
            color: theme.main
          })}
        >
          {name}
        </div>
        <div
          css={{
            marginTop: '0.5rem'
          }}
        >
          {description}
        </div>
      </div>
    </div>
  )
}

Teacher.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
}

export default Teacher
