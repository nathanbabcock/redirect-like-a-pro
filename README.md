# React Routes (Demo App)

Companion repo for a Toptal Engineering Blog article about React Router 6.

The main purpose of the article is to introduce a way of organizing React Router code that keeps routes & authentication logic clear, centralized, and easy to maintain.

## Getting started

```sh
npm i
npm start
```

## Walkthrough

The application contains just a few routes, with examples in the following order:

1. The **"wrong way"** to create a protected route
   - Uses `useEffect()` to redirect if the user is not logged in
   - This works, but it is messy and must be included in every component (hard to maintain)
   - App route: <https://localhost/wrong-way>
   - Source code: [`NaiveApproach.tsx`](./src/pages/NaiveApproach.tsx)
2. A more maintainable approach using a **custom component**
   - Introduces a `<LoggedInRoute>` component
   - App route: <https://localhost/logged-in-v2>
   - Source code: [`LoggedInRoute.tsx`](./src/routes/LoggedInRoute.tsx)
3. An equivalent approach using a **higher order component** (the "best" way)
   - Functions the same as #2, but the API is a little cleaner to write!
   - App route: <https://localhost/logged-in>
   - Source code: [`withLoggedIn.tsx`](./src/routes/withLoggedIn.tsx)
