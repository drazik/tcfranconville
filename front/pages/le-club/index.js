import { SEO } from "../../components/SEO"
import { Section, SectionTitle } from "../../components/Section"
import { Wrapper } from "../../components/Wrapper"
import { TwoCol } from "../../components/TwoCol"
import { Illustration } from "../../components/Illustration"
import installationsIllustration from "../../img/le-club/installations.jpg"
import presidentPicture from "../../img/le-club/president.jpg"
import tresorierePicture from "../../img/le-club/tresoriere.jpg"
import secretairePicture from "../../img/le-club/secretaire.jpg"
import cn from "classnames"
import { Button } from "../../components/Button"

export default function LeClubPage() {
  return (
    <>
      <SEO
        title="Le club"
        description="Situé au 78 avenue des marais, à côté du stade municipal Jean Rolland, le club dispose de 9 courts dont 3 couverts et 2 extérieurs éclairés"
      />
      <Section skewed variant="brand">
        <Wrapper>
          <h1 className="text-3xl font-bold text-center text-white text-shadow-sm">
            Le club
          </h1>
        </Wrapper>
      </Section>
      <Section skewed variant="light">
        <Wrapper>
          <TwoCol
            firstCol={
              <div className="space-y-8">
                <SectionTitle>Les infrastructures</SectionTitle>
                <div className="prose max-w-none">
                  <p>
                    Le club met à disposition de ses adhérents{" "}
                    <strong>9 courts dont 3 couverts</strong>.
                  </p>
                  <ul>
                    <li>1 court extérieur en béton poreux (court n°1)</li>
                    <li>
                      2 cours extérieurs éclairés en greenset (courts n°2 et 3)
                    </li>
                    <li>
                      3 courts extérieurs en terre battue (courts n°4, 5 et 6)
                    </li>
                    <li>
                      3 courts couverts en terre battue (courts n°7, 8 et 9)
                    </li>
                    <li>1 court de mini-tennis</li>
                    <li>1 mur d'entraînement</li>
                  </ul>
                  <p>
                    Vous pourrez par ailleurs profiter du club-house et de la
                    terrasse en toute convivialité.
                  </p>
                </div>
              </div>
            }
            secondCol={<Illustration src={installationsIllustration.src} />}
          />
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <div className="space-y-16">
            <SectionTitle>Le bureau directeur</SectionTitle>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Person
                picture={presidentPicture.src}
                name="Laurent Operiol"
                role="Président"
              />
              <Person
                picture={tresorierePicture.src}
                name="Josiane Decker"
                role="Trésorière"
              />
              <Person
                picture={secretairePicture.src}
                name="Annabelle Gibralta"
                role="Secrétaire"
              />
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section skewed variant="light">
        <Wrapper>
          <TwoCol
            firstCol={
              <div className="space-y-8">
                <SectionTitle>Contacter le club</SectionTitle>
                <div className="prose max-w-none">
                  <p>
                    Le TC Franconville est situé au 78 Avenue des Marais, à côté
                    du stade municipal Jean Rolland. Un parking est disponible à
                    cette adresse, ainsi qu'un autre au 110 rue des Pommiers
                    Saulniers.
                  </p>
                  <p>
                    Vous pouvez nous contacter par téléphone au
                    01&nbsp;75&nbsp;40&nbsp;75&nbsp;20 ou par e-mail à l'adresse{" "}
                    <a href="mailto:tennis.club.franconville@cegetel.net">
                      tennis.club.franconville@cegetel.net
                    </a>
                    .
                  </p>
                </div>
              </div>
            }
            secondCol={
              <iframe
                className="w-full"
                style={{ height: "400px" }}
                title="Carte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.57427100331!2d2.2175768160385503!3d48.9996586793017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6673fa2c4f21b%3A0x73fa94e076916ed!2sTennis%20Club%20de%20Franconville!5e0!3m2!1sfr!2sfr!4v1570894237189!5m2!1sfr!2sfr"
              ></iframe>
            }
          />
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <div className="space-y-16">
            <SectionTitle>Partenaires</SectionTitle>
            <ul className="space-y-16">
              <li>
                <Partner
                  logo="/partners/ecosport.png"
                  name="Ecosport"
                  description={
                    <>
                      <p>
                        Ecosport est un magasin spécialisé dans la vente
                        d'articles de tennis pour les clubs et les particuliers.
                      </p>
                      <p>
                        Ils proposent à leurs clients l'un des plus grands choix
                        en France d'articles dédiés principalement à la pratique
                        du tennis, ce choix s'effectuant dans les plus grandes
                        marques connues (Nike, Asics, Adidas, Wilson, Babolat,
                        Tecnifibre, Yonex, Dunlop, Fila, Pro Kennex).
                      </p>
                    </>
                  }
                  url="https://www.ecosport-tennis.fr/"
                />
              </li>
              <li>
                <Partner
                  logo="/partners/capifrance.png"
                  name="Ludovic KORA"
                  description={
                    <>
                      <p>
                        Agent immobilier dans le réseau Capifrance, Ludovic,
                        adhérent du TCF, vous accompagne quel que soit votre
                        projet immobilier en vous apportant des solutions
                        pertinentes et efficaces.
                      </p>
                    </>
                  }
                  url="https://www.capifrance.fr/conseillers/ludovic.kora"
                />
              </li>
            </ul>
          </div>
        </Wrapper>
      </Section>
    </>
  )
}

function Partner({ logo, name, description, className, url, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8",
        className
      )}
      {...props}
    >
      <img
        src={logo}
        alt=""
        className="flex-grow-0 flex-shrink-0"
        style={{ maxWidth: "200px" }}
      />
      <div className="flex flex-col items-center space-y-4 lg:items-start">
        <div className="text-2xl font-semibold">{name}</div>
        <div className="prose max-w-none">{description}</div>
        {url ? (
          <Button component="a" href={url} target="_blank" color="brand">
            En savoir plus
          </Button>
        ) : null}
      </div>
    </div>
  )
}

const Person = ({ picture, name, role }) => {
  return (
    <div className="flex items-center space-x-6 md:flex-col md:space-y-6 md:space-x-0">
      <img
        src={picture}
        alt=""
        className="w-16 h-16 rounded-full object-cover object-center shadow md:w-32 md:h-32"
      />
      <div className="md:flex-col md:items-center md:text-center">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-gray-600">{role}</div>
      </div>
    </div>
  )
}
