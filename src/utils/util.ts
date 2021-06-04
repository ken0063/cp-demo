const authTypes = {
  TEMPORARY: 'TEMPORARY',
  FIXED: 'FIXED',
};

export const authGetter = () => {
  const authCreds = JSON.parse(localStorage.getItem('Auth') || '{}');
  const defaultCreds = {
    authenticationType: 'unauthenticated',
    hasApiKey: false,
  };

  if (typeof authCreds === 'undefined' || authCreds == null) {
    return defaultCreds;
  }

  if (typeof authCreds.apiKey !== 'undefined' && authCreds.apiKey != null) {
    const isTempApiKey = authCreds.keyType === authTypes.TEMPORARY;

    return {
      ...authCreds,
      isTempApiKey,
      hasApiKey: true,
      authenticationType: isTempApiKey ? 'unauthenticated' : 'authenticated',
    };
  }

  return defaultCreds;
};
