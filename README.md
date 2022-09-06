# Doma Memoization Examples, aka Domemoize

This code base offers as an example to learn more about React's memoization APIs.

To get started:

1. Clone the repo
1. Run `yarn` to install the dependencies
1. Run `yarn start` to start the development server.
1. Install the React Devtools browser plugin in your main browser.
1. Enable "Highlight updates on re-renders". See: <a target="_blank" href="https://medium.com/dev-proto/highlight-react-components-updates-1b2832f2ce48">this document</a> for instructions.
1. Edit a catch phrase on a brokerage card with memoization disabled, notice how slow it is!
1. Edit a catch phrase on a brokerage card with memoization enabled and notice the difference in performance.
1. Open your console to see the `Profiler` data. Play around with the code by adding and removing `useCallbacks`, `useMemo` and `React.memo` to see how it affects the rendering performance.
