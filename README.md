# Vendor Board App

A web application to visualize the embedded development hardware data.

## Running the app locally

To run the app locally, first clone the repository and install the dependencies:

```bash
npm install
```

Then copy the `.env.example` file to `.env` and update the `BOARDS_API_URL` with the GraphQL API URL.


Next, start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Design Decisions

The application was built as a web application. The reasons for choosing a web application are:
- It is preferred the solution is portable and able to run across different platforms. A web application is cross-platform and can be accessed from any device with a browser.
- The application has to fetch data from the GraphQL API. There are native APIs already available in node.js or even browser to fetch data easily.
- Web applications are easy to deploy.
- Web applications are easy to create User Interfaces.
I am using the Svelte with SvelteKit application framework to build this application. The reasons for choosing Svelte are:
- Svelte is a lightweight framework. For this application we do not require a lot of features that are offered by other frameworks. We would like to create a application quickly with minimal dependencies.
- Svelte has a good performance. For this application we may need to handle large amount of data.

## Assumptions

- The board data does not get updated frequently. In this approach we are fetching the data once at initial load so user will only see the updated data when they refresh the page.
- The board data is not too large.

## Improvements

- UI can be more polished, including responsive design and a11y.
- Add test cases.
- The graphql client has been abstracted for future extensibility. We can add more features or even use public client libraries for more advanced features.
- We can create seperate Board page and Device page to show more details about the board and device.
- For large dataset we can no longer rely on client side filtering/searching. We have to use other queries to retrive search results.
