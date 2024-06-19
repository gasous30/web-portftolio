import {
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Tag,
  Text,
  Divider,
  Icon,
  Button,
} from "@chakra-ui/react";
import { projects } from "../../portfolio";
import {
  SiTensorflow,
  SiPython,
  SiMongodb,
  SiReact,
  SiTwilio,
  SiExpress,
  SiTypescript,
  SiSelenium,
  SiScikitlearn,
  SiMicrosoftexcel,
  SiCoreldraw,
} from "react-icons/si";
import { useState } from "react";

export interface ProjectContainerModel {
  title: string;
  description: string;
  tag: string;
  tech: string[];
  link?: string;
  children?: JSX.Element;
}

interface ProjectContainer {
  data: ProjectContainerModel;
}

const SWIcon = (props: any) => (
  <Icon viewBox="0 0 512 512" {...props}>
    <path
      display="inline"
      fill="currentColor"
      d="M511.48,198.149c-0.49,3.747-4.809,5.925-25.622,5.771c-101.008-0.876-113.669,14.367-113.669,14.367
		s-8.52,4.931-2.677,16.214c6.242,12.035,82.003,100.599,98.417,131.066c10.66,19.771,25.618,54.013-33.825,74.291
		c-58.168,20.261-167.269,0.19-167.989,0c-26.44-6.646-25.8-11.16-25.505-13.111c0.521-3.737,4.763-5.752,25.564-5.743
		c95.817,0.082,142.136-6.687,153.346-13.687c6.868-4.251,8.021-10.774,7.386-16.5c-1.393-12.493-31.066-48.904-55.587-77.575
		c-25.174-29.497-78.751-80.96-42.631-112.189c43.325-37.454,138.793-20.986,157.465-16.967
		C505.95,188.322,511.894,195.055,511.48,198.149z M198.447,35.444c42.177-0.055,74.967,2.69,97.415,6.714
		c45.665,8.243,34.913,31.289,21.935,53.346c-31.493,53.7-116.545,114.113-121.486,117.525c-6.483,4.464-2.936,7.067,2.735,4.963
		c68.965-25.65,138.458-69.891,166.525-123.631c23.804-45.583,6.741-67.205-29.547-77.394
		c-64.791-18.228-131.965-1.529-137.618,0.136c-8.057,2.363-24.293,6.832-22.924,12.757
		C176.363,33.652,179.588,35.458,198.447,35.444z M239.589,253.051c-67.224-19.875-140.508-2.595-151.694,0.363
		c-16.922,4.491-26.834,9.014-26.14,14.317c0.521,3.919,4.85,6.614,25.645,6.088c49.571-1.198,90.642,0.485,116.604,7.748
		c32.15,8.982,36.11,25.541,20.188,58.068c-7.363,15.034-18.246,30.567-34.736,47.09c-32.913,33.026-74.056,54.512-97.233,66.243
		c-22.533,11.441-30.776,5.362-28.276-5.925c3.085-13.81,67.015-124.438,67.015-124.438c4.813-8.401,5.661-16.286,0-18.649
		c-4.845-2.064-13.633,4.745-22.76,15.306C70.892,362.601,2.063,494.456,0.783,498.784c-1.252,4.142,1.982,4.668,3.216,4.695
		c29.134-0.227,208.016-53.133,265.736-161.267C300.13,285.274,284.746,266.429,239.589,253.051z"
    ></path>
  </Icon>
);

