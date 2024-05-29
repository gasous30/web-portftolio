import { Button, Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { about } from "../../portfolio";

const About = () => {
  return (
    <Flex
      flexDir={"column"}
      w={"95%"}
      gap={10}
      alignItems={"center"}
      justifyContent={"center"}
      p={5}
      mt={10}
    >
      <Heading as={"h1"} size={"2xl"}>
        Hi, I am {about.name}.
      </Heading>
      <Heading as={"h2"} size={"xl"}>
        A data enthusiast.
      </Heading>
      <Text maxW={"70%"}>{about.description}</Text>
      <HStack spacing={4} justifyContent={"center"}>
        <Button
          as={"a"}
          variant={"outline"}
          href={about.resume}
          target={"_blank"}
        >
          Resume
        </Button>
        <Button
          as={"a"}
          variant={"link"}
          href={about.social.github}
          target={"_blank"}
        >
          <Icon as={FaGithub} boxSize={"1.5em"} />
        </Button>
        <Button
          as={"a"}
          variant={"link"}
          href={about.social.linkedin}
          target={"_blank"}
        >
          <Icon as={FaLinkedin} boxSize={"1.5em"} />
        </Button>
      </HStack>
    </Flex>
  );
};

export default About;
