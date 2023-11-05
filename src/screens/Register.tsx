import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
    return (
        <>
            <Header
                title='Nova solicitação'
            />
            <VStack flex={1} p={6} bg="background">

                <Input
                    placeholder="Número do patrimônio"
                    mt={4}
                />
                <Input
                    placeholder="Descrição do problema"
                    flex={1}
                    mt={5}
                    multiline
                    textAlignVertical="top"
                />

                <Button
                    title='Solicitar'
                    mt={5}
                />
            </VStack>
        </>
    );
}