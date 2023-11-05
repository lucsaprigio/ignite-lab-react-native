import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HStack, VStack, Image, IconButton, useTheme, Text, Heading, FlatList, Center } from 'native-base';
import { SignOut, ChatTeardropText } from 'phosphor-react-native';

import Logo from '../assets/logo.png';

import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';

export function Home() {
    const { colors } = useTheme();
    const navigation = useNavigation();

    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
    const [orders, setOrders] = useState<OrderProps[]>([
        {
            id: '123',
            patrimony: '123456',
            when: '04/11/2023',
            status: 'open'
        }
    ]);

    function handleNewOrder() {
        navigation.navigate('new');
    }

    function handleOpenDetails(orderId: string) {
        navigation.navigate('details', { orderId });
    }

    return (
        <VStack flex={1} pb={6} bg="gray.100">
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.200"
                pt={12}
                pb={5}
                px={6}
            >
                <Image
                    source={Logo}
                    size={150}
                    alt="Logo da Speed"
                    mt={-28}
                    mb={-42}
                />

                <IconButton
                    icon={<SignOut size={26} color={colors.blue[500]} />}
                />

            </HStack>

            <VStack flex={1} px={6}>
                <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                    <Heading color="blue.500">
                        Solicitações
                    </Heading>
                    <Text color="blue.500">
                        {orders.length}
                    </Text>
                </HStack>

                <HStack space={3} mb={8}>
                    <Filter
                        type="open"
                        title='em andamento'
                        onPress={() => setStatusSelected('open')}
                        isActive={statusSelected === 'open'}
                    />

                    <Filter
                        type="closed"
                        title='finalizados'
                        onPress={() => setStatusSelected('closed')}
                        isActive={statusSelected === 'closed'}
                    />
                </HStack>

                <FlatList
                    data={orders}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Order data={item} onPress={() => handleOpenDetails(item.id)} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    ListEmptyComponent={() => (
                        <Center>
                            <ChatTeardropText color={colors.blue[700]} size={40} />
                            <Text color="blue.700" fontSize="xl" mt={6} textAlign="center">
                                Você ainda não possui {'\n'}
                                solicitações {statusSelected === "open" ? 'em andamento' : 'finalizadas'}
                            </Text>
                        </Center>
                    )}
                />

                <Button title="Nova Solicitação" onPress={handleNewOrder} />
            </VStack>
        </VStack>
    );
}