"use client";
import React from "react";
import {Center, Card, Container, Box, Heading, VStack, Text} from "@chakra-ui/react";


import Count from "@/components/Count";
import Comments from "@/components/Comments";
import Buttons from "@/components/Buttons";
import ImagePagination from "@/components/ImagePagination";
const ImgCard = () => {
  console.log("Card");
  return (
    <Center>
      {/* Center the content vertically */}
      <Container  mt={20} maxW="container.xl">

        {/* Use a Chakra UI Container with padding */}
        <VStack spacing={2} align="center"> {/* Vertical Stack with spacing */}
          <Card > {/* Add margin-top to the Card */}
            <ImagePagination />
            <Count />
            <Buttons />
            <Comments />
          </Card>
        </VStack>
      </Container>
    </Center>
  );
};

export default ImgCard;
