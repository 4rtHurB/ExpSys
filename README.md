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
Встановимо наступні залежності для додатку:

- **Bootstrap** (react-bootstrap) для роботи з bootstrap

- **Redux** (redux, react-redux, redux-thunk) для роботи з redux

- **Fetch** (isomorphic-fetch) для комунікації з сервером

- **Devtools** (redux-devtools, redux-devtools-dock-monitor, redux-devtools-log-monitor)

Усі ці залежності встановимо за допомогою npm команд:

`npm install --save redux react-redux redux-thunk react-bootstrap isomorphic-fetch babel-polyfill`

`npm install --save-dev redux-devtools redux-devtools-dock-monitor redux-devtools-log-monitor`
## JSX
Як ми звикли звикли писати HTML сторінки та JS файли? Зазвичай у нас був якийсь HTML файл у котрому містилася уся розмітка сторінки а також був JS файл у котрому ми виконували різні дії над DOM нашої HTML сторінки. Ми підключали JS файл до HTML сторінки та викликали функції, обробники подій... 

Розробники Facebook пішли далі і створили розширений синтаксис для JS котрий називається JSX ([детальніше](https://jsx.github.io/)). Тепер за допомогою JSX ми можемо писати HTML теги у JS та багато чого іншого. Тобто наступний вираз не викличе ніякого здивування та помилок:

```jsx
function menu() {
  let items = [
    'Do Something', 
    'Do Something Fun!', 
    'Do Something Else'
  ];
  
  return( 
    <div>
      <h2>A simple list</h2>
      <ul>
        <li>{ items[0] }</li>
        <li>{ items[1] }</li>
        <li>{ items[2] }</li>
      </ul>
    </div>
  );
}
```
Добре а що ж тоді робити з CSS стилями, картинками і таким подібним? JSX і для цього пристосований. Усі стилі та картинки ми можемо підключати до JSX файлів. Простий вираз 
```jsx 
import style from '../styles/index.css';
```
допоможе нам підключити усі наші стилі та картинки.

## Компоненти
Все в React - це компоненти, і вони зазвичай приймають форму класів JavaScript. Ви створюєте компонент, наслідуючи його від React.Component. Розглянемо компонент Hello:
```
class Hello extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}
```
Усередині класу описуються методи коппонента. У нашому прикладі ми маємо лише один метод, який називається render(), він відповідає за промальовку сторінки. У вищенаведеному випадку ми просто хочемо, щоб він відображав тег h1 з текстом Hello world! всередині нього.

## Redux архітектура
Оскільки сама бібліотека React відповідає тільки за відображення на сторнці нам необхідно користуватися ще й іншими JS бібліотеками для того щоб змусити сторінку щось робити.

Для роботи з цими компонентами призначена відповідна 
