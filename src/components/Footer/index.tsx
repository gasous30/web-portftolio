import { Button, Center } from "@chakra-ui/react";
import { about } from "../../portfolio";

const Footer = () => {
  return (
    <Center p={5} mt={10}>
      <Button
        as={"a"}
        href={about.social.github}
        target={"_blank"}
        variant={"link"}
        fontSize={"xl"}
      >
        Created by Octavianus Bagaswara Adi
      </Button>
    </Center>
  );
};

export default Footer;
