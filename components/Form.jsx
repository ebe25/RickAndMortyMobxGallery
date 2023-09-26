"use client";
import React, {useRef, useEffect, useState} from "react";

import {Center, Card, CardBody, Input, Button} from "@chakra-ui/react";

import store from "@/store/Store";
import {observer} from "mobx-react-lite";

const Form = observer(({commentClicked, setCommentClicked}) => {
  const commentInputRef = useRef(null);
  const [commentContent, setCommentContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentContent) {
      store.postComment(commentContent);
      setCommentContent("");
    }
  };

  const handleFormSubmit = () => {
    if (commentContent) {
      store.postComment(commentContent);
      setCommentContent("");
    }
  };

  useEffect(() => {
    if (commentInputRef.current && commentClicked) {
      commentInputRef.current.focus();
      handleFormSubmit();
      setCommentClicked(false);
    }
  }, [commentClicked]);

  console.log("Form");
  return (
    <form onSubmit={handleSubmit}>
      <Center >
        <Card maxW="md" >
          <CardBody>
            <Input
            flex="1"
            size={"md"}
              variant={"filled"}
              placeholder="Enter a comment"
              ref={commentInputRef}
              onChange={(e)=>{setCommentContent(e.target.value)}}
              value={commentContent}
            />
          </CardBody>
        </Card>
      </Center>
    </form>
  );
});
export default Form;
