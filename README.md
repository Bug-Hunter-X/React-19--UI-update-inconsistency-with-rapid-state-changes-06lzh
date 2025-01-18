# React 19: UI Update Inconsistency

This repository demonstrates a potential issue with UI updates in React 19 when rapidly changing state. The problem isn't specific to React 19 itself, but it highlights an important aspect of state management in React functional components.

## Problem

The `bug.js` file contains a simple counter component.  If you rapidly click the increment button, you might observe that the displayed count doesn't match the actual state value. This occurs because `setCount` is called synchronously, and React's optimization strategies might miss some intermediate updates.

## Solution

The `bugSolution.js` file offers a solution that addresses this by using `useCallback` to memoize the `handleClick` function and potentially using `useRef` to manage the count directly, making the update more predictable. 