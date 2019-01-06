import React from "react";

const ContactAction = ({email}) => (
    <section>
        <a href={`mailto:${email}`}>Get in touch</a>
    </section>
)

export default ContactAction;