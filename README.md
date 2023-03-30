# Filebliz

Fileblizz is a file-sharing website designed to simplify the process of sharing files for students, teachers, creatives, and small business owners. With its intuitive interface, users can easily upload, share, and manage files, making it an ideal solution for collaborating on group projects or sending essential documents.

## Requirements

Before running Filebliz, make sure you have the following installed:

- [Node JS](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Github Desktop (Optional)](https://desktop.github.com/)
- [VS Code](https://code.visualstudio.com/)
- [React CLI](https://www.npmjs.com/package/create-react-app)

To install React JS CLI globally, open CMD and run this command:

```powershell
# Install React JS CLI globally
npm install -g create-react-app
```

## Usage

To get started with Fileblizz, follow these steps:

1. Download the code from <https://github.com/loybaldo/fileblizz> or use [Github Desktop](https://desktop.github.com/) to clone this repository.

2. Open the project in VS Code.

3. Install the dependencies:

    ```powershell
    npm install
    ```

4. Run the project using the following command:

    ```powershell
    npm start
    ```

5. To view the project, go to your web browser and type in <http://localhost:3000>.

## Other commands

- Build the project for production:
Use this command to generate a "build" folder for your project.

    ```powershell
    # This will generate a "build" folder.
    npm run build
    ```

- Run the production build in <http://localhost:3000>:
After building the project for production, use this command to serve the production build locally at <http://localhost:3000>.

    ```powershell
    # First, install serve: npm install -g serve
    serve -s build
    ```

- Run tests:
Use this command to run tests for your project.

    ```powershell
    npm test
    ```

> **_NOTE:_**  It is important to exercise caution when running your project in production mode. Running in production mode can have consequences for the stability, security, and availability of your application. It can even result in data loss or corruption, so always make sure to have backups of your data and be prepared to respond quickly to any issues that may arise.
