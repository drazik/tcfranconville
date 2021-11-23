import { SEO } from "../../components/SEO"
import { Section, SectionTitle } from "../../components/Section"
import { Wrapper } from "../../components/Wrapper"
import { TwoCol } from "../../components/TwoCol"
import { Button } from "../../components/Button"

export default function ReservationPage() {
  return (
    <>
      <SEO
        title="Réservation"
        description="Que vous soyez adhérent ou non, vous pouvez réserver un court de tennis à l'heure au TC Franconville"
      />
      <Section skewed variant="brand">
        <Wrapper>
          <h1 className="text-3xl font-bold text-center text-white text-shadow-sm">
            Réservation
          </h1>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <TwoCol
            firstCol={
              <div className="space-y-8">
                <SectionTitle>Adhérent</SectionTitle>
                <div className="prose max-w-none">
                  <p>
                    Les adhérents du club peuvent passer par leur espace TenUp
                    pour réserver un court afin de jouer avec un autre adhérent,
                    ou faire découvrir le club à un invité moyennant 6€ par
                    invitation.
                  </p>
                  <p>
                    Si vous n'avez pas encore de compte, vous pouvez en créer
                    un. Vous aurez besoin de votre numéro de licence, qui vous a
                    été envoyé par e-mail. En cas de difficultés, pensez à
                    consulter{" "}
                    <a href="https://tenup.fft.fr/FAQ" target="_blank">
                      la FAQ de TenUp
                    </a>
                    .
                  </p>
                </div>
                <Button
                  component="a"
                  href="https://tenup.fft.fr/"
                  target="_blank"
                  color="brand"
                  className="w-full"
                >
                  Accéder à TenUp
                </Button>
              </div>
            }
            secondCol={
              <div className="space-y-8">
                <SectionTitle>Non adhérent</SectionTitle>
                <div className="prose max-w-none">
                  <p>
                    Pour les non adhérents, l'application Anybuddy vous permet
                    de réserver, payer et accéder au club en toute autonomie.
                  </p>
                  <p>
                    Si vous jouez régulièrement, pensez à jeter un oeil à{" "}
                    <a
                      href="https://tcfranconville.fr/tarifs#cotisation"
                      target="_blank"
                    >
                      la cotisation
                    </a>
                    . Elle pourrait être plus avantageuse que des réservations à
                    l'unité. N'hésitez pas à nous contacter si vous avez des
                    questions à ce propos.
                  </p>
                </div>
                <Button
                  component="a"
                  href="https://www.anybuddyapp.com/club-franconville-tc/reservation/tennis"
                  target="_blank"
                  color="brand"
                  className="w-full"
                >
                  Accéder à Anybuddy
                </Button>
              </div>
            }
          />
        </Wrapper>
      </Section>
    </>
  )
}
