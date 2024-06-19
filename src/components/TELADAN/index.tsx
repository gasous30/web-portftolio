import { Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Teladan = () => {
  return (
    <Flex flexDir={"column"} pt={10} gap={5} textAlign={"left"}>
      <Heading textAlign={"center"}>
        Inside TELADAN: Nurturing Future Leaders with Tanoto Foundation{" "}
      </Heading>
      <Text>
        I was accepted into the TELADAN Program (Transforming Education for the
        Next Generation of Leaders), an initiative by the Tanoto Foundation
        aimed at developing outstanding future leaders who will contribute
        positively to Indonesia. This prestigious program offers structured and
        tiered leadership development, global self-development opportunities,
        community service, various collaboration and networking facilities,
        along with comprehensive support for tuition fees and living expenses.
        The TELADAN program is aimed at first-semester students from nine
        partner universities of Tanoto Foundation. First-semester students with
        achievements in various fields, organizational experience, and
        demonstrated leadership potential with integrity are encouraged to apply
        for the TELADAN program.
      </Text>
      <Text>There are several benefits for Tanoto Scholars:</Text>
      <Heading size={"sm"}>Leadership Development Support:</Heading>
      <Text>
        As a Tanoto Scholar, I collaboratively developed leadership knowledge
        and skills through a structured and continuous curriculum divided into
        three stages. Each stage includes new knowledge, project-based learning,
        self-development as a leader, career development preparation, and
        opportunities to contribute to the community.
      </Text>
      <Heading size={"sm"}>TELADAN Development Circle Support:</Heading>
      <Text>
        In addition to structured leadership development within the TELADAN
        curriculum, I received support to participate in enrichment activities
        known as the TELADAN Development Circle, which includes:
      </Text>
      <UnorderedList pl={5} gap={5}>
        <ListItem>
          <span style={{ fontWeight: 700 }}>
            Tanoto Scholars Association (TSA):
          </span>{" "}
          A community present at each partner university for all Tanoto Scholars
          to meet and interact as a new family.
        </ListItem>
        <ListItem>
          <span style={{ fontWeight: 700 }}>Pay It Forward Initiative: </span>
          Activities organized by TSA to continuously provide a positive impact
          on the community around the Tanoto Scholars' residence.
        </ListItem>
        <ListItem>
          <span style={{ fontWeight: 700 }}>
            Tanoto Scholars Gathering (TSG):{" "}
          </span>
          An annual event bringing together all Tanoto Scholars for joint
          activities.
        </ListItem>
        <ListItem>
          <span style={{ fontWeight: 700 }}>
            Tanoto Student Research Award (TSRA):{" "}
          </span>
          An annual grant supporting research funding at Tanoto Foundation's
          partner universities, open to all students at these institutions.
        </ListItem>
        <ListItem>
          <span style={{ fontWeight: 700 }}>Internships: </span>Opportunities to
          gain internship experience at Tanoto Foundation, Royal Golden Eagle
          (RGE) group companies, or other industry partners.
        </ListItem>
        <ListItem>
          <span style={{ fontWeight: 700 }}>Sponsorship: </span>Financial
          support to participate in competitions, conferences, and other
          self-development activities.
        </ListItem>
        <ListItem>
          <span style={{ fontWeight: 700 }}>Global Experiences Program: </span>
          Opportunities for high-achieving Tanoto Scholars to gain global
          experience and build international networks through short-term
          programs abroad such as summer courses, exchange programs, and more.
        </ListItem>
      </UnorderedList>

      <Heading size={"sm"}>Tuition and Living Expenses Support:</Heading>
      <Text>
        As a Tanoto Scholar, I received full tuition fees paid directly to
        Tanoto Foundation's partner universities, as well as monthly living
        allowances paid directly to me from the signing of the agreement until
        the 8th semester.
      </Text>
      <Heading size={"sm"}>Alumni Network in Indonesia and Worldwide:</Heading>
      <Text>
        After graduation, I will join the TELADAN program's alumni network,
        spread across various regions in Indonesia and other parts of the world.
        This network not only provides connections for mutual inspiration but
        also professional development activities to enhance capacities in line
        with global advancements.
      </Text>
    </Flex>
  );
};

export default Teladan;
