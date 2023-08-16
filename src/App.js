import React from 'react';
import { Box, Flex, Heading, Button, Input, Image } from '@chakra-ui/react';

function App() {
  return (
    <Flex
      align="center"
      justify="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <Heading size="lg" mb={4}>
        Pro talento-cohorte#18 🐱‍🚀😎
      </Heading>
      <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" mb={4} />

      <Input placeholder="Ingresa tu nombre" size="md" mb={2} />
      <Button colorScheme="teal">¡Saludar!</Button>
    </Flex>
  );
}

export default App;
