import Commerce from "@chec/commerce.js"


export const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-09-29',
    },
  },
};

export const commerce =  new Commerce(
    'pk_49637a18b4d538f5ac24a191e3654d1fc01577f9c7585',true
);