const MatlabIcon = (props: any) => (
  <Icon viewBox="0 0 32 32" {...props}>
    <path
      fill="currentColor"
      d="M5.765 21.661c-1.593-1.188-3.577-2.583-5.765-4.172l7.749-2.979 3.183 2.385c-2.385 2.781-3.973 3.776-5.167 4.771zM27.031 13.317c-0.599-1.588-0.995-3.181-1.593-4.771-0.593-1.792-1.187-3.38-2.183-4.771-0.4-0.593-1.192-1.989-2.187-1.989-0.199 0-0.396 0.197-0.599 0.197-0.595 0.204-1.391 1.391-1.589 2.188-0.593 0.995-1.792 2.583-2.583 3.577-0.199 0.396-0.6 0.797-0.797 0.996-0.593 0.395-1.193 0.995-1.984 1.391-0.204 0-0.401 0.197-0.599 0.197-0.595 0-0.996 0.396-1.391 0.593-0.595 0.6-1.193 1.391-1.787 1.991 0 0.197-0.204 0.395-0.401 0.599l2.984 2.181c2.188-2.583 4.771-5.167 6.557-10.135 0 0-0.593 5.369-5.364 11.131-2.985 3.38-5.371 5.171-5.767 5.567 0 0 0.792-0.197 1.589 0.199 1.593 0.593 2.385 2.781 2.984 4.369 0.396 1.193 0.989 2.188 1.391 3.38 1.589-0.396 2.584-0.995 3.579-1.989 0.989-0.989 1.984-2.183 2.979-3.177 1.792-2.187 3.975-4.968 6.756-3.577 0.4 0.197 0.995 0.599 1.192 0.796 0.599 0.396 0.995 0.792 1.593 1.391 0.991 0.792 1.391 1.391 2.183 1.787-1.984-3.973-3.375-7.948-4.968-12.125z"
    />
  </Icon>
);

const SimulinkIcon = (props: any) => (
  <Icon viewBox="0 0 316 316" {...props}>
    <path
      d="M0 0 C12.38942635 6.75786892 12.38942635 6.75786892 18.08984375 10.14453125 C18.70808517 10.51132996 19.3263266 10.87812866 19.96330261 11.25604248 C21.95600602 12.43935044 23.94684762 13.62574541 25.9375 14.8125 C27.35464679 15.65553129 28.77180189 16.49854862 30.18896484 17.34155273 C40.34470429 23.3890843 50.45989589 29.50152498 60.55395508 35.65136719 C68.4231807 40.44452787 76.31701334 45.19493126 84.22415161 49.92526245 C94.74983834 56.22255909 105.24361876 62.56780676 115.6875 69 C116.78658691 69.67683838 117.88567383 70.35367676 119.01806641 71.05102539 C126.55547717 75.70365145 126.55547717 75.70365145 130 78 C133.21649208 78.33065826 133.21649208 78.33065826 136.94995117 78.31884766 C137.65264633 78.32889328 138.35534149 78.3389389 139.07933044 78.34928894 C141.40053494 78.38016427 143.72162387 78.39716787 146.04296875 78.4140625 C147.65294899 78.43277068 149.26291939 78.45234383 150.87287903 78.4727478 C155.10934655 78.52411211 159.34584588 78.56371473 163.5824585 78.60089111 C168.66618025 78.64793945 173.74974368 78.70955566 178.83333588 78.76873779 C186.55549349 78.85700249 194.27761996 78.92672898 202 79 C202 98.47 202 117.94 202 138 C205.63 138 209.26 138 213 138 C212.17547203 139.73338266 211.33961574 141.46137509 210.5 143.1875 C210.0359375 144.15042969 209.571875 145.11335937 209.09375 146.10546875 C205.98743099 151.88345393 202.4381083 157.41307402 199 163 C230.68 163.495 230.68 163.495 263 164 C263 209.87 263 255.74 263 303 C217.13 303 171.26 303 124 303 C124 257.13 124 211.26 124 164 C159.145 163.505 159.145 163.505 195 163 C190.38 155.08 185.76 147.16 181 139 C181 138.67 181 138.34 181 138 C185.29 138 189.58 138 194 138 C194 121.5 194 105 194 88 C146.64453476 84.83602832 146.64453476 84.83602832 105.01660156 103.62597656 C100.28571569 107.34911789 95.13192276 110.30813636 89.94638062 113.33935547 C87.0192824 115.0628569 84.1276295 116.84400387 81.23046875 118.6171875 C73.52566995 123.30998642 65.76387852 127.90585798 58 132.5 C46.41239554 139.3570161 34.87345414 146.28828468 23.3828125 153.30664062 C18.04831963 156.56120045 12.70285412 159.79662668 7.328125 162.984375 C6.35262695 163.56413086 5.37712891 164.14388672 4.37207031 164.74121094 C2 166 2 166 0 166 C0 140.26 0 114.52 0 88 C-13.2 88 -26.4 88 -40 88 C-40 85.03 -40 82.06 -40 79 C-26.8 79 -13.6 79 0 79 C0 52.93 0 26.86 0 0 Z "
      fill="currentColor"
      transform="translate(46,6)"
    />
  </Icon>
);

