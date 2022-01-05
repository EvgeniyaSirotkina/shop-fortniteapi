import Header from './cmponents/Header';
import Footer from './cmponents/Footer';
import Shop from './cmponents/Shop';
import { ContextProvider } from './context';

const App = () => {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
