import { Section } from "../../components/Section"
import { SectionTitle } from "../../components/SectionTitle"
import { Wrapper } from "../../components/Wrapper"
import minitennisIllustration from "../../img/enseignement/minitennis.jpg"
import junior1Illustration from "../../img/enseignement/junior1.jpg"
import junior2Illustration from "../../img/enseignement/junior2.jpg"
import adosIllustration from "../../img/enseignement/ados.jpg"
import adultIllustration from "../../img/enseignement/adult.jpg"
import Link from "next/link"
import { Button } from "../../components/Button"
import { TwoCol } from "../../components/TwoCol"
import { Illustration } from "../../components/Illustration"
import { Info } from "../../components/Info"
import { PageHeader } from "../../components/PageHeader"

export default function EnseignementPage() {
  return (
    <>
      <PageHeader
        title={"Enseignement"}
        description={
          <p>
            Un enseignement à haute valeur ajoutée&nbsp;! Grâce à ses
            enseignants très qualifiés, le TCF propose des cours pour tout âge
            et tout niveau.
            <br />
            Les cours sont très demandés, pensez à vous inscrire dès le moi de
            mai&nbsp;!
          </p>
        }
      />
      <Section skewed>
        <Wrapper>
          <div className="prose prose-lg max-w-none">
            <p>
              <strong>Nos objectifs pour vos enfants&nbsp;:</strong>
            </p>
            <ul>
              <li>partager le plaisir du jeu en s&apos;amusant avant tout</li>
              <li>
                faire progresser chaque enfant à son rythme en tenant compte des
                singularités de chacun
              </li>
              <li>
                transmettre les valeurs de l&apos;esprit sportif associant
                fair-play, dépassement de soi et esprit de compétition
              </li>
            </ul>
            <p>
              <strong>Notre politique de club vise à&nbsp;:</strong>
            </p>
            <ul>
              <li>
                promouvoir le tennis à l&apos;extérieur du club par des actions
                comme le «&nbsp;tennis à l&apos;école&nbsp;» en lien avec la
                mairie de Franconville et l&apos;inspection académique
              </li>
              <li>
                emmener nos compétiteurs à développer leur potentiel en les
                intégrant à un centre d&apos;entraînement intensif, en leur
                proposant des cours supplémentaires...
              </li>
              <li>
                fidéliser les enfants par le développement du jeu en dehors des
                cours (animations tennis, organisation de tournois,
                participation à des compétitions par équipes...)
              </li>
              <li>
                faciliter la transition vers l&apos;âge adulte en intégrant les
                ados performants aux cours adultes
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
                      Un encadrement adapté au nombre d&apos;enfants&nbsp;: 1
                      adulte pour 5 enfants environ.
                    </p>
                    <p>Un matériel pédagogique spécifique.</p>
                    <p>
                      Compétences travaillées&nbsp;: déveloper la motricité, la
                      notion d&apos;envoi-renvoi, arriver en fin d&apos;année à
                      effectuer des petits échanges (notion de partenaire) et
                      des mini-matchs (notion de compétition).
                    </p>
                    <p>
                      41 enfants inscrits en mini-tennis en 2019-2020, soit une
                      explosion des effectifs de 70%&nbsp;!
                    </p>
                  </div>
                  <Info>
                    <div className="prose">
                      <p>
                        Le club dispose d&apos;un terrain de mini-tennis sur
                        lequel les enfants peuvent librement venir
                        s&apos;entrainer&nbsp;!
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
                      En 2019-2020, une trentaine d&apos;enfants répartis sur 5
                      créneaux&nbsp;: mercredi matin et après-midi, samedi matin
                    </p>
                    <p>Deux niveaux&nbsp;: initiation et perfectionnement</p>
                    <p>
                      Une fidélisation d&apos;environ 60% des enfants&nbsp;!
                    </p>
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
                      fin d&apos;après-midi, mercredi matin et après-midi,
                      vendredi en fin d&apos;après-midi, samedi matin et
                      après-midi
                    </p>
                    <p>
                      Trois niveaux&nbsp;: initiation, perfectionnement,
                      compétition
                    </p>
                    <p>
                      50% des enfants poursuivent le tennis l&apos;année
                      suivante&nbsp;!
                    </p>
                  </div>
                  <Info>
                    <div className="space-y-4">
                      <div className="prose">
                        <p>
                          Pour 95€ seulement, vous pouvez jouer autant que vous
                          le voulez avec votre enfant inscrit à l&apos;école de
                          tennis et même réserver un court avec lui&nbsp;! Optez
                          pour la cotisation parent&nbsp;!
                        </p>
                      </div>
                      <div className={"flex flex-col"}>
                        <Button>
                          <Link href="/tarifs">En savoir plus</Link>
                        </Button>
                      </div>
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
                      fin d&apos;après-midi, mercredi après-midi, samedi
                      après-midi
                    </p>
                    <p>
                      Plus de 70% des ados poursuivent le tennis l&apos;année
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
                L&apos;équipe enseignants du TC Franconville est composée
                de&nbsp;:
              </p>
              <ul>
                <li>1 Diplomé d&apos;Etat Supérieur (D.E.S)</li>
                <li>2 Diplomés d&apos;Etat (D.E)</li>
                <li>2 Educateurs (CQPAMT)</li>
                <li>2 Educateurs en formation</li>
              </ul>
              <p>
                Notre équipe est à votre écoute pour répondre à vos besoins et
                ainsi vous accompagner dans l&apos;apprentissage du tennis quels
                que soient votre niveau et votre âge. Ils seront ravis de vous
                faire profiter de leurs années d&apos;expérience dans la
                formation du joueur de tennis.
              </p>
              <p>
                Un suivi est réalisé toute l&apos;année selon que vous soyez un
                pratiquant loisir ou compétiteur.
              </p>
              <p>
                Alors n&apos;hésitez plus et faites partie de l&apos;aventure au
                TCF&nbsp;!
              </p>
            </div>
          </div>
        </Wrapper>
      </Section>
    </>
  )
}

export const metadata = {
  title: "Enseignement",
  description:
    "Grâce à ses enseignants très qualifiés, le TC Franconville propose des cours pour tout âge et tout niveau",
}
