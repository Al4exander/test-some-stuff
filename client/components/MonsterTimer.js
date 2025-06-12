import { useEffect, useState, useRef } from 'react';

const TIMER_DURATION = 40 * 60 * 1000;

const TEN_MINUTES_TIMER = 10 * 60 * 1000;

function playTripleBeep() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const duration = 1.2;
    const pause = 0.4;

    for (let i = 0; i < 3; i++) {
        const startTime = ctx.currentTime + i * (duration + pause);
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = 600;
        gain.gain.setValueAtTime(0.1, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
    }
}

export default function MonsterTimer({ monster }) {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(Date.now());
    const hasPlayedSound = useRef(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(`timer_${monster.id}`);
            if (saved) {
                setStartTime(parseInt(saved, 10));
            }
        }
    }, [monster.id]);

    useEffect(() => {
        const interval = setInterval(() => setNow(Date.now()), 1000);

        return () => clearInterval(interval);
    }, []);

    const timeToUse = monster.id === 'shullacks_bosses_resp' ? TEN_MINUTES_TIMER : TIMER_DURATION;
    const remaining = startTime ? Math.floor((startTime + timeToUse - now) / 1000) : null;

    useEffect(() => {
        if (remaining === 0 && !hasPlayedSound.current) {
            playTripleBeep();
            hasPlayedSound.current = true;
        }
    }, [remaining]);

    const handleStart = () => {
        const time = Date.now();
        localStorage.setItem(`timer_${monster.id}`, time);
        setStartTime(time);
        hasPlayedSound.current = false;
    };

    const handleReset = () => {
        localStorage.removeItem(`timer_${monster.id}`);
        setStartTime(null);
        hasPlayedSound.current = false;
    };

    const formatTime = (sec) => {
        if (sec == null) return '';
        const isNegative = sec < 0;
        sec = Math.abs(sec);
        const m = Math.floor(sec / 60);
        const s = sec % 60;

        return `${isNegative ? '-' : ''}${m}:${s.toString().padStart(2, '0')}`;
    };

    const getColor = () => {
        if (remaining == null) return '#fff';

        return remaining < 0 ? 'red' : 'lime';
    };

    return (
        <div
            style = { {
                position:     'absolute',
                top:          monster.y,
                left:         monster.x,
                background:   'rgba(0,0,0,0.7)',
                padding:      '6px 10px',
                borderRadius: '6px',
                color:        '#fff',
                textAlign:    'center',
                fontSize:     '14px',
                transform:    'translate(-50%, -50%)',
                userSelect:   'none',
                cursor:       'pointer',
            } }
            onClick = { () => {
                if (!startTime) handleStart();
            } }>
            <div style = { { fontWeight: 'bold', marginBottom: '2px' } }>{ monster.name }</div>

            { startTime && (
                <>
                    <div style = { { color: getColor(), fontSize: '16px' } }>{ formatTime(remaining) }</div>
                    <button onClick = { handleReset } style = { { marginTop: '4px', fontSize: '12px' } }>Сбросить</button>
                </>
            ) }
        </div>
    );
}

