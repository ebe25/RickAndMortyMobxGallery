"use client";
import React from "react";

import {
  Center,
  Card,
  CardBody,
  Text,
  Box,
  Stack,
  HStack,
} from "@chakra-ui/react";
import store from "@/store/Store";
import { getSnapshot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
const Comments = observer(() => {
  console.log("Comments");
  
  // console.log(getSnapshot(store))
  return (

      <Card maxW="sm">
        <CardBody>
          <Box>
            <Stack>
              {store.comments.map((comment, index) => {
                return (
                  <HStack align="center" key={index}>
                    <Text>{comment}</Text>
                  </HStack>
                );
              })}
            </Stack>
          </Box>
        </CardBody>
      </Card>

  );
})
export default Comments;
