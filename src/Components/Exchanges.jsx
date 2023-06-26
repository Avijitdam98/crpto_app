import React, { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../main";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import Exchangetag from "./Exchangetag";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader /> : null}
      <HStack wrap={"wrap"}>
        {exchanges.map((exchange) => (
          <Exchangetag
            key={exchange.id}
            name={exchange.name}
            img={exchange.image}
            rank={exchange.trust_score_rank}
            url={exchange.url}
          />
        ))}
      </HStack>
    </Container>
  );
};

export default Exchanges;
