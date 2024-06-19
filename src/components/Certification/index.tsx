import {
  Center,
  Divider,
  Heading,
  Flex,
  Text,
  Spacer,
  Tag,
  Button,
} from "@chakra-ui/react";
import { certification } from "../../portfolio";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export interface CertContainerModel {
  title: string;
  subtitle: string;
  issued: string;
  expired?: string;
  credID: string;
  credLink: string;
  description: string;
}

interface CertContainerProps {
  data: CertContainerModel;
}

const CertContainer = (props: CertContainerProps) => {
  const modelData = props.data;
  return (
    <Flex flexDir={"column"} w={"100%"} gap={2}>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
        <Text fontSize={"xl"}>
          <Text as={"b"}>{modelData.title}</Text> - {modelData.subtitle}
        </Text>
        <Spacer />
        <Tag>
          {modelData.issued}
          {modelData.expired ? " - " + modelData.expired : null}
        </Tag>
      </Flex>
      <Text textAlign={"left"} w={"80%"}>
        {modelData.description}
      </Text>
      <Text textAlign={"left"} w={"80%"} fontWeight={800}>
        Credential ID: {modelData.credID}
      </Text>
      <Button
        rightIcon={<ExternalLinkIcon />}
        w={"15%"}
        as={"a"}
        target="_blank"
        href={modelData.credLink}
      >
        Show credential
      </Button>
    </Flex>
  );
};

const Certification = () => {
  return (
    <Center
      id="certification"
      flexDir={"column"}
      gap={5}
      p={5}
      mt={10}
      w={"95%"}
    >
      <Heading as={"h2"} size={"xl"}>
        License & Certification
      </Heading>
      <Divider borderWidth={1} />
      {certification.map((val: CertContainerModel, _) => (
        <CertContainer data={val} />
      ))}
    </Center>
  );
};

export default Certification;
