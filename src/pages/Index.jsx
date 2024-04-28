import { Box, Flex, Text, Input, Button, VStack, Heading, Image } from "@chakra-ui/react";
import { FaUserMd, FaSearch, FaPlus, FaFileMedical } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="xl">
          MedRec Tracker <FaUserMd />
        </Heading>
        <Button leftIcon={<FaPlus />} colorScheme="teal">
          Add New Record
        </Button>
      </Flex>

      <VStack spacing={4}>
        <Flex>
          <Input placeholder="Search Patient Records" mr={2} />
          <Button leftIcon={<FaSearch />} colorScheme="blue">
            Search
          </Button>
        </Flex>

        <Box borderWidth="1px" borderRadius="lg" p={5} width="100%">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="2xl">John Doe</Text>
            <Button leftIcon={<FaFileMedical />} colorScheme="purple">
              View Record
            </Button>
          </Flex>
          <Text mt={2}>DOB: 01/01/1990</Text>
          <Text>Last Visit: 12/12/2022</Text>
        </Box>

        <Box borderWidth="1px" borderRadius="lg" p={5} width="100%">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="2xl">Jane Smith</Text>
            <Button leftIcon={<FaFileMedical />} colorScheme="purple">
              View Record
            </Button>
          </Flex>
          <Text mt={2}>DOB: 02/02/1985</Text>
          <Text>Last Visit: 11/11/2022</Text>
        </Box>
      </VStack>

      <Image src="https://images.unsplash.com/photo-1599045118108-bf9954418b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVjb3Jkc3xlbnwwfHx8fDE3MTQyOTE5OTN8MA&ixlib=rb-4.0.3&q=80&w=1080" mt={10} />
    </Box>
  );
};

export default Index;
