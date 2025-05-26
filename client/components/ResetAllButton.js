export default function ResetAllButton() {
    const handleReset = () => {
        // eslint-disable-next-line no-alert
        if (confirm('Вы уверены, что хотите сбросить все таймеры?')) {
            Object.keys(localStorage)
                .filter((key) => key.startsWith('timer_'))
                .forEach((key) => localStorage.removeItem(key));
            window.location.reload();
        }
    };

    return (
        <button onClick = { handleReset }>Сбросить все таймеры</button>
    );
}
