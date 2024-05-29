import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import "@fontsource-variable/kode-mono";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w={"95%"} pos={"sticky"} top={0} zIndex={99}>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
        <Heading
          as={"h1"}
          size={"lg"}
          letterSpacing={5}
          fontFamily={"Kode Mono Variable"}
        >
          OBA
        </Heading>
        <Flex alignItems={"center"}>
          <HStack spacing={7}>
            <Button as={"a"} variant={"ghost"} href={"#projects"}>
              Projects
            </Button>
            <Button as={"a"} variant={"ghost"} href={"#education"}>
              Education
            </Button>
            <Popover>
              <PopoverTrigger>
                <Button as={"a"} variant={"ghost"} cursor={"pointer"}>
                  Experience
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverBody>
                  <Center flexDir={"column"}>
                    <Button as={"a"} variant={"ghost"} href={"#workExp"}>
                      Work Experience
                    </Button>
                    <Button as={"a"} variant={"ghost"} href={"#orgExp"}>
                      Organizational Experience
                    </Button>
                  </Center>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Button onClick={toggleColorMode}>
              {colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
