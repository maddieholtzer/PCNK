import {Provider} from 'react-redux';
import configureStore from './configureStore';
import {registerScreens, registerScreenVisibilityListener} from '../screens';

export const init = async (): Promise<AppStore> => {
  const provider: AppProvider = (Provider: any);
  const store: AppStore = configureStore();

  const allResolved: [
    AppStore,
    boolean,
    { [string]: string }
  ] = await Promise.all([store, registerScreens(store, provider), registerScreenVisibilityListener()]);

  return allResolved[0];
};
