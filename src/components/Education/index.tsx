import { Center, Divider, Flex, Heading } from "@chakra-ui/react";
import { WorkExpContainer, WorkExpContainerModel } from "../WorkExp";
import { education } from "../../portfolio";

const Education = () => {
  return (
    <Center id={"education"} flexDir={"column"} gap={3} p={5} mt={10} w={"95%"}>
      <Heading as={"h2"} size={"xl"}>
        Education
      </Heading>
      <Divider borderWidth={1} />
      <Flex flexDir={"column"} alignItems={"center"} gap={5} w={"100%"}>
        {education.map((val: WorkExpContainerModel, _) => (
          <WorkExpContainer data={val} />
        ))}
      </Flex>
    </Center>
  );
};

export default Education;
