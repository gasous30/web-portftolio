import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { about } from "../../portfolio";
import photoBody from "../../assets/photoBody.png";

const About = () => {
  return (
    <Flex>
      <Flex w={"30%"} h={"max-content"}>
        <Image
          src={photoBody}
          borderBottom={"2px solid"}
          borderColor={"currentcolor"}
          filter={"grayscale(100%)"}
        />
      </Flex>
      <Flex
        flexDir={"column"}
        w={"95%"}
        gap={10}
        alignItems={"center"}
        justifyContent={"center"}
        p={5}
        mt={10}
        h={"max-content"}
      >
        <Heading as={"h1"} size={"2xl"}>
          Hi, I am {about.name}.
        </Heading>
        <Heading as={"h2"} size={"xl"}>
          A data enthusiast.
        </Heading>
        <Text textAlign={"left"} maxW={"70%"}>
          {about.description}
        </Text>
        <HStack spacing={4} justifyContent={"center"}>
          {/* <Button
          as={"a"}
          variant={"outline"}
          href={about.resume}
          target={"_blank"}
        >
          Resume
        </Button> */}
          <Button
            as={"a"}
            variant={"link"}
            href={about.social.github}
            target={"_blank"}
          >
            <Icon as={FaGithub} boxSize={10} />
          </Button>
          <Button
            as={"a"}
            variant={"link"}
            href={about.social.linkedin}
            target={"_blank"}
          >
            <Icon as={FaLinkedin} boxSize={10} />
          </Button>
          <Button
            as={"a"}
            variant={"link"}
            href={about.social.mail}
            target={"_blank"}
          >
            <Icon as={MdEmail} boxSize={10} />
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default About;
