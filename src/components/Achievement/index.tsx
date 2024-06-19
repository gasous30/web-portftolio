import { Center, Divider, Flex, Heading } from "@chakra-ui/react";
import { achievement } from "../../portfolio";
import { WorkExpContainer } from "../WorkExp";

const Achievement = () => {
  return (
    <Center id="achievement" flexDir={"column"} gap={5} p={5} mt={10} w={"95%"}>
      <Heading as={"h2"} size={"xl"}>
        Achievement & Award
      </Heading>
      <Divider borderWidth={1} />
      <Flex flexDir={"column"} alignItems={"center"} gap={5} w={"100%"}>
        {achievement.map((val, _) => (
          <WorkExpContainer data={val} />
        ))}
      </Flex>
    </Center>
  );
};

export default Achievement;
