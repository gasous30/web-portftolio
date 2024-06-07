import {
  Center,
  Flex,
  Heading,
  Spacer,
  Tag,
  Text,
  Divider,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { workExperience } from "../../portfolio";

export interface WorkExpContainerModel {
  title: string;
  subtitle: string;
  description: string[];
  year: string;
}

interface WorkExpContainerProps {
  data: WorkExpContainerModel;
}

const WorkExpContainer = (props: WorkExpContainerProps) => {
  const modelData = props.data;
  return (
    <Flex flexDir={"column"} w={"100%"} gap={2}>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
        <Text fontSize={"xl"}>
          <Text as={"b"}>{modelData.title}</Text> - {modelData.subtitle}
        </Text>
        <Spacer />
        <Tag>{modelData.year}</Tag>
      </Flex>
      <Text textAlign={"left"} w={"80%"}>
        <UnorderedList>
          {modelData.description.map((val: string, _) => (
            <ListItem>{val}</ListItem>
          ))}
        </UnorderedList>
      </Text>
    </Flex>
  );
};

const WorkExp = () => {
  return (
    <Center id={"workExp"} flexDir={"column"} gap={5} p={5} mt={10} w={"95%"}>
      <Heading as={"h2"} size={"xl"}>
        Work Experience
      </Heading>
      <Divider borderWidth={1} />
      <Flex flexDir={"column"} alignItems={"center"} gap={5} w={"100%"}>
        {workExperience.map((val: WorkExpContainerModel, _) => (
          <WorkExpContainer data={val} />
        ))}
      </Flex>
    </Center>
  );
};

export { WorkExpContainer };
export default WorkExp;
