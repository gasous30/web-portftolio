import { Center, Flex, Heading, Divider } from "@chakra-ui/react";
import { WorkExpContainer, WorkExpContainerModel } from "../WorkExp";
import { orgExperience } from "../../portfolio";

const OrgExp = () => {
  return (
    <Center id={"orgExp"} flexDir={"column"} gap={5} p={5} mt={10} w={"95%"}>
      <Heading as={"h2"} size={"xl"}>
        Organizational Experience
      </Heading>
      <Divider borderWidth={1} />
      <Flex flexDir={"column"} alignItems={"center"} gap={5} w={"100%"}>
        {orgExperience.map((val: WorkExpContainerModel, _) => (
          <WorkExpContainer data={val} />
        ))}
      </Flex>
    </Center>
  );
};
export default OrgExp;
