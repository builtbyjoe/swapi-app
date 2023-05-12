import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/layout/Layout';

function App() {

    return (
        <ChakraProvider>
            <Layout />
        </ChakraProvider>   
    );
}

export default App;
