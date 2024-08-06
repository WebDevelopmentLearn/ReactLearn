
export function formatDate(isoString) {
    const date = new Date(isoString);

    // Опции для локализации даты
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Moscow', // Используем нужный часовой пояс
        hour12: false
    };

    // Форматирование даты в локализованный формат
    const formattedDate = date.toLocaleString('ru-RU', options);

    return formattedDate;
}