import { Text, Button, IButtonProps, useTheme } from 'native-base';

interface Props extends IButtonProps {
    title: string;
    isActive?: boolean;
    type: 'open' | 'closed';
}

export function Filter({ title, isActive = false, type, ...rest }: Props) {
    const { colors } = useTheme();

    const colorType = type === 'open' ? colors.blue[400] : colors.green[300]

    return (
        <Button
            variant="outline"
            borderWidth={isActive ? 1 : 0}
            borderColor={colorType}
            bgColor="blue.500"
            flex={1}
            size="sm"
            {...rest}
        >
            <Text color={isActive ? colorType : "blue.100"} fontSize="xs" textTransform="uppercase">
                {title}
            </Text>

        </Button >
    );
}