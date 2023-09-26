"use client";
import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";
import {Flex, Box, Button, Image, Center} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";
import imageStore from "@/store/ImageStore";

const ImagePagination = observer(() => {
  console.log("Image Pagination");
  return (
    
    <Box bgColor="gray" p={4} borderRadius="md" boxShadow="md" mt={4}>
      <Center>
        <Flex justifyContent="center" alignItems="center">
          <Button
            variant="ghost"
            onClick={() => {
              imageStore.prevImage();
            }}
            leftIcon={<ArrowLeftIcon />}
          ></Button>

          {imageStore.loadImage && (
            <Image src="/assets/loader.gif" alt="loading" maxH="300px" />
          )}

          {!imageStore.loadImage && (
            <Image
              src={imageStore.imageUrl}
              alt="random character"
              objectFit="contain"
              borderRadius="md"
              boxShadow="lg"
              maxH="300px"
            />
          )}

          <Button
            variant="ghost"
            onClick={() => {
              imageStore.nextImage();
            }}
            rightIcon={<ArrowRightIcon />}
          ></Button>
        </Flex>
      </Center>
    </Box>
  );
});

export default ImagePagination;
