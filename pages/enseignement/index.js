import { SEO } from "../../components/SEO"
import { Section, SectionTitle } from "../../components/Section"
import { Wrapper } from "../../components/Wrapper"
import { InfoBubble } from "../../components/Icon"
import minitennisIllustration from "./minitennis.jpg"
import junior1Illustration from "./junior1.jpg"
import junior2Illustration from "./junior2.jpg"
import adosIllustration from "./ados.jpg"
import adultIllustration from "./adult.jpg"
import PropTypes from "prop-types"
import cn from "classnames"
import Link from "next/link"
import { Button } from "../../components/Button"
import { TwoCol } from "../../components/TwoCol"

export default function EnseignementPage() {
  return (
    <>
      <SEO
        title="Enseignement"
        description="Grâce à ses enseignants très qualifiés, le TC Franconville propose des cours pour tout âge et tout niveau"
      />
      <Section skewed variant="brand">
        <Wrapper>
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold text-white text-shadow-sm">
              Enseignement
            </h1>
            <p className="text-lg font-semibold text-center">
              Un enseignement à haute valeur ajoutée&nbsp;! Grâce à ses
              enseignants très qualifiés, le TCF propose des cours pour tout âge
              et tout niveau.
              <br />
              Les cours sont très demandés, pensez à vous inscrire dès le moi de
              mai&nbsp;!
            </p>
          </div>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <div className="prose prose-lg max-w-none">
            <p>
              <strong>Nos objectifs pour vos enfants&nbsp;:</strong>
            </p>
            <ul>
              <li>partager le plaisir du jeu en s'amusant avant tout</li>
              <li>
                faire progresser chaque enfant à son rythme en tenant compte des
                singularités de chacun
              </li>
              <li>
                transmettre les valeurs de l'esprit sportif associant fair-play,
                dépassement de soi et esprit de compétition
              </li>
            </ul>
            <p>
              <strong>Notre politique de club vise à&nbsp;:</strong>
            </p>
            <ul>
              <li>
                promouvoir le tennis à l'extérieur du club par des actions comme
                le «&nbsp;tennis à l'école&nbsp;» en lien avec la mairie de
                Franconville et l'inspection académique
              </li>
              <li>
                emmener nos compétiteurs à développer leur potentiel en les
                intégrant à un centre d'entraînement intensif, en leur proposant
                des cours supplémentaires...
              </li>
              <li>
                fidéliser les enfants par le développement du jeu en dehors des
                cours (animations tennis, organisation de tournois,
                participation à des compétitions par équipes...)
              </li>
              <li>
                faciliter la transition vers l'âge adulte en intégrant les ados
                performants aux cours adultes
              </li>
            </ul>
          </div>
        </Wrapper>
      </Section>
      <Section skewed variant="light">
        <Wrapper>
          <div className="space-y-32">
            <SectionTitle>Notre école de tennis</SectionTitle>
            <TwoCol
              firstCol={
                <div className="space-y-6">
                  <SectionTitle subtitle="Pour les enfants 4-6 ans">
                    Mini-tennis
                  </SectionTitle>
                  <div className="prose max-w-none">
                    <p>1 heure par semaine.</p>
                    <p>
                      4 créneaux de 2019-2020&nbsp;: mercredi matin, vendredi en
                      début de soirée et samedi matin.
                    </p>
                    <p>
                      Un encadrement adapté au nombre d'enfants&nbsp;: 1 adulte
                      pour 5 enfants environ.
                    </p>
                    <p>Un matériel pédagogique spécifique.</p>
                    <p>
                      Compétences travaillées&nbsp;: déveloper la motricité, la
                      notion d'envoi-renvoi, arriver en fin d'année à effectuer
                      des petits échanges (notion de partenaire) et des
                      mini-matchs (notion de compétition).
                    </p>
                    <p>
                      41 enfants inscrits en mini-tennis en 2019-2020, soit une
                      explosion des effectifs de 70%&nbsp;!
                    </p>
                  </div>
                  <Info>
                    <div className="prose">
                      <p>
                        Le club dispose d'un terrain de mini-tennis (dans le mur
                        du club-house) sur lequel les enfants peuvent librement
                        venir s'entrainer&nbsp;!
                      </p>
                    </div>
                  </Info>
                </div>
              }
              secondCol={<Illustration src={minitennisIllustration} />}
            />
            <TwoCol
              firstCol={
                <div className="space-y-6">
                  <SectionTitle subtitle="pour les enfants 7-8 ans">
                    Club junior 1
                  </SectionTitle>
                  <div className="prose max-w-none">
                    <p>1 heure par semaine</p>
                    <p>
                      En 2019-2020, une trentaine d'enfants répartis sur 5
                      créneaux&nbsp;: mercredi matin et après-midi, samedi matin
                    </p>
                    <p>Deux niveaux&nbsp;: initiation et perfectionnement</p>
                    <p>Une fidélisation d'environ 60% des enfants&nbsp;!</p>
                  </div>
                </div>
              }
              secondCol={<Illustration src={junior1Illustration} />}
              inversed
            />
            <TwoCol
              firstCol={
                <div className="space-y-6">
                  <SectionTitle subtitle="pour les enfants 9-11 ans">
                    Club junior 2
                  </SectionTitle>
                  <div className="prose max-w-none">
                    <p>1h15 par semaine</p>
                    <p>
                      9 créneaux en 2019-2020 pour 60 enfants&nbsp;: lundi en
                      fin d'après-midi, mercredi matin et après-midi, vendredi
                      en fin d'après-midi, samedi matin et après-midi
                    </p>
                    <p>
                      Trois niveaux&nbsp;: initiation, perfectionnement,
                      compétition
                    </p>
                    <p>
                      50% des enfants poursuivent le tennis l'année
                      suivante&nbsp;!
                    </p>
                  </div>
                  <Info>
                    <div className="space-y-4">
                      <div className="prose">
                        <p>
                          Pour 95€ seulement, vous pouvez jouer autant que vous
                          le voulez avec votre enfant inscrit à l'école de
                          tennis et même réserver un court avec lui&nbsp;! Optez
                          pour la cotisation parent&nbsp;!
                        </p>
                      </div>
                      <Link href="/tarifs" passHref>
                        <Button component="a" className="w-full">
                          En savoir plus
                        </Button>
                      </Link>
                    </div>
                  </Info>
                </div>
              }
              secondCol={<Illustration src={junior2Illustration} />}
            />
            <TwoCol
              firstCol={
                <div className="space-y-6">
                  <SectionTitle subtitle="de 12 à 18 ans">
                    Club ados
                  </SectionTitle>
                  <div className="prose max-w-none">
                    <p>1h15 par semaine</p>
                    <p>
                      Trois niveaux&nbsp;: initiation, perfectionnement,
                      compétition
                    </p>
                    <p>
                      60 jeunes répartis sur 13 niveaux&nbsp;: lundi et mardi en
                      fin d'après-midi, mercredi après-midi, samedi après-midi
                    </p>
                    <p>
                      Plus de 70% des ados poursuivent le tennis l'année
                      suivante&nbsp;!
                    </p>
                    <p>
                      Un effectif en hausse de 25% entre 2019 et 2020&nbsp;!
                    </p>
                  </div>
                </div>
              }
              secondCol={<Illustration src={adosIllustration} />}
              inversed
            />
          </div>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <TwoCol
            firstCol={
              <div className="space-y-8">
                <SectionTitle>Cours adultes</SectionTitle>
                <div className="prose max-w-none">
                  <p>
                    70% de nos adultes (hors retraite sportive) prennent des
                    cours&nbsp;!
                  </p>
                  <p>
                    Des cours très demandés remplis à 100% de leur
                    capacité&nbsp;!
                  </p>
                  <p>
                    Des cours adaptés au niveau et aux objectifs de
                    chacun&nbsp;: du niveau débutant à 4/6, pour le loisir ou la
                    compétition...
                  </p>
                  <p>
                    Des formats variables en fonction des préférences de
                    chacun&nbsp;:
                  </p>
                  <ul>
                    <li>
                      1h avec un enseignant DE&nbsp;: 4 joueurs sur 1 terrain
                    </li>
                    <li>
                      1h15 (+15 minutes de jeu libre) en plateau pour des
                      partenaires plus variés&nbsp;: 8 joueurs sur 2 terrains
                      avec 2 enseignants (1 DE + 1 AMT). Une formule idéale pour
                      se perfectionner à moindre coût et rencontrer davantage de
                      joueurs&nbsp;!
                    </li>
                    <li>
                      1h30 pour les compétiteurs&nbsp;: 4 joueurs sur 1 terrain
                      avec un enseignant DE
                    </li>
                  </ul>
                </div>
              </div>
            }
            secondCol={<Illustration src={adultIllustration} />}
          />
        </Wrapper>
      </Section>
      <Section variant="brand">
        <Wrapper>
          <div className="space-y-8">
            <SectionTitle>Nos enseignants</SectionTitle>
            <div className="prose max-w-none">
              <p>
                L'équipe enseignants du TC Franconville est composée de&nbsp;:
              </p>
              <ul>
                <li>1 Diplomé d'Etat Supérieur (D.E.S)</li>
                <li>2 Diplomés d'Etat (D.E)</li>
                <li>2 Educateurs (CQPAMT)</li>
                <li>2 Educateurs en formation</li>
              </ul>
              <p>
                Notre équipe est à votre écoute pour répondre à vos besoins et
                ainsi vous accompagner dans l'apprentissage du tennis quels que
                soient votre niveau et votre âge. Ils seront ravis de vous faire
                profiter de leurs années d'expérience dans la formation du
                joueur de tennis.
              </p>
              <p>
                Un suivi est réalisé toute l'année selon que vous soyez un
                pratiquant loisir ou compétiteur.
              </p>
              <p>
                Alors n'hésitez plus et faites partie de l'aventure au
                TCF&nbsp;!
              </p>
            </div>
          </div>
        </Wrapper>
      </Section>
    </>
  )
}

function Info({ children, className, ...props }) {
  const r = 50
  const d = 2 * r

  return (
    <div className={cn("relative", className)} {...props}>
      <InfoBubble
        className="absolute w-12 h-12 fill-current text-brand"
        style={{ top: "-10px", left: "-10px" }}
      />
      <div className="relative px-6 pt-16 pb-8 overflow-hidden text-white rounded-xl">
        <div
          className="absolute"
          style={{
            width: d,
            height: d,
            boxShadow: "0 0 0 1000px #1a38b1",
            top: -r,
            left: -r,
            borderRadius: "50%",
            zIndex: "-1",
          }}
        />
        <p
          className="absolute font-bold transform -translate-y-1/2"
          style={{ top: "25px", left: "calc(50px + 1rem)" }}
        >
          Le saviez-vous ?
        </p>
        {children}
      </div>
    </div>
  )
}

Info.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

function Illustration({ alt = "", className, ...props }) {
  return (
    <img
      alt={alt}
      className={cn("max-w-full rounded-xl shadow-xl mx-auto", className)}
      {...props}
    />
  )
}

Illustration.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
}
