# monblan-react

React-версія проєкту **monblanproject**, перенесена з `monblan-vanilla/` зі збереженням pixel-perfect верстки та BEM-класів.

## Стек

- [Vite](https://vitejs.dev/) + React (JavaScript)
- [Sass](https://sass-lang.com/) — стилі з оригінального `scss/main.scss`
- [air-datepicker](https://air-datepicker.com/) — календар у полях дат (React-обгортка через `useRef` / `useEffect`)

> **Примітка:** npm-пакет `air-datepicker-react` не існує в реєстрі npm. Використовується офіційний `air-datepicker` з React-компонентом `DateField.jsx`, що повторює поведінку ванільної версії.

## Структура проєкту

```
monblan-react/
├── public/
│   └── assets/images/     # image_1.png … image_8.png, decor_1.png, decor_2.png
├── src/
│   ├── assets/
│   │   ├── icons/         # SVG-іконки
│   │   └── images/        # logo.svg
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Catalog.jsx
│   │   ├── DateField.jsx
│   │   └── Header.jsx
│   ├── data/
│   │   └── mockData.js    # 24 об'єкти каталогу
│   ├── styles/
│   │   ├── main.scss
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _reset.scss
│   │   └── blocks/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Локальний запуск

```bash
cd monblan-react
npm install
npm run dev
```

Відкрийте адресу, яку покаже Vite (зазвичай `http://localhost:5173`).

## Збірка

```bash
npm run build
npm run preview
```

## Деплой на Vercel

### Варіант 1 — через CLI

```bash
npm install -g vercel
cd monblan-react
vercel
```

Для продакшн-деплою:

```bash
vercel --prod
```

### Варіант 2 — через GitHub

1. Запуште репозиторій на GitHub.
2. У [vercel.com](https://vercel.com) натисніть **Add New Project**.
3. Оберіть репозиторій, вкажіть **Root Directory**: `monblan-react`.
4. Налаштування за замовчуванням для Vite:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Натисніть **Deploy**.

## Ассети

Скопіюйте зображення карток (`image_1.png` … `image_8.png`) та декор (`decor_1.png`, `decor_2.png`) у `public/assets/images/`, якщо вони ще не додані — шляхи в `mockData.js` та SCSS відповідають оригінальній ванільній версії.
