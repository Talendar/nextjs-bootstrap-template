This is a template of a [Next.js](https://nextjs.org/) project that uses [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap).

To use it, create your app using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app):

```bash
npx create-next-app my-app-name --example https://github.com/Talendar/nextjs-bootstrap-template
```

## Getting Started

To run the development server, use the command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

You can change Bootstrap's behaviour by modifying [its Sass variables](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss)
on `styles/bootstrap.scss`. All changes must be made before importing Bootstrap's SCSS.


## Useful links

Here are some useful links:

- [React.js Documentation](https://reactjs.org/docs/getting-started.html) - learn about React.js features and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API. 
- [Bootstrap Examples](https://getbootstrap.com/docs/4.6/examples/") - check out some examples of how to use Bootstrap 4.
- [React-Bootstrap Examples](https://github.com/react-bootstrap/code-sandbox-examples/blob/master/README.md) - check out some examples of how to use React-Bootstrap.
- [Bootstrap Sass variables](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss) - all the Sass variables of Bootstrap 4.


## Note

You might see some deprecation warnings when the Sass code is first compiled to CSS - just ignore them. They should appear
only once.

You might also see NPM complaining about unmet dependencies for Bootstrap (jQuery and Popper). You can also ignore this,
since you'll be using React-Bootstrap components.
