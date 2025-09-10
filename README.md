# Your startup name here

[My Notes](notes.md)

A brief description of the application here. I don't know what my startup will focus on quite yet but I am excited to use Github and learn new programming skills over the next few months. I think I will really enjoy the content of this class and hope I can use the skills I learn in many different ways.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] Proper use of Markdown
- [ ] A concise and compelling elevator pitch
- [ ] Description of key features
- [ ] Description of how you will use each technology
- [ ] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Do you need a little extra push to meet your fitness goals? With the FitnessBuddy app, you can create challenges and log your workouts to see the progress you make along the way. You can even compete in exercise challenges with your friends in real time to see who is the best!

### Design

Initial sketches for each page supported in the app:

#### Login/Register
![Login sketch](./sketches/Login.jpeg)

#### Dashboard
![Dashboard sketch](./sketches/Dashboard.jpeg)

#### Log Workout
![Log workout sketch](./sketches/LogWorkout.jpeg)

#### Leaderboard
![Leaderboard sketch](./sketches/Leaderboard.jpeg)

#### Sequence Diagram
The diagram below shows the basic flow of how a user logs a workout. The user enters workout details in the frontend, which are then sent to the backend service. The backend saves the workout in the database and returns a confirmation, allowing the frontend to update the user’s dashboard with the new data.

```mermaid
sequenceDiagram
    actor User
    participant FE as Frontend (React)
    participant BE as Backend (Service/DB)

    User ->> FE: Log workout
    FE ->> BE: POST /addWorkout
    BE ->> BE: Save workout to DB
    BE -->> FE: Workout saved
    FE -->> User: Update dashboard
```

### Key features

- Secure login over HTTPS
- Ability to log workout with detailed information
- Create and join personal or group challenges
- Real-time leaderboard updates with each workout completed by your friends
- Dashboard displays progress as users log more workouts
- Current weather displays help users plan outdoor workouts
- Exercise data and user accounts are persistently stored

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Four different HTML pages for login, dashboard, workout logs, and leaderboard.
- **CSS** - Visually appealing pages that use good color choice and sizing to display leaderboards and other stats associated with the workout logs.
- **React** - Provides login, displays dashboard and leaderboard, logs workouts, displays weather, and handles navigation between pages.
- **Service** - Backend endpoints include:
    - Login
    - Workout logs
    - Obtaining third party weather information
    - Fetching leaderboard results
- **DB/Login** - Store users, workouts, and stats in a secure manner.
- **WebSocket** - Push real-time updates for:
    - Logged Workouts
    - Leaderboard Changes

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
