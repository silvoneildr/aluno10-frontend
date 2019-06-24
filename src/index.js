import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import { flattenMessages } from './utils';
import messages from './utils/messages';

import App from './App';

addLocaleData([...en, ...pt]);
const params = new URLSearchParams(document.location.search.substring(1));
const locale = params.get('lang') || 'en-US';

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
