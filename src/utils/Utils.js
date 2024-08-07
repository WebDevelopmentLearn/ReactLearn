
export function formatDate(isoString, lang) {
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
    const formattedDate = date.toLocaleString(lang === "ru" ? 'ru-RU' : "en-EN", options);

    return formattedDate;
}