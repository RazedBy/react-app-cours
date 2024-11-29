// NotificationService.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './notification.css'

const NotificationService = {
  success: (message : any) => {
    toast.success(message, { position: 'top-right' });
  },
  error: (message : any) => {
    toast.error(message, { position: 'top-right' });
  },
  info: (message : any) => {
    toast.info(message, { position: 'top-right' });
  },
  warn: (message : any) => {
    toast.warn(message, { position: 'top-right' });
  }
};

export default NotificationService;