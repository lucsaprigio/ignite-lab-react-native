import { useNavigation } from '@react-navigation/native';
import { HStack, Heading, IconButton, useTheme, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
    title: string;
}

export function Header({ title, ...rest }: Props) {
    const navigation = useNavigation();
    const { colors } = useTheme();

    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            pb={6}
            pt={12}
            bg="gray.150"
            {...rest}
        >
            <IconButton
                icon={<CaretLeft color={colors.blue[500]} size={24} />}
                onPress={handleGoBack}
            />

            <Heading color="blue.500" textAlign="center" fontSize="lg" flex={1} ml={-6}>
                {title}
            </Heading>
        </HStack>
    );
}