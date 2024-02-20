import { StatusBar } from 'react-native';
import { Home } from './src/screen/Home';

export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor='#1f1e25'
        barStyle='light-content'
        //translucent={false} Nao fez diferenca
      />
      <Home/>
    </>
  );
}