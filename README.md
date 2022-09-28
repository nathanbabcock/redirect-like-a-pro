# React Routes (Demo App)

This code is published as part of the corresponding blog article at the Toptal Engineering Blog.

Visit <https://www.toptal.com/blog> and subscribe to our newsletter to read great articles!

We introduce an elegant way to organize React Router code that keeps routes and authentication logic clear, centralized, and easy to maintain.

## Getting started

```sh
npm i
npm start
```

## Walkthrough

The application contains just a few routes, with examples in the following order:

1. The **"naive way"** to create a protected route
   - Uses `useEffect()` to redirect if the user is not logged in
   - This works, but it is messy and must be included in every component. This is hard to maintain.
   - App route: <https://localhost/wrong-way>
   - Source code: [`NaiveApproach.tsx`](./src/pages/NaiveApproach.tsx)
2. A better, and more maintainable, approach using a **custom component**
   - Introduces a `<ConditionalRoute>` component
   - App route: <https://localhost/logged-in-v2>
   - Source code: [`LoggedInRoute.tsx`](./src/routes/LoggedInRoute.tsx)
3. An elegant and **higher order component** (the "Grand Finale")
   - Functions the same as #2, but the API is much cleaner to write!
   - App route: <https://localhost/logged-in>
   - Source code: [`withLoggedIn.tsx`](./src/routes/withLoggedIn.tsx)
