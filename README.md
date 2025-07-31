# ![image](./public/favicon-32x32.png) [chas.ms](chas.ms)

Converting my old portfolio site that I built in 2014 before I became a software engineer using HTML and vanilla CSS and JS to a modern isomorphic JavaScript frontend!

Using lean development to triage the incremental build - some parts of the site are still legacy! (see the [public folder](./public/))

Built using:

- [Remix/React Router 7](https://reactrouter.com/) for SSR and routing
- [Panda CSS](https://panda-css.com/) for statically-compiled CSS-in-JS
- [Vite](https://vite.dev/) for local dev server and bundler with HMR and build optimization
- [Netlify](https://www.netlify.com/) for Isomorphic JavaScript deploys to the global edge with SSL and serverless functions

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

### Docker

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```
