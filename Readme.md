# Product Store

This is a store project where users can buy products. There are two pages: the homepage and the cart page. Users can filter products and order them using the cart page.

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

## Usage

To start the development server, run the following command:

```bash
npm run dev
```

The homepage can be accessed at `http://localhost:3000/` and the cart page can be accessed at `http://localhost:3000/cart`.

To start the production server, run the following command:

```bash
npm run build && npm run start
```

## Technologies used

- Next.js
- React
- Redux
- TypeScript
- MongoDB

## Project structure

- .eslintrc.json
- .gitignore
- next-env.d.ts
- next.config.js
- package-lock.json
- package.json
- public
  - favicon.ico
  - vercel.svg
- Readme.md
- src
  - assets
    - images
      - default.png
  - components
    - Cart
      - CartItem
        - index.tsx
      - CartItemsList
        - index.tsx
      - CartPageMessage
        - index.tsx
      - index.ts
      - OrderForm
        - index.tsx
        - rules.ts
      - QuantityField
        - index.tsx
    - CheckmarkSelect
      - index.tsx
    - ProductCard
      - EmptyCard.tsx
      - index.tsx
    - Spinner
      - index.tsx
    - StyledBox
      - index.tsx
  - containers
    - Cart
      - index.tsx
    - Filters
      - index.tsx
    - Header
      - index.tsx
    - ProductList
      - index.tsx
    - Sidebar
      - index.tsx
  - contexts
    - CartContext.tsx
  - core
    - api
      - makeOrder.ts
      - product.ts
      - productList.ts
      - productsById.ts
      - shopList.ts
      - [...all].ts
    - config
      - mongodb.ts
    - database
      - migrate
        - init.mongodb.js
    - services
      - cart.ts
      - makeOrder.ts
      - product.ts
      - productList.ts
      - shopList.ts
    - store
      - actions
        - cart.ts
        - makeOrder.ts
        - product.ts
        - productList.ts
        - shopList.ts
      - constants
        - cart.ts
        - makeOrder.ts
        - product.ts
        - productList.ts
        - shopList.ts
      - index.ts
      - reducers
        - cart.ts
        - makeOrder.ts
        - product.ts
        - productList.ts
        - shopList.ts
      - selectors
        - cart.ts
        - makeOrder.ts
        - product.ts
        - productList.ts
        - shopList.ts
    - themes
      - light
        - CustomPalette.ts
        - index.ts
    - types
      - CartItem.ts
      - OrderForm.ts
      - Product.ts
      - ProductList.ts
      - Shop.ts
  - hooks
    - redux.ts
    - useCart.ts
  - pages
    - cart
      - index.tsx
    - index.tsx
    - \_app.tsx
    - \_document.tsx
  - utils
    - cart.ts
- tsconfig.json
