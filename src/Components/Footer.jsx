import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const avatarSrc = "../assets/Avijit Dam Photo.jpg";

const Footer = () => {
  return (
    <Box
      bgColor="blackAlpha.900"
      color="whiteAlpha.700"
      minH={48}
      px={16}
      py={[16, 8]}
    >
      <Stack direction={["column", "row"]} h="full" alignItems="center">
        <VStack w="full" alignItems={["center", "flex-start"]}>
          <Text fontWeight="bold" fontSize="lg">
            About Us
          </Text>
          <Text fontSize="sm" textAlign={["center", "left"]} lineHeight="taller">
            We are the best crypto trading app in India, providing affordable and reliable guidance.
          </Text>
        </VStack>

        <VStack
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          alignItems="center"
          mt={["4", "0"]}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Avatar boxSize={28} src={avatarSrc} />
          </motion.div>
          <Text fontWeight="bold" fontSize="lg">
            Our Founder
          </Text>
          <Text
            fontWeight="bold"
            fontSize="xl"
            color="purple.500"
            textTransform="uppercase"
            letterSpacing="tight"
          >
            Avijit Dam
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
