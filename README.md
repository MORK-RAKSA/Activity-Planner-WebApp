<a name="readme-top"></a>
<!-- ABOUT THE PROJECT -->
## About The Project

Struggling to stay organized? Our Activity Planner is your one-stop solution! Manage tasks, track time, and access your schedule anytime, anywhere. Take control of your day and experience the freedom of organization! 


## Our vision
To empower individuals and teams to manage their time and tasks efficiently, enhancing productivity and reducing stress through an intuitive and comprehensive activity planning platform.
<a href="https://www.canva.com/design/DAGHJ6a62qo/FpgVZrCJ3dIlA1grlVQ56Q/edit?utm_content=DAGHJ6a62qo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Product vision board</a>

## Business Model Lean Canvas
Lean Canvas for Platform Productivity Planner
<a href="https://www.canva.com/design/DAGHJ2YT994/qOWCq1JPl2y6YRXse3pIGQ/edit?utm_content=DAGHJ2YT994&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Business Model Lean Canvas</a>


## Our mission
Our platform is perfectly for our user who want to manage their schedule and note for all the up-coming task with the amazing feature and user-friendly interface. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## UI design

* [![Static Badge](https://img.shields.io/badge/Figma-2C2D34?style=for-the-badge&logo=figma&logoColor=fff&color=%232C2D34)](https://www.figma.com/design/AZY3SibhsYmorZtocfp49s/Productivity-Planner?node-id=1-2161&t=YrpC93h1xQuXzkqh-1)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

This section we lists all library and framework that make this project

* [![Static Badge](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=fff&color=000000)](https://nextjs.org/)
* [![Static Badge](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev/)
* [![Static Badge](https://img.shields.io/badge/Node.js-499442?style=for-the-badge&logo=node.js&logoColor=fff&color=499442)](https://nodejs.org/en)
* [![Static Badge](https://img.shields.io/badge/Tyscript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff&color=3178C6)](https://www.typescriptlang.org/)



  

### Project Structure

<p>The project follows monorepo use control by yarn workspace</p>

```
Activity-Planner-WebApp
├── .github
│   └── workflows
│       ├── main.yml
│       └── semantic-release.yml
├── apps
│     ├── frontend-client   
|     │   ├── .next
│     │   ├── .storybook
│     │   ├── .vscode
│     │   ├── node_modules
│     │   ├── public
│     │   ├── src
|     │   │    └──app
|     │   │       ├── components
│     │   │       │   ├── atoms
│     │   │       │   ├── molecules
│     │   │       │   ├── organisms
│     │   │       │   └── templates
│     │   │       └── pages
│     │   ├── .eslintrc.json
│     │   ├── .gitignore
│     │   ├── next-env.d.ts
│     │   ├── next.config.mjs
│     │   ├── package.json
│     │   ├── postcss.config.mjs
│     │   ├── README.md
│     │   ├── tailwind.config.ts
│     │   └── tsconfig.json
│     └── frontend-dashboard
│         ├── .storybook
│         ├── node_modules  
│         ├── public
│         ├── src
|         │   ├── components
│         │   │   ├── atoms
│         │   │   ├── molecules
│         │   │   ├── organisms
│         │   │   └── templates
│         │   └── pages
│         ├── .gitignore
│         ├── .eslintrc.json
│         ├── package.json
│         ├── postcss.config.mjs
│         ├── README.md
│         ├── tailwind.config.
│         └── tsconfig.json
├── node_modules
├── packages
│   ├── libs
|   │    ├── types
│   │    ├── utils
│   │    └── package.json
│   └── ui-components
|       ├── .storybook
│       ├── dist
│       ├── node_modules
│       ├── src
│       │   ├── atoms
│       │   ├── molecules
│       │   ├── organisms
│       │   ├── templates
│       │   ├── demo.tsx
│       │   ├── index.html
│       │   ├── index.tsx
|       │   └── styles.css
│       ├── .babelrc
│       ├── .gitignore
│       ├── storybook.log
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── README.md
│       ├── tailwind.config.
│       ├── webpack.config.js
│       ├── webpack.config.ui.js
│       └── tsconfig.json
├── .gitignore
├── package.json
├── README.md
└── yarn.lock

```




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To run the project, ensure you have the following installed on your system:

<!-- * [![Static Badge](https://img.shields.io/badge/Docker%20Desktop-1D63ED?style=for-the-badge&logo=docker&logoColor=fff)](https://www.docker.com/products/docker-desktop/) -->
* [![Static Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=fff)](https://nodejs.org/)
* [![Static Badge](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=fff)](https://yarnpkg.com/)


Then, follow these steps:

<h3>Frontend</h3>

Open your terminal and run the following command to clone the project repository:

```sh
git clone https://github.com/sabaicode-dev/activity-planner.git

```
2. Navigate to the Project Directory:

```sh
cd activity-planner
```
3. Install Dependencies:

Navigate to the root directory of the project and run:

  ```sh
  yarn install
  ```
4. Start the Project:

Use the following command to start all application:

  ```sh
  yarn start
  ```
5. Click link in your terminal:

Use the following command to start all application:

<a href="http://localhost:3000/">localhost:3000</a>

<!-- <h3>Backend</h3>

1. Clone the Repository:

Open your terminal and run the following command to clone the project repository:

```sh
git clone https://github.com/neakhatka/neakhatka.git

```

2. Navigate to the Project Directory:

```sh
cd neakhatka
```

3. Install Dependencies:

Navigate to the root directory of the project and run:

  ```sh
  yarn install
  ```

4. Start the Project using Docker:

Use the following command to start all services defined in the docker-compose.yaml file:

  ```sh
  yarn start:docker
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 -->

<!-- CONTACT -->
## Contact

Productivity Planner <br/>
Team members - vannvith08@gmail.com - mork.raksa.1221@rupp.edu.kh - duongdevid098@gmail.com - sokmeng168msi@gmail.com

Project Link: [https://github.com/sabaicode-dev/activity-planner.git](https://github.com/sabaicode-dev/activity-planner.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>






# Project Name: Your Project Name

Welcome to the **Your Project Name** repository. This README provides guidelines on our coding conventions, project structure, and development practices to ensure consistency and maintainability of the codebase.

## Code Conventions

We aim to maintain a clean and uniform codebase. Please adhere to the following conventions when contributing to this project.

### Directory Structure

Our project is organized into several key directories:

```bash
/project-root
|-- /apps
| |-- /backend # Backend Service
| |-- /frontend-client # NextJS application for the client
| |-- /frontend-dashboard # ReactJS Dashboard application
|-- /packages
| |-- /ui-components # Reusable UI components
| |-- /libs
| |-- /utils # Utility functions
| |-- /types # TypeScript type definitions
```

### Naming Conventions

#### Files and Folders

- **Files**: Use kebab-case for file names. Example: `user-profile.ts`, `login-form.tsx`.
- **Folders**: Use kebab-case for folder names. Example: `ui-components`, `order-processing`.

#### Code

- **Variables and Functions**: Use camelCase for identifiers.
  ```typescript
  let recordCount = 10;
  function fetchUserData() { ... }

- **Classes and Interface**: Use PascalCase for classes and interfaces
  ```typescript
  class UserProcessor { ... }
  interface UserData { ... }

#### Functions
- Keep functions concise and focused on a single task.
- Clearly name functions to reflect their purpose.

#### Variables
- Use descriptive names, avoiding vague or generic terms.
- Avoid single-letter names except in short, localized loops.

#### React/NextJS Components
- Name React/NextJS components using PascalCase and match the file name with the component name.
- Place each component in its own folder with its associated styles and tests.

#### Commit Messages
- Use clear, concise commit messages in the imperative mood.
Example: "Add payment processing module", "Fix boundary error in cart calculation".

#### Pull Requests
- Describe changes thoroughly.
- Ensure code passes all tests and adheres to the coding standards set forth in this document.


#### Setup and Development
## Getting Started
To set up the project locally, follow these steps:

1. Clone the repository
```bash
git clone [repository-url]
```
2. Install dependencies
```bash
yarn install
```
3. Start All Server
```bash
yarn start
```

#### Contributing
Please read our contributing guidelines carefully before making a pull request. Contributions should be made in a separate branch and submitted via pull requests to the main branch for review.
