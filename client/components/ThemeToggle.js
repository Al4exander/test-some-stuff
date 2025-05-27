import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved) {
            setTheme(saved);
            document.body.className = `theme-${saved}`;
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.className = `theme-${newTheme}`;
    };

    return (
        <button onClick = { toggleTheme } style = { { marginTop: '20px' } }>
            Переключить тему
        </button>
    );
}
