import React from 'react';
import s from './Container.module.css';

type Prop = {
  children: React.ReactNode;
};

function Container({ children }: Prop) {
  return <div className={s.container}>{children}</div>;
}

export default Container;
