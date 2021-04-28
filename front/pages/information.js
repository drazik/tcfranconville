import { Wrapper } from "../components/Wrapper"
import { Section } from "../components/Section"
import { SEO } from "../components/SEO"

export default function Information() {
  return (
    <>
      <SEO title="Information" />
      <Section skewed variant="brand">
        <Wrapper>
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold text-white text-shadow-sm">
              Information
            </h1>
          </div>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <div className="prose mx-auto">
    <p>Le club est actuellement ouvert : les courts 1 à 6 sont accessibles aux adhérents du club et à leur(s) invité(s). Les vestiaires restent strictement fermés.</p>
    <p>Un certain nombre de règles courantes et conformes au protocole sanitaire élaboré par la FFT doivent être respectés par tous :</p>
    <ul>
      <li>En arrivant au club, merci de vous désinfecter les mains avec le gel hydroalcoolique mis à disposition</li>
      <li>Pour toute personne de plus de 6 ans, porter un masque dans l'enceinte du club (sauf pendant les exercices physiques)</li>
      <li>Les accompagnateurs ont l'interdiction de rester dans l'enceinte du club et dovient porter un masque le temps de leur présence dans l'enceinte du club</li>
      <li>Respecter à tout moment une distance physique de 2 mètres entre chaque personne</li>
      <li>Passer le filet et arroser les terres battues avant de quitter le court</li>
      <li>Laisser les portes des courts ouvertes</li>
    </ul>
    <p>Nous vous demandons de respecter scrupuleusement ces règles, afin de préserver la santé de tous et la pérennité de l'ouverture de ces installations. Des visites inopinées seront réalisées par les membres du comité du TCF, de manière à rappeler et faire respecter les règles le cas échéant.</p>
    <p>
    Pour toutes questions que vous jugerez utiles, vous pouvez nous adresser un email : <a href="mailto:tennis.club.franconville@cegetel.net">tennis.club.franconville@cegetel.net</a>.
    </p>
          </div>
        </Wrapper>
      </Section>
    </>
  )
}
