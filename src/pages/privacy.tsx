import * as React from "react";
import { useRouter } from "next/router";
import { PageHeader } from "../components/PageHeader";
import { Logo } from "../components/Logo";
import {
  Container,
  Center,
  Box,
  VStack,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const Policy = () => {
  const router = useRouter();
  return (
    <Container>
      <PageHeader title={`van der Vlugt - Technology & Consultancy`} follow />
      <VStack mx='auto' my='8' spacing='4' alignItems='start'>
        <Center minW='100%'>
          <Box onClick={() => console.log(router.push("/"))} cursor='pointer'>
            <Logo type='dark' />
          </Box>
        </Center>

        <Heading as='h1' pt='4'>
          {`Privacy Policy`}
        </Heading>
        <Text>
          {`van der Vlugt Technology & Consultancy, gevestigd aan Ruyschstraat
          331, 1091 MR Amsterdam, is verantwoordelijk voor de verwerking van
          persoonsgegevens zoals weergegeven in deze privacyverklaring.`}
        </Text>
        <Text>
          {`Contactgegevens: https://www.vandervlugt.me Ruyschstraat 331, 1091 MR
          Amsterdam +31612345678.`}
        </Text>
        <Text>
          {`Maarten van der Vlugt is de Functionaris Gegevensbescherming van van
          der Vlugt Technology & Consultancy Hij/zij is te bereiken via
          info@vandervlugt.me`}
        </Text>

        <Heading as='h2' fontSize='lg' pt='2'>
          {`Persoonsgegevens die wij verwerken`}
        </Heading>
        <Text>
          {`van der Vlugt Technology & Consultancy verwerkt je persoonsgegevens
          doordat je gebruik maakt van onze diensten en/of omdat je deze
          gegevens zelf aan ons verstrekt. Hieronder vind je een overzicht van
          de persoonsgegevens die wij verwerken:`}
        </Text>
        <UnorderedList stylePosition={"inside"}>
          <ListItem>{`Voor- en achternaam`}</ListItem>
          <ListItem>{`E-mailadres`}</ListItem>
          <ListItem>{`Internetbrowser en apparaat type`}</ListItem>
        </UnorderedList>

        <Heading as='h2' fontSize='lg' pt='2'>
          {`Bijzondere en/of gevoelige persoonsgegevens die wij verwerken`}
        </Heading>
        <Text>
          {`Onze website en/of dienst heeft niet de intentie gegevens te
          verzamelen over websitebezoekers die jonger zijn dan 16 jaar. Tenzij
          ze toestemming hebben van ouders of voogd. We kunnen echter niet
          controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan ook
          aan betrokken te zijn bij de online activiteiten van hun kinderen, om
          zo te voorkomen dat er gegevens over kinderen verzameld worden zonder
          ouderlijke toestemming. Als je er van overtuigd bent dat wij zonder
          die toestemming persoonlijke gegevens hebben verzameld over een
          minderjarige, neem dan contact met ons op via info@vandervlugt.me, dan
          verwijderen wij deze informatie.`}
        </Text>

        <Heading as='h2' fontSize='lg' pt='2'>
          {` Met welk doel en op basis van welke grondslag wij persoonsgegevens
          verwerken`}
        </Heading>

        <Text>
          {`van der Vlugt Technology & Consultancy verwerkt jouw persoonsgegevens
          voor de volgende doelen:`}
        </Text>
        <UnorderedList stylePosition={"inside"}>
          <ListItem>
            {`Verzenden van onze nieuwsbrief en/of reclamefolder`}
          </ListItem>
          <ListItem>
            {`Je te kunnen bellen of e-mailen indien dit nodig is om onze
            dienstverlening uit te kunnen voeren`}
          </ListItem>
          <ListItem>
            {`van der Vlugt Technology & Consultancy analyseert jouw gedrag op de
            website om daarmee de website te verbeteren en het aanbod van
            producten en diensten af te stemmen op jouw voorkeuren.`}
          </ListItem>
        </UnorderedList>

        <Heading as='h2' fontSize='lg' pt='2'>
          {`Geautomatiseerde besluitvorming`}
        </Heading>
        <Text>
          {`van der Vlugt Technology & Consultancy neemt verantwoordelijkheid op
          basis van geautomatiseerde verwerkingen besluiten over zaken die
          (aanzienlijke) gevolgen kunnen hebben voor personen. Het gaat hier om
          besluiten die worden genomen door computerprogramma's of -systemen,
          zonder dat daar een mens (bijvoorbeeld een medewerker van van der
          Vlugt Technology & Consultancy) tussen zit. van der Vlugt Technology &
          Consultancy gebruikt de volgende computerprogramma's of -systemen:`}
        </Text>
        <UnorderedList stylePosition={"inside"}>
          <ListItem>
            {`van der Vlugt Technology & Consultancy maakt geen gebruik van
            systemen die automatisch gegevens verwerken.`}
          </ListItem>
        </UnorderedList>

        <Heading as='h2' fontSize='lg' pt='2'>
          {`Hoe lang we persoonsgegevens bewaren`}
        </Heading>
        <Text>
          {`van der Vlugt Technology & Consultancy bewaart je persoonsgegevens
          niet langer dan strikt nodig is om de doelen te realiseren waarvoor je
          gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen
          voor de volgende (categorieën) van persoonsgegevens: #retention_period
          van der Vlugt Technology & Consultancy verkoopt jouw gegevens niet aan
          derden en zal deze uitsluitend verstrekken indien dit nodig is voor de
          uitvoering van onze overeenkomst met jou of om te voldoen aan een
          wettelijke verplichting. Met bedrijven die jouw gegevens verwerken in
          onze opdracht, sluiten wij een bewerkersovereenkomst om te zorgen voor
          eenzelfde niveau van beveiliging en vertrouwelijkheid van jouw
          gegevens. van der Vlugt Technology & Consultancy blijft
          verantwoordelijk voor deze verwerkingen.`}
        </Text>

        <Heading as='h2' fontSize='lg' pt='2'>
          {`Delen van persoonsgegevens met derden`}
        </Heading>
        <Text>
          {`van der Vlugt Technology & Consultancy verstrekt uitsluitend aan
          derden en alleen als dit nodig is voor de uitvoering van onze
          overeenkomst met jou of om te voldoen aan een wettelijke verplichting.`}
        </Text>

        <Heading as='h2' fontSize='lg' pt='2'>
          {`Cookies, of vergelijkbare technieken, die wij gebruiken`}
        </Heading>
        <Text>
          {`van der Vlugt Technology & Consultancy gebruikt alleen technische en
          functionele cookies. En analytische cookies die geen inbreuk maken op
          je privacy. Een cookie is een klein tekstbestand dat bij het eerste
          bezoek aan deze website wordt opgeslagen op jouw computer, tablet of
          smartphone. De cookies die wij gebruiken zijn noodzakelijk voor de
          technische werking van de website en jouw gebruiksgemak. Ze zorgen
          ervoor dat de website naar behoren werkt en onthouden bijvoorbeeld
          jouw voorkeursinstellingen. Ook kunnen wij hiermee onze website
          optimaliseren. Je kunt je afmelden voor cookies door je
          internetbrowser zo in te stellen dat deze geen cookies meer opslaat.
          Daarnaast kun je ook alle informatie die eerder is opgeslagen via de
          instellingen van je browser verwijderen.`}
        </Text>

        <Heading as='h2' fontSize='lg' pt='2'>
          {`Gegevens inzien, aanpassen of verwijderen`}
        </Heading>
        <Text>
          {`Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of
          te verwijderen. Daarnaast heb je het recht om je eventuele toestemming
          voor de gegevensverwerking in te trekken of bezwaar te maken tegen de
          verwerking van jouw persoonsgegevens door van der Vlugt Technology &
          Consultancy en heb je het recht op gegevensoverdraagbaarheid. Dat
          betekent dat je bij ons een verzoek kan indienen om de
          persoonsgegevens die wij van jou beschikken in een computerbestand
          naar jou of een ander, door jou genoemde organisatie, te sturen. Je
          kunt een verzoek tot inzage, correctie, verwijdering,
          gegevensoverdraging van je persoonsgegevens of verzoek tot intrekking
          van je toestemming of bezwaar op de verwerking van jouw
          persoonsgegevens sturen naar info@vandervlugt.me. Om er zeker van te
          zijn dat het verzoek tot inzage door jou is gedaan, vragen wij jou een
          kopie van je identiteitsbewijs met het verzoek mee te sturen. Maak in
          deze kopie je pasfoto, MRZ (machine readable zone, de strook met
          nummers onderaan het paspoort), paspoortnummer en Burgerservicenummer
          (BSN) zwart. Dit ter bescherming van je privacy. We reageren zo snel
          mogelijk, maar binnen vier weken, op jouw verzoek . van der Vlugt
          Technology & Consultancy wil je er tevens op wijzen dat je de
          mogelijkheid hebt om een klacht in te dienen bij de nationale
          toezichthouder, de Autoriteit Persoonsgegevens. Dat kan via de
          volgende link:
          https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons`}
        </Text>

        <Heading as='h2' fontSize='lg' pt='2'>
          {`Hoe wij persoonsgegevens beveiligen`}
        </Heading>
        <Text>
          {`van der Vlugt Technology & Consultancy neemt de bescherming van jouw
          gegevens serieus en neemt passende maatregelen om misbruik, verlies,
          onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde
          wijziging tegen te gaan. Als jij het idee hebt dat jouw gegevens toch
          niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem
          dan contact op met onze klantenservice of via info@vandervlugt.me`}
        </Text>
      </VStack>
    </Container>
  );
};

export default Policy;
