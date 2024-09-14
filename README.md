# React Домашнее задание 22
#### Создание приложения для получения случайных цитат:


### 1. Создание нового React-приложения
#### Создайте новое React-приложение.
#### Установите Redux Toolkit, React Redux и Axios, выполнив команду:
`npm install @reduxjs/toolkit react-redux redux axios`.


### 2. Настройка структуры проекта
#### В папке `src` создайте папку `features`. В этой папке будут храниться все срезы состояния (slices).
#### Внутри папки `features` создайте папку `quote`. В этой папке будет храниться срез состояния для цитат.


### 3. Создание среза состояния для цитат
#### В папке `quote` создайте файл `quoteSlice.js`:
- Определите начальное состояние, которое будет содержать текущую цитату, автора, статус загрузки и ошибки.
- Используйте функцию `createAsyncThunk` из Redux Toolkit для создания асинхронного действия (thunk), которое будет отправлять запрос к Quotes REST API для получения случайной цитаты (https://api.quotable.io/random).
- Создайте срез состояния с помощью `createSlice` из Redux Toolkit, определяя в нем обработчики для асинхронного действия, чтобы обновлять состояние в зависимости от статуса запроса (в процессе загрузки, успешно выполнен, произошла ошибка).


### 4. Настройка Redux Store
#### В корне папки `src` создайте файл `store.js`.
#### ОСконфигурируйте Redux Store с использованием `configureStore` из Redux Toolkit и подключите созданный срез состояния для цитат.


### 5. Настройка провайдера Redux
#### В файле `index.js` импортируйте `Provider` из `react-redux` и подключите Redux Store к приложению, обернув компонент `App` в `Provider`.


### 6. Создание компонентов
#### Создайте компонент для отображения цитат:
- В папке `src/components` создайте файл `Quote.js`.
- В этом компоненте используйте `useDispatch` и `useSelector` из `react-redux` для отправки асинхронного действия и доступа к состоянию.
- При первом рендере компонента выполните запрос для получения случайной цитаты с помощью `useEffect`.
- Создайте функцию-обработчик для загрузки новой цитаты при нажатии на кнопку.

#### Создайте главный компонент приложения:
- В папке `src` создайте файл `App.js`.
- В этом компоненте отобразите заголовок и компонент `Quote`.

### 7. Стилизация приложения *
#### Создайте файлы стилей для компонентов:
- Используйте CSS-модули для стилизации компонентов. Создайте файлы стилей с расширением `.module.css` для каждого компонента (например, `Quote.module.css`).
- Определите стили для элементов внутри этих файлов.

#### Примените стили в компонентах:
- Импортируйте созданные стили в компоненты и примените их к элементам, используя объект стилей.


![hw22](hw22_example.png)

