import { Box, HStack, Text, VStack, useTheme, Circle, Pressable, IPressableProps } from 'native-base';
import { ClockAfternoon, Hourglass, CheckCircle } from 'phosphor-react-native';

// HStack - componente um do lado do outro
export type OrderProps = {
    id: string;
    patrimony: string;
    when: string;
    status: 'open' | 'closed'
}

type Props = IPressableProps & {
    data: OrderProps;
}

export function Order({ data, ...rest }: Props) {
    const { colors } = useTheme();

    const statusColor = data.status === 'open' ? colors.blue[500] : colors.green[500]

    return (
        <Pressable {...rest}>
            <HStack
                bg="gray.200"
                mb={4}
                alignItems="center"
                justifyContent="space-between"
                rounded="sm"
                overflow="hidden"
            >

                <Box h="full" w={2} bg={statusColor} />

                <VStack flex={1} my={5} ml={5} >
                    <Text color="blue.700">
                        Patrimônio {data.patrimony}
                    </Text>

                    <HStack alignItems="center">
                        <ClockAfternoon size={15} color={colors.blue[700]} />
                        <Text color="blue.700" fontSize="xs" ml={1}>
                            {data.when}
                        </Text>
                    </HStack>
                </VStack>

                <Circle bg="gray.150" h={12} w={12} mr={5}>
                    {
                        data.status === 'closed'
                            ? <CheckCircle size={24} color={statusColor} />
                            : <Hourglass size={24} color={statusColor} />
                    }
                </Circle>

            </HStack >
        </Pressable>
    );
}