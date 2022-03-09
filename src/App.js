import './App.css';
import { ToopMenu } from './components';
import { Footer, Hero, SignUp, DiscoverNft, CollectionNft, CollectionOver, AmazeNft  } from './container';

function App() {
  return (
    <div>
        <ToopMenu/>
        <Hero/>
        <AmazeNft/>
        <CollectionOver/>
        <CollectionNft/>
        <SignUp/>
        <DiscoverNft/>
        <Footer/>
    </div>
  );
}

export default App;
