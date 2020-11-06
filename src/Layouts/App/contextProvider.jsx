import React from 'react';

/**
 * My custom context
 */

import AppContextProvider from '../../Context/app';
import { WindowSizeContextProvider } from '../../Context/useWindowSize';

const contextProviders = [AppContextProvider, WindowSizeContextProvider];

const ContextProvider = ({ children }) =>
  contextProviders.reduceRight(
    (memo, ContextProvider) => <ContextProvider>{memo}</ContextProvider>,
    children
  );

export default ContextProvider;
