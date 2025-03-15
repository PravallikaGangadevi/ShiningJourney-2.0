import './Contact.css';

import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
            <div className="contact-card">
                <h2><b>📬Get in Touch!</b></h2>
                <p> I'm always excited to connect with readers, fellow professionals, and anyone interested in my work. 💌Whether you have a question, a suggestion, want to collaborate or just want to say hi, I’m all ears👂</p>
                <h3>📧Email Me</h3>
                <p>Email: shiny.gangadevi25@gmail.com </p>
                <p>⌛ I usually respond within a day or two!</p>
                <h3>🔗Connect on LinkedIn</h3>
                <p>Find me on LinkedIn: <a href = "https://www.linkedin.com/in/lakshmi-pravallika-gangadevi-775814259/" target="_blank" rel="noopener noreferrer">Pravallika Gangadevi</a></p>
                <p> Don’t be shy, I’d love to hear from you!🎉</p>
            </div>
        </div>
    );
}

export default Contact;
