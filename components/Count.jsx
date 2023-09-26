"use client";
import React from "react";
import {Flex, Text} from "@chakra-ui/react";
/** Render here the state of likes and no of comments using mobx 
        likes blue button left side and comments right side with their count
    */

import store from "@/store/Store";
import {observer} from "mobx-react-lite";
const Count = observer(() => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} marginY={"4"}>
      <Text fontWeight="bold">{store.likesCount} Likes</Text>
      <Text fontWeight="bold">{store.commentsCount} Comments</Text>
    </Flex>
  );
});

export default Count;
