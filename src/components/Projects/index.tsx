import {
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Tag,
  Text,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { projects } from "../../portfolio";
import {
  SiTensorflow,
  SiPython,
  SiMongodb,
  SiReact,
  SiTwilio,
  SiExpress,
  SiTypescript,
  SiSelenium,
  SiScikitlearn,
} from "react-icons/si";

export interface ProjectContainerModel {
  title: string;
  description: string;
  tag: string;
  tech: string[];
  link?: string;
  children?: JSX.Element;
}

interface ProjectContainer {
  data: ProjectContainerModel;
}

const ProjectContainer = (props: ProjectContainer) => {
  const data = props.data;
  return (
    <Center
      flexDir={"column"}
      p={4}
      m={0}
      boxShadow={"dark-lg"}
      gap={4}
      cursor={"pointer"}
      transition={"transform .2s"}
      _hover={{ transform: "scale(1.05)" }}
      onClick={() =>
        window.open(data.link ? data.link : "projects/" + data.title)
      }
    >
      <Heading as={"h3"} size={"md"}>
        {data.title}
      </Heading>
      <Tag>{data.tag}</Tag>
      <Text>{data.description}</Text>
      <HStack spacing={4}>
        {data.tech.map((val: string, _) => {
          switch (val) {
            case "Python":
              return <Icon as={SiPython} boxSize={6} />;
            case "Tensorflow":
              return <Icon as={SiTensorflow} boxSize={6} />;
            case "React":
              return <Icon as={SiReact} boxSize={6} />;
            case "Express":
              return <Icon as={SiExpress} boxSize={6} />;
            case "Twilio":
              return <Icon as={SiTwilio} boxSize={6} />;
            case "Typescript":
              return <Icon as={SiTypescript} boxSize={6} />;
            case "Mongodb":
              return <Icon as={SiMongodb} boxSize={6} />;
            case "Selenium":
              return <Icon as={SiSelenium} boxSize={6} />;
            case "Scikitlearn":
              return <Icon as={SiScikitlearn} boxSize={6} />;

            default:
              return <Heading size={"sm"}>{val}</Heading>;
          }
        })}
      </HStack>
    </Center>
  );
};

const Projects = () => {
  return (
    <Flex
      id={"project"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      w={"95%"}
      gap={5}
      p={5}
      mt={10}
    >
      <Heading as={"h2"} size={"xl"}>
        Projects
      </Heading>
      <Divider borderWidth={1} />
      <Grid templateColumns="repeat(3, 1fr)" gap={5} w={"100%"}>
        {projects.map((val: ProjectContainerModel, _) => (
          <ProjectContainer data={val} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Projects;
