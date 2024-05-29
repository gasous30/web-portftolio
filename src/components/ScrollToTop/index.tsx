import { ChevronUpIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return isVisible ? (
    <Flex pos={"fixed"} bottom={"2em"} right={"4em"}>
      <Button
        variant={"solid"}
        borderRadius={"full"}
        boxSize={12}
        onClick={scrollToTop}
      >
        <ChevronUpIcon boxSize={8} />
      </Button>
    </Flex>
  ) : null;
};

export default ScrollToTop;
