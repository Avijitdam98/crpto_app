import { Box, Image, Text, Heading } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      bg="gray.900"
      w="100%"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py={20}
    >
      <motion.div
        style={{
          height: "80%",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w="100%"
          h="100%"
          objectFit="contain"
          src={btcSrc}
          filter="grayscale(1)"
        />
      </motion.div>

      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "6xl" }}
        textAlign="center"
        fontWeight="bold"
        color="white"
        mt={-10}
        textShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
      >
        Damcrypto
      </Heading>

      <Text
        fontSize={{ base: "md", md: "lg" }}
        textAlign="center"
        color="whiteAlpha.800"
        mt={4}
      >
        Your go-to source for cryptocurrency information
      </Text>
    </Box>
  );
};

export default Home;
