import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.200"
      h={14}
      size="md"
      fontSize="md"
      fontFamily="body"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: "secondary.700",
        backgroundColor: "gray.100"
      }}
      {...rest}
    />
  );
}