# Теоретичні відомості
Для початку необхідно визначити що таке **React.js**. За офіційним визначенням React.js – це JavaScript бібліотека для побудови (User Interface) інтерфейсу користувача. Створила цю бібліотеку та продовжує розвивати та підтримувати її - компанія **Facebook**.

React використовується для створення відображення (view). Насправді ж веб додаток котрий побудований на React містить багато різних бібліотек для коректної роботи з даними, сервером, UI і так далі, навіть сам React це сукупність бібліотек (React, ReactDOM, PropTypes …).

Для створення React додатку будуть використані наступні бібліотеки:

- **react** ([детальніше](https://reactjs.org/)), **react-dom** ([детальніше](https://reactjs.org/docs/react-dom.html)) , **prop-types** ([детальніше](https://reactjs.org/docs/typechecking-with-proptypes.html))

- **redux** ([детальніше](https://redux.js.org/)), **react-redux** ([детальніше](https://redux.js.org/docs/faq/ReactRedux.html)), **redux-thunk** ([детальніше](https://www.npmjs.com/package/redux-thunk))

- **react-router-dom** ([детальніше](https://reacttraining.com/react-router/))

- **react-bootstrap** ([детальніше](https://react-bootstrap.github.io/))

- **isomorphic-fetch** ([детальніше](https://github.com/matthew-andrews/isomorphic-fetch)) , **babel-polyfill** ([детальніше](https://babeljs.io/docs/usage/polyfill/))

- **redux-devtools** ([детальніше](https://github.com/gaearon/redux-devtools)) , **redux-devtools-dock-monitor**, **redux-devtools-log-monitor**

# Створення простого додатку
Найпростіше створити React додаток можна за допомогою бібліотеки **create-react-app** котра у свою чергу створює уже за нас усю структуру React додатку та налаштовує усі його конфігурації. Тому скористаємося нею.

Для початку встановимо **create-react-app** за допомогою **npm**:

`npm install -g create-react-app`

Гаразд, після встановлення спробуймо створити свій перший додаток на React. Виконаємо команду **create-react-app nameApp** де nameApp - назва додатку:

`create-react-app reactapp`

Після того як create-react-app встановив усі залежності та згенерував структуру нашого додатку можемо спробувати запустити його. Для цього перейдемо у директорію з нашим додатком `cd reactapp` та виконаємо наступну команду щоб запустити додаток:

`npm start`

Після цього у браузері відкриється наш веб додаток.

# Створення повноцінного React додатку
Звісно це чудово що ми створили такий додаток але це тільки початок. Тому продовжимо.

## Залежності
## Компоненти
З використанням React ми можемо створювати компоненти з яких формується уся наша сторінка.
## Redux архітектура
Оскільки сама бібліотека React відповідає тільки за відображення на сторнці нам необхідно користуватися ще й іншими JS бібліотеками для того щоб змусити сторінку щось робити.

Для роботи з цими компонентами призначена відповідна 