const ProjectContainer = (props: ProjectContainer) => {
  const data = props.data;
  return (
    <Center
      flexDir={"column"}
      p={4}
      m={0}
      boxShadow={"dark-lg"}
      gap={4}
      cursor={"pointer"}
      transition={"transform .2s"}
      _hover={{ transform: "scale(1.05)" }}
      onClick={() =>
        window.open(data.link ? data.link : "projects/" + data.title)
      }
    >
      <Heading as={"h3"} size={"md"}>
        {data.title}
      </Heading>
      <Tag>{data.tag}</Tag>
      <Text>{data.description}</Text>
      <HStack spacing={4}>
        {data.tech.map((val: string, _) => {
          switch (val) {
            case "Python":
              return <Icon as={SiPython} boxSize={6} />;
            case "Tensorflow":
              return <Icon as={SiTensorflow} boxSize={6} />;
            case "React":
              return <Icon as={SiReact} boxSize={6} />;
            case "Express":
              return <Icon as={SiExpress} boxSize={6} />;
            case "Twilio":
              return <Icon as={SiTwilio} boxSize={6} />;
            case "Typescript":
              return <Icon as={SiTypescript} boxSize={6} />;
            case "Mongodb":
              return <Icon as={SiMongodb} boxSize={6} />;
            case "Selenium":
              return <Icon as={SiSelenium} boxSize={6} />;
            case "Scikitlearn":
              return <Icon as={SiScikitlearn} boxSize={6} />;
            case "Excel":
              return <Icon as={SiMicrosoftexcel} boxSize={6} />;
            case "Coreldraw":
              return <Icon as={SiCoreldraw} boxSize={6} />;
            case "Solidworks":
              return <SWIcon boxSize={6} />;
            case "Matlab":
              return <MatlabIcon boxSize={6} />;
            case "Simulink":
              return <SimulinkIcon boxSize={6} />;
            case "Abacus":
              return <SWIcon boxSize={6} />;
            default:
              return <Heading size={"sm"}>{val}</Heading>;
          }
        })}
      </HStack>
    </Center>
  );
};

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  projects.sort((a, b) => (a.tag < b.tag ? -1 : 1));

  const handleTagClick = (tag: string) => {
    setSelectedTag((x) => (x === tag ? null : tag));
  };

  const projectsFiltered = selectedTag
    ? projects.filter((project) => project.tag.toLowerCase() === selectedTag)
    : projects;

  return (
    <Flex
      id={"project"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      w={"95%"}
      gap={5}
      p={5}
      mt={10}
    >
      <Heading as={"h2"} size={"xl"}>
        Projects
      </Heading>
      <Divider borderWidth={1} />
      <Center gap={5}>
        <Button
          colorScheme={
            selectedTag === "data" || selectedTag === null ? "teal" : "gray"
          }
          onClick={() => handleTagClick("data")}
        >
          Data
        </Button>
        <Button
          colorScheme={
            selectedTag === "machine learning" || selectedTag === null
              ? "teal"
              : "gray"
          }
          onClick={() => handleTagClick("machine learning")}
        >
          Machine Learning
        </Button>
        <Button
          colorScheme={
            selectedTag === "engineering" || selectedTag === null
              ? "teal"
              : "gray"
          }
          onClick={() => handleTagClick("engineering")}
        >
          Engineering
        </Button>
      </Center>
      <Grid templateColumns="repeat(3, 1fr)" gap={5} w={"100%"}>
        {projectsFiltered.map((val: ProjectContainerModel, _) => (
          <ProjectContainer data={val} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Projects;
