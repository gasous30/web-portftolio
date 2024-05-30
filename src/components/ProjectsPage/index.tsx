import { Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
// import { projects } from "../../portfolio";

const ProjectPage = () => {
  const { projectId } = useParams();
  // const data = projects.find((x) => x.title == projectId);
  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      textAlign={"left"}
      w={"95%"}
      p={5}
      mt={10}
      gap={5}
    >
      <Heading pb={5}>{projectId}</Heading>
      {/* {data?.children} */}
    </Flex>
  );
};

export default ProjectPage;
