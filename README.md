# FomoBusterUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Deploy 
To deploy on GitHub Pages into the `docs` folder, you can follow these steps:

1. Build the project by running `ng build --configuration production --base-href="https://jdeiros.github.io/fomo-buster-ui/"`. This will generate the production-ready files in the `docs` folder. -> then move files from `browser` folder to `docs` folder and create a copy of `index.html` file and name it as `404.html`.

2. Commit and push the changes to your GitHub repository.

3. Go to your repository's settings page on GitHub.

4. Scroll down to the GitHub Pages section.

5. Under the Source section, select the branch you want to deploy (e.g., `main` or `master`) and choose the `/docs` folder as the root directory.

6. Click on the Save button.

7. GitHub Pages will now deploy your Angular app to a URL like `https://<username>.github.io/<repository-name>/`.

Remember to replace `<username>` with your GitHub username and `<repository-name>` with the name of your repository.

That's it! Your Angular app will now be deployed on GitHub Pages.

