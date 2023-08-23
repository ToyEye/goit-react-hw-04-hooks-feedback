import s from './Notification.module.css';

type Prop = {
  message: string;
};

const Notification = ({ message }: Prop) => <h2 className={s.notification}>{message}</h2>;

export default Notification;
