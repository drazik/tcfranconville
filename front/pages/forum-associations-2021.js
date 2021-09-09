import { Wrapper } from "../components/Wrapper"
import { Section } from "../components/Section"
import { SEO } from "../components/SEO"
import Link from "next/link"

export default function Information() {
  return (
    <>
      <SEO title="Information" />
      <Section skewed variant="brand">
        <Wrapper>
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold text-white text-shadow-sm">
              Forum des associations et tests de balles les 11 et 12 septembre
              2021
            </h1>
          </div>
        </Wrapper>
      </Section>
      <Section skewed>
        <Wrapper>
          <div className="prose mx-auto">
            <p>
              Le club sera présent au forum des associations le 11 septembre
              2021. Nous tiendrons un stand au CSL, au 25 avenue des marais.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1100.7206011411156!2d2.220440955002784!3d48.99213810304464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6672c6d35a355%3A0x21378b7ba0be805e!2sCentre%20de%20Sports%20et%20Loisirs%20(CSL)!5e0!3m2!1sfr!2sfr!4v1631219906826!5m2!1sfr!2sfr"
              className="w-full"
              style={{ height: "400px" }}
            ></iframe>
            <p>
              Le club sera quant à lui ouvert au public tout le week-end pour
              vous permettre de venir vous inscrire et faire un test :
            </p>
            <ul>
              <li>Le samedi 11/09 de 10h à 18h</li>
              <li>Le dimanche 12/09 de 10h à 17h</li>
            </ul>
            <p>Nous pourrons vous prêter une raquette pour l'occasion.</p>
            <iframe
              className="w-full"
              style={{ height: "400px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.57427100331!2d2.2175768160385503!3d48.9996586793017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6673fa2c4f21b%3A0x73fa94e076916ed!2sTennis%20Club%20de%20Franconville!5e0!3m2!1sfr!2sfr!4v1570894237189!5m2!1sfr!2sfr"
            ></iframe>
          </div>
        </Wrapper>
      </Section>
    </>
  )
}
