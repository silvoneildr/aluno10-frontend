export const getMessages = locale => {
  return () => {
    switch (locale) {
      case 'en-US':
        return 'English';
      case 'pt-BR':
        return 'Português';
      default:
        return '';
    }
  };
};
