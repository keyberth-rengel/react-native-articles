import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

//navigator
import {Home} from './navigator';

//recoil
import {RecoilRoot} from 'recoil';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
};

export default App;
