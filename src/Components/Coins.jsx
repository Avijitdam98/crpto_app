import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import {
  Button,
  Container,
  HStack,
  Radio,
  RadioGroup,
  SlideFade,
} from "@chakra-ui/react";
import Loader from "./Loader";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <Container maxW="container.xl">
      {loading ? (
        <Loader />
      ) : (
        <SlideFade in={true} offsetY="20px">
          <>
            <RadioGroup value={currency} onChange={setCurrency} p={4}>
              <HStack spacing={4}>
                <Radio value="inr">INR</Radio>
                <Radio value="usd">USD</Radio>
                <Radio value="eur">EUR</Radio>
              </HStack>
            </RadioGroup>

            <HStack
              wrap="wrap"
              justifyContent="space-evenly"
              spacing={4}
              mt={6}
            >
              {coins.map((coin) => (
                <CoinCard
                  key={coin.id}
                  id={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  img={coin.image}
                  symbol={coin.symbol}
                  currencySymbol={currencySymbol}
                />
              ))}
            </HStack>

            <HStack w="full" overflowX="auto" p={4} mt={6}>
              {btns.map((_, index) => (
                <Button
                  key={index}
                  bgColor="teal.500"
                  color="white"
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
            </HStack>
          </>
        </SlideFade>
      )}
    </Container>
  );
};

export default Coins;
