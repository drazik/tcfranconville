"use client"

import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import help01 from "../../img/tarifs/help-01.png"
import help02 from "../../img/tarifs/help-02.png"
import help03 from "../../img/tarifs/help-03.png"
import help04 from "../../img/tarifs/help-04.png"
import { Info } from "../../components/Info"
import { Button } from "../../components/Button"
import { useState, Fragment } from "react"

export function HelpButton() {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <>
      <Button color="brand" onClick={() => setShowHelp(true)}>
        Comment faire ?
      </Button>

      <HelpDialog open={showHelp} onClose={() => setShowHelp(false)} />
    </>
  )
}

const HelpDialog = ({ open, onClose }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <Transition.Child
            as={"div"}
            className={"sticky top-0 z-10 px-4 pt-2 flex justify-center"}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Button size={"medium"}>Fermer</Button>
          </Transition.Child>
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-wrap">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900 grow shrink my-2"
                  >
                    Inscription en ligne : commment faire ?
                  </Dialog.Title>
                  <div className="shrink-0 my-2 md:ml-auto">
                    <Button
                      color="brand"
                      size="small"
                      component="a"
                      href="https://www.youtube.com/watch?v=MdzRYW04dOM"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Voir la vidéo d&apos;aide
                    </Button>
                  </div>
                </div>
                <div className="mt-8 space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium">
                      Étape 1 : créer son compte sur Ten&apos;Up
                    </h4>
                    <div className="prose max-w-none">
                      <p>
                        Rendez vous sur le site{" "}
                        <a href="https://tenup.fft.fr/" rel="noopener">
                          Ten&apos;Up
                        </a>{" "}
                        puis cliquez sur &quot;Connexion / inscription&quot;.
                      </p>
                      <Image src={help01} alt="" />
                      <p>
                        Créez votre compte en remplissant le formulaire
                        d&apos;inscription. Si vous avez déjà un compte,
                        connectez-vous.
                      </p>
                    </div>
                    <Info title="Inscription famille">
                      Si vous souhaitez inscrire plusieurs membre d&apos;une
                      même famille, chaque membre de la famille devra avoir un
                      compte Ten&apos;Up.
                    </Info>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium">
                      Étape 2 : Choisir sa formule
                    </h4>
                    <div className="prose max-w-none">
                      <p>
                        Rendez vous sur{" "}
                        <a
                          href="https://tenup.fft.fr/club/57950106/offres/5"
                          rel="noopener"
                          target="_blank"
                        >
                          la page des offres du TC Franconville
                        </a>
                        .
                      </p>
                      <p>
                        Sélectionnez la formule qui vous intéresse en cliquant
                        sur le bouton &quot;Ajouter&quot; associé à cette
                        formule.
                      </p>
                      <p>
                        Par exemple, pour sélectionner des cours de mini-tennis
                        :
                      </p>
                      <Image src={help02} alt="" />
                      <p>
                        En cas de doute sur la formule qui vous convient,
                        n&apos;hésitez pas à nous envoyer un message via notre{" "}
                        <a
                          href="https://www.facebook.com/TCFranconvilleOfficiel"
                          rel="noreferrer"
                        >
                          page Facebook
                        </a>{" "}
                        ou{" "}
                        <a href="mailto:tennis.club.franconville@cegetel.net">
                          un e-mail
                        </a>
                        .
                      </p>
                    </div>
                    <Info title="Attention">
                      Ne prenez pas de licence &quot;web&quot;. Une licence vous
                      sera attribuée par le club après votre inscription.
                    </Info>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium">Étape 3 : Paiement</h4>
                    <div className="prose max-w-none">
                      <p>
                        Accédez à votre panier en cliquant sur le bouton
                        &quot;Panier&quot; :
                      </p>
                      <Image src={help03} alt="" />
                      <p>
                        Suivez les instructions afin de procéder au paiement. Si
                        vous souhaitez payer en plusieurs fois, n&apos;oubliez
                        pas de sélectionner &quot;Je paye en plusieurs
                        fois&quot;&nbsp;:
                      </p>
                      <Image src={help04} alt="" />
                    </div>
                    <Info title="Inscription famille">
                      Pour une famille, il faut consulter le panier du compte du
                      &quot;Chef de famille&quot;.
                    </Info>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium">
                      Étape 4 : Certificat médical
                    </h4>
                    <div className="prose max-w-none">
                      <p>
                        La pratique du tennis est conditionnée à la présentation
                        d&apos;un certificat médical ou au remplissage d&apos;un
                        questionnaire de santé. Vous trouverez toutes les
                        indications ainsi que tous les documents nécessaires sur{" "}
                        <a
                          href="https://www.fft.fr/jouer/se-licencier/certificat-medical"
                          target="_blank"
                          rel="noreferrer"
                        >
                          le site de la Fédération Française de Tennis
                        </a>
                        .
                      </p>
                      <p>
                        Vous pouvez transmettre ces documents directement via
                        Ten&apos;Up.
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
