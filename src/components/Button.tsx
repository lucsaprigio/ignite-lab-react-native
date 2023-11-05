import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';


type Props = IButtonProps & {
  title: string;
}
export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg="secondary.700"
      h={14}
      fontSize="sm"
      _pressed={{ opacity: 60 }}
      {...rest}

    >
      <Heading
        color="gray.100"
        fontSize="sm"
      >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}