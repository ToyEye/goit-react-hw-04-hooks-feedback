import React from "react";
import PropTypes from 'prop-types';
import s from "./Section.module.css";

const Section = ({title , children }) => (
    <section className={s.section}>
        <h1>{title}</h1>
        {children}
    </section>
)

Section.prototype = {
    title: PropTypes.string,
}

export default Section;