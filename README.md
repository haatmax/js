# ecommerce web site haatmax

## Lessons

1. install all file and tools
2. crate typeScript React app by vite
3. create Git Repository
   1. create github account
      connect vs code to github
      2.and publice github

## lessongs 2

5. List Products product listing
   1. create Product type
   2. create products array
   3. add product images
   4. render products
6. Add React Bootstrap
   1. npm install react-bootstrap bootstrap
   2. import bootstrap css
   3. update App.tsx
7. Add page routing
   1. npm i react-router-dom
   2. create route for home page
   3. create router for product page
   4. add helmet for settting page title
8. Create Node.JS Server
   1. create backend folder and run npm init
      npm install -save-dev typescript ts-node-dev
   2. npm install express
   3. npm install -save-dev typescript ts-node-dev @types/express
   4. npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
   5. create src/index.ts
   6. create route for / return backend is ready.
   7. copy data.ts from frontend to backend
   8. create route for /api/products
      1.
   9. return products
   10. run npm start
9. Fetch Products From frontend
   1. npm install axios
   2. set axios base url
   3. use effect hook
   4. use reducer hook
10. Set-Page-Title
11. npm i react-helmet-async
12. main.tsx

```js
import { HelmetProvider } from 'react-helmet-async'
...
<HelmetProvider>
  <RouterProvider router={router} />
</HelmetProvider>
```

12. Video-12-Load-Products-By-React-Query
1. npm i @tanstack/react-query @tanstack/react-query-devtools
1. crate -product - page
1. index.ts
1. productHooks.ts
1. productPage.tsx
