import React, { useState } from 'react';
import axios from 'axios';

const LinkForm: React.FC = () => {
    const [url, setUrl] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/links', { url });
            setUrl('');
        } catch (error) {
            console.error('Error posting link:', error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default LinkForm;
