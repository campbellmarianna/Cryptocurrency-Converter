import {
  CHANGE_CURRENCY_AMOUNT, CHANGE_BASE_CURRENCY, CHANGE_QUOTE_CURRENCY,
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'BIT',
  quoteCurrency: 'USD',
  amount: 100,
  conversions: {
    BIT: {
      isFetching: false,
      base: 'USD',
      date: '2019-10-18',
      rates: {
        USD: 7915.24,
      },
    },
    ETH: {
      isFetching: false,
      base: 'USD',
      date: '2019-10-18',
      rates: {
        USD: 172.33,
      },
    },
    XRP: {
      isFetching: false,
      base: 'USD',
      date: '2019-10-18',
      rates: {
        USD: 0.290269,
      },
    },
    BCH: {
      isFetching: false,
      base: 'USD',
      date: '2019-10-18',
      rates: {
        USD: 211.78,
      },
    },
  },
};

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }

  return {
    ...state.conversions,
    [action.currency]: conversion,
  };
};

// takes in inital state , as each action is called and it will modify the state and once it is done it will have most recent state
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return { ...state, amount: action.amount || 0 };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action),
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversions(state, action),
      };
    default:
      return state;
  }
};