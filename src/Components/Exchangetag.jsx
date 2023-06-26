import React from "react";
import { VStack, Image, Heading, Text } from "@chakra-ui/react";

const Exchangetag = ({ name, img, rank, url }) => {
  return (
    <a href={url} target="blank">
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 03s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image src={img} h={"10"} objectFit={"contain"} alt="exchange" />
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
};

export default Exchangetag;
