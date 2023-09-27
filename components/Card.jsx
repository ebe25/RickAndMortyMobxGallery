"use client";
import React from "react";
import {
  Center,
  Card,
  Container,
  Box,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Count from "@/components/Count";
import Comments from "@/components/Comments";
import Buttons from "@/components/Buttons";
import ImagePagination from "@/components/ImagePagination";

const ResponsiveImgCard = () => {
  console.log("Card");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      maxW={isLargerThan768 ? "960px" : "100%"}
      mx="auto"
      px={isLargerThan768 ? 6 : 4}
      py={4}>
      {/* Existing content */}
      <Center>
        {/* Center the content vertically */}
        <Container mt={20} maxW="container.xl">
          {/* Use a Chakra UI Container with padding */}
          <VStack spacing={2} align="center">
            {" "}
            {/* Vertical Stack with spacing */}
            <Card>
              {" "}
              {/* Add margin-top to the Card */}
              <ImagePagination />
              <Count />
              <Buttons />
              <Comments />
            </Card>
          </VStack>
        </Container>
      </Center>
    </Box>
  );
};

export default ResponsiveImgCard;
