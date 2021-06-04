import { config } from '../utils/config';

const useClientId = () => {
  const stagingConfig = JSON.parse(localStorage.getItem('cp_config') || '{}');

  if (
    (config.web.app_env === 'development' ||
      config.web.app_env === 'staging') &&
    stagingConfig
  ) {
    return stagingConfig.client_id;
  }

  return config.client.client_id;
};

export default useClientId;
