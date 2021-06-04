const getClientId = () => {
  const hostname = window.location.hostname.toLowerCase();

  if (hostname.includes('kwikpay.originate.local')) {
    return 'cjww48x2b0yu0084243ybktlj';
  }

  return process.env.REACT_APP_CLIENT_ID;
};

export const config = {
  web: {
    port: process.env.WEB_PORT || 80,
    app_env: process.env.REACT_APP_ENV,
    node_env: process.env.NODE_ENV,
    mode: process.env.REACT_APP_MODE_ENV,
  },
  client: {
    client_id: getClientId(),
    interest_rate: process.env.REACT_APP_CLIENT_INTEREST_RATE,
    facebook_app_id: process.env.REACT_APP_CLIENT_FACEBOOK_APP_ID,
    minimum_loan_duration: process.env.REACT_APP_CLIENT_MINIMUM_LOAN_DURATION,
    requirements_popup: process.env.REACT_APP_CLIENT_REQUIREMENT_POPUP,
  },
};
