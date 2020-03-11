In the project directory

cd /books/books

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `app data populated from Google Books API` 

Data populates from Google Books API (https://www.googleapis.com/books/v1/volumes?q='Search+text'+&startIndex=11)

type-along search which searches with Title, Author etc... every keypress (Debounce for 300 milliseconds) in search box.

along with pagination as lazy loading.
