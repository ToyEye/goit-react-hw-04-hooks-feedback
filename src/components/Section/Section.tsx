import React from 'react';

import s from './Section.module.css';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: Props) => (
  <section className={s.section}>
    <h1>{title}</h1>
    {children}
  </section>
);

export default Section;
