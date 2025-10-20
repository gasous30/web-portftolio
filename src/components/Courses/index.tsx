import { Center, Divider, Flex, Heading } from "@chakra-ui/react";
import { WorkExpContainer, WorkExpContainerModel } from "../WorkExp";
import { courses } from "../../portfolio";

const Courses = () => {
  return (
    <Center id={"courses"} flexDir={"column"} gap={3} p={5} mt={10} w={"95%"}>
      <Heading as={"h2"} size={"xl"}>
        Courses
      </Heading>
      <Divider borderWidth={1} />
      <Flex flexDir={"column"} alignItems={"center"} gap={5} w={"100%"}>
        {courses.map((val: WorkExpContainerModel, _) => (
          <WorkExpContainer data={val} />
        ))}
      </Flex>
    </Center>
  );
};

export default Courses;
