import { useState } from 'react';
import { Heading, VStack, Image, Icon, useTheme } from "native-base";
import { Envelope, Key } from 'phosphor-react-native'

import Logo from "../assets/logo.png";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  const { colors } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <VStack flex={1} alignItems="center" bg="gray.100" px={8} pt={24}>
        <Image source={Logo} alt="Logo" width={250} height={250} mb={-5} mt={-20} />

        <Heading color="gray.600" fontSize="xl" mb={6}>
          Acessse sua conta
        </Heading>

        <Input
          placeholder="E-mail"
          mb={4}
          InputLeftElement={<Icon as={<Envelope color={colors.blue[700]} />} ml={4} />}
          value={email}
          onChangeText={setEmail}
          type='text'
        />
        <Input
          placeholder="Senha"
          mb={8}
          InputLeftElement={<Icon as={<Key color={colors.blue[700]} />} ml={4} />}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title="Entrar"
          w="full"
        />
      </VStack>
    </>
  )
}