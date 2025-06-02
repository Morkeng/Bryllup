
import React from 'react';

function RSVP() {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Her kan du melde deg på bryllupet.</p>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdtQwUHJhjwg_nN6UNFokDn-PeVxJV5-6T9GQNN0AZTDMwz7g/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-block',
                    marginTop: '1rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#f4a261',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold'
                }}
            >
                Gå til påmeldingsskjema
            </a>
        </div>
    );
}

export default RSVP;
