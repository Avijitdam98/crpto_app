import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"#fff"}>
        <Link to="/">Home</Link>
      </Button>

      <Button variant={"unstyled"} color={"#fff"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>

      <Button variant={"unstyled"} color={"#fff"}>
        <Link to="/coins">Coins</Link>
      </Button>

      <Button variant={"unstyled"} color={"#fff"}>
        <Link to="/Coindetails">CoinDetails</Link>
      </Button>
    </HStack>
  );
};

export default Headers;
