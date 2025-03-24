# ProShop - E-Commerce Demo Application

## Overview
ProShop is an educational e-commerce web app built to showcase my full-stack development skills using the MERN stack (MongoDB, Express.js, React, Node.js). As a student, I created this project to demonstrate my ability to integrate third-party APIs (PayPal Sandbox) and deploy a functional app on Render.

**Live Demo**: [ProShop on Render](https://proshop-6lnp.onrender.com/)

**Note**: This is a demo using PayPal Sandbox. No real transactions are processed.


[![ ]

---

## Features
- Product browsing with details (price, description, ratings)
- User authentication (register, login, profile) using JWT
- Shopping cart and checkout with PayPal Sandbox
- Responsive UI with React Bootstrap
- MongoDB Atlas for data storage
- Deployed on Render

---

## Tech Stack
- **Frontend**: React, Redux Toolkit, React Bootstrap, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **APIs**: PayPal Sandbox
- **Deployment**: Render
- **Tools**: Git, npm, ESLint, Concurrently

---

## Learning Outcomes
- Built a full-stack MERN app from scratch
- Managed state with Redux Toolkit and RTK Query
- Configured and deployed to Render
- Troubleshot Vite build and path issues
- Integrated and secured PayPal Sandbox API
- Wrote clean, maintainable code with error handling

---

## Installation (Local Development)
1. Clone the repo:
   ```bash
   git clone https://github.com/kadirbalkaya10/ProShop.git
   cd ProShop
   ```
2. Install dependencies:
   ```bash
   npm install
   cd frontend && npm install
   ```
3. Set up .env in the root:
   ```bash
   PORT=5000
   MONGO_URI=<your_mongo_db_uri>
   JWT_SECRET=<your_secret>
   PAGINATION_LIMIT=10
   PAYPAL_CLIENT_ID=<your_paypal_client_id>
   PAYPAL_APP_SECRET=<your_paypal_secret>
   PAYPAL_API_URL=https://api-m.sandbox.paypal.com
   ```
4. Seed the database:
   ```bash
   npm run data:import
   ```
5. Run the app:
   ```bash
   npm run develop
   ```


## Deployment

## Deployed on Render with:

  - Build Command: npm install && NODE_ENV=development npm install --prefix frontend && NODE_ENV=development npm run build --prefix frontend
  - Start Command: npm start
  - Env Vars: NODE_ENV=production, MONGO_URI, PORT=10000, PAYPAL_CLIENT_ID

## Challenges & Solutions

As a student tackling my first FullStack MERN app, I ran into several hurdles that taught me a ton about development, debugging, and deployment. Here’s what I faced and how I figured things out:

- **Vite Build Fails in Production**: When deploying to Render, I kept getting `sh: 1: vite: not found` in production mode because `NODE_ENV=production` skipped installing `devDependencies` like Vite. I was clueless at first why would a build tool disappear? After digging into npm docs, I learned production installs skip dev stuff, so I tweaked the build command to `NODE_ENV=development npm run build --prefix frontend` to force Vite to show up. It was a huge "aha!" moment about environment variables.

- **Serving the Frontend Path Nightmare**: In production, `server.js` wouldn’t serve my React app just kept showing `"API is running..."`. I thought `__dirname` would magically find `frontend/dist/`, but it was looking in the wrong spot (`backend/frontend/dist` instead of root-level `frontend/dist`). I spent hours logging paths and learned to use `path.join(__dirname, "frontend", "dist")` to climb out of the `backend/` folder. It taught me how file systems work in deployed apps versus local dev.

- **API Errors Crashing Everything**: The frontend threw `can't access property "message", l.data is undefined` because `/api/products` returned an empty array when my MongoDB wasn’t seeded. As a newbie, I didn’t realize the frontend needed to handle empty responses. I added checks like `if (error) return <div>{error?.data?.message || "Error"}</div>` in `HomeScreen.js` and ran `npm run data:import` to seed data. It was my first taste of defensive coding.

- **MongoDB Connection Woes**: Early on, my app wouldn’t connect to MongoDB Atlas—logs showed `MongoServerSelectionError`. I panicked, thinking my code was broken, but it was just the IP whitelist in Atlas. I set it to `0.0.0.0/0` (allow all) to get going, which taught me about cloud database security basics. Later, I realized I should tighten that up for real projects.

- **Proxy Confusion in Development**: Locally, my frontend (`localhost:3001`) wouldn’t talk to the backend (`localhost:3000`) without CORS errors. I found `server.proxy` in `vite.config.js` and set it to forward `/api` calls, but it took trial and error to get `changeOrigin: true` working. It was my intro to how dev servers handle cross-origin stuff.

- **PayPal Sandbox Setup**: Integrating PayPal was intimidating.I’d never touched a payment API before. I fumbled with sandbox credentials from the PayPal Developer Dashboard and got lost in OAuth docs. Eventually, I wired up `/api/config/paypal` and the frontend PayPalButton component, testing with fake transactions. It felt like a win to see "payment successful" without real money moving!

---

## Future Improvements

Since this was my first MERN app, there’s plenty I’d love to improve as I grow my skills:

- **Admin Product Management**: Right now, products are static after seeding. I want to build an admin dashboard to add, edit, and delete products via a UI. It’d mean learning more about role-based auth and CRUD operations—stuff I’ve only scratched the surface of.

- **Unit Tests with Jest and React Testing Library**: I skipped tests to get this running, but I know they’re crucial. I’d start with testing the product list fetch and user login, figuring out how to mock APIs and components. It’s daunting as a beginner, but I’m excited to learn it.

- **Optimize with Lazy Loading**: The app loads everything at once, which could slow down on bigger catalogs. I’d experiment with React’s `lazy()` and `Suspense` to load components like product details only when needed. It’s a performance trick I’ve read about but haven’t tried yet.

- **Better Error Pages**: When things break (like a bad API call), users just see raw errors. I’d design custom 404 and error pages with React Router to make it more professional and user-friendly—something I overlooked as a first timer.

- **Search and Filtering**: Users can search products but can`t filter by category , prices etc. Adding afilters would mean tweaking the backend query logic and frontend state, which sounds challenging but fun to tackle next.

- **Secure MongoDB Access**: Allowing all IPs (`0.0.0.0/0`) isn’t safe long term. I’d figure out Render’s outbound IPs and whitelist those, learning more about network security along the way.

## About Me

**I’m Kadir Balkaya, a student passionate about full-stack development. This project highlights my skills and eagerness to learn.**

  - GitHub: kadirbalkaya10
  - LinkedIn: [www.linkedin.com/in/kadir-balkaya-4b9b38330] 
  - Email: [kadirbalkaya08@gmail.com]

## Acknowledgments

  Inspired by Brad Traversy’s MERN eCommerce course [https://github.com/bradtraversy]
