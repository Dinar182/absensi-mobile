import { showMessage } from 'react-native-flash-message';

const MessageUtil = {
  showSuccess: (description, message) => {
    showMessage({
      message: description,
      description: message,
      type: 'success',
      color: '#FFFFFF',
      icon: 'success',
    });
  },

  errorMessage: (description, message) => {
    showMessage({
      message: description,
      description: message,
      type: 'danger',
      color: '#FFFFFF',
      icon: 'danger',
    });
  },
  warningMessage: (description, message) => {
    showMessage({
      message: description,
      description: message,
      type: 'warning',
      color: '#FFFFFF',
      icon: 'warning',
    });
  },
};

export { MessageUtil };
