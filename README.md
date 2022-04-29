
<h1 align="center">Calendar</h1>

App to manage reminders on calendar. Adittional information about the test can be seen [here](https://github.com/fdttests/calendar/blob/main/challenge.md).

## Demo

A demo of the application can be seen on:  [`https://fdt-calendar.herokuapp.com/home`](https://fdt-calendar.herokuapp.com/home)

## Development server

Run `npm run serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server

Run `npm run build && npm run start` to run the production server. Navigate to `http://localhost:8080/` to see the app running.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Dev notes

The application was developed using a simple base Angular project with lazy loading route modules. The source consist of three folders:

- `components`: Generic components that can be used in the whole application context. In this folder are a generic card component and a simple modal;
- `pages`: Represents each main page / route of the application. This folder has a subfolder called components, so, while the global/generic components are stored in `app/components`, the module/page specific componentes are stored on `pages/page-module-name/components`; 
- `data`: Stores non-component related parts of the application, like models, repositories, use cases, helper functions, etc;

To follow clean architecture, the content of data folder should be splited into core/infrastructure, domain and application layers. For the sake of simplicity, I decided to group everything on data folder, but on a production app, the layers concerns should be better defined.

Some simple use cases classes were implemented to isolate the communication between the application components and the data source (repositories). I decided to not use any dependency to deal with date and do all the date related logic inside the application, just to add to the challenge. The date operations with edge cases were developed in use cases classes with unit testing to ensure the functionality is working as expected. In a production application, a package like Luxon should be used instead.

For state management, the [elf](https://github.com/ngneat/elf) package was used.

A simple Github Action was added to guarantee that the install/test/eslint process is working as expected.

## Bonus
- Expand the calendar to support more than the current month. (done);
- Properly handle overflow when multiple reminders appear on the same date. (done);
- Functionality to delete one or ALL the reminders for a specific day. (not done);
