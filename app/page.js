"use client"
import Card from "@/components/Card";
import {Center,Container,Box,Heading} from "@chakra-ui/react";
export default function Home() {
  return (
    <Center h="100vh"> {/* Center the content vertically */}
    <Container maxW="xl"> {/* Use a Chakra UI Container */}
      <Box>
        <Card />
      </Box>
    </Container>
  </Center>
  );
}
