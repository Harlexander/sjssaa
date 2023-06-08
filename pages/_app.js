import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css'
import { UserProvider } from '../lib/user';

function MyApp({ Component, pageProps }) {

  // const getLayout = Component.getLayout || ((page) => page);

  const queryClient = new QueryClient();


  return(    
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <Component {...pageProps} />    
          </UserProvider>
        </QueryClientProvider> 
    )
}

export default MyApp
