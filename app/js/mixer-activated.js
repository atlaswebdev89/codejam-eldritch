// Функция для активации кнопки Замешивания колоды в случае выбора Древнего и уровня игры
export const checkSelect = () => {
    // Кнопка замешивания
    const mixerButton = document.querySelector('.mixer');
    // Активируем кнопку только после выбора древнего и уровня сложности
    // Кнопки
    const buttons = [...document.querySelectorAll('.button')];
    // Иконки древних
    const itemsAncietns = [...document.querySelectorAll('.ancients-item')];

    const activeButton = buttons.filter((value) => {
        if (value.classList.contains('active-level')) {
            return value;
        }
    });

    const activeAncients = itemsAncietns.filter((value) => {
        if (value.classList.contains('ancient-active')) {
            return value;
        }
    });
    if (activeButton.length === activeAncients.length && activeButton.length > 0) {
        mixerButton.classList.add('button');
        // Включаем кнопку
        mixerButton. disabled = false
    }
} 
