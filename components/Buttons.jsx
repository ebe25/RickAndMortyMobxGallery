"use client";
import React, {useState} from "react";
import {CardFooter, Button} from "@chakra-ui/react";
import {BiLike, BiChat} from "react-icons/bi";
import store from "@/store/Store";
import Form from "@/components/Form";
import {observer} from "mobx-react-lite";

const handleLike = () => {
  store.updateCount();
};


const Buttons = observer(() => {
  const [commentClicked, setCommentClicked] = useState(false);
  return (
    <CardFooter
      justify="space-between"
      flexWrap="wrap"
      sx={{
        "& > button": {
          minW: "136px",
        },
      }}>
      <Button
        variant="ghost"
        leftIcon={<BiLike />}
        onClick={handleLike}>
        Like
      </Button>
      <Button
       
        variant="ghost"
        leftIcon={<BiChat />}
        onClick={()=>{setCommentClicked(!commentClicked)}}>
        Comment
      </Button>
      <Form commentClicked={commentClicked} setCommentClicked={setCommentClicked} />
    </CardFooter>
  );
});

export default Buttons;
