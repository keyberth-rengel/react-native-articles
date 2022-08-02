import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

//navigator
import {Home} from './navigator';

//recoil
import {RecoilRoot} from 'recoil';
import {KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native';

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
    <SafeAreaView>
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView>
          <RecoilRoot>
            <Home />
          </RecoilRoot>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
