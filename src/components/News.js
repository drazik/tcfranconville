import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const News = styled.article`
  border-radius: 0.5rem;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.2);

  & + & {
    margin-top: 2rem;
  }
`

const SeeMoreLink = styled(Link)`
  display: block;
  font-size: 1.25rem;
  text-decoration: none;
  color: white;
  background-color: #1a38b1;
  text-align: center;
  width: 20rem;
  height: 4rem;
  line-height: 4rem;
  border-radius: 0.5rem;
  margin: 4rem auto 0 auto;
`

export function NewsList(props) {
  return (
    <React.Fragment>
      <News>
        <h1>
          Super Loto le 31 mars
        </h1>
        <p>
          Nous avons le plaisir de vous convier au SUPER LOTO du TCF. Celui-ci aura lieu dans le club house de votre club, le dimanche 31 mars, de 15h à 17h.
        </p>
        <p>
          De nombreux lots sont à gagner : tee-shirts, sac de sport, tickets de cinéma, paniers de fruits et légumes (fournis par notre partenaire « Quentin Primeurs »), séances de fitennis, boîtes de balles,… et bien plus encore !
        </p>
        <p>
          Le carton est au prix de 1€ pour toute la session de jeu; vous pourrez multiplier vos chances de gagner en achetant plusieurs cartons.
        </p>
        <p>
          Pour l'occasion, le bar sera ouvert et vous proposera une offre promotionnelle : 1 boisson chaude ou 1 verre de boisson fraîche + 1 part de gâteau maison pour seulement 1€
        </p>
        <p>
          N'hésitez pas à vous inscrire en indiquant votre NOM, PRÉNOM et LE NOMBRE DE PARTICIPANTS, en envoyant un mail au club ou directement au club-house sur l’affichage prévu à cet effet avant le 29 mars.
        </p>
      </News>
      <SeeMoreLink to="/actualites">Voir les autres actualités</SeeMoreLink>
    </React.Fragment>
  )
}
