This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Tech stack: Next.js (the framework of React), TailwindCSS, Firebase

## Architecture

This project uses App Router, the new model for building applications using React's latest features such as Server Components, Streaming with Suspense, and Server Actions.

Every component in `src/app` folder is server component by default, add "use client" on top of the code in .tsx file to make it client component.

Try to put all client components in `src/app/ui`, they can be used in server components as child components.

In the project, use React context to manage state that shared by many components or passed through multiple layers of hierarchy. Use props, if just pass from parent to child component.

Redirect is configured in `next.config.mjs`.  

Route handlers are in `src/app/api`

`src/lib` is for utility functions that aren't necessarily bound to React or Next.js. All Firebase API code is wrapped in the `src/lib/firebase` directory.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
