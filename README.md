# Mbunity Tech Assessment
Contact Us Page implemented. User can send message with all the questions. In the form, users can leave messages and questions along with their contact information. In the footer, users can leave their email address to subscribe to the company's newsletter. Page navigation is also implemented (in the header and footer).
## 💻 How to use

Clone repo

```bash
  git clone https://github.com/pelahiia/react-tech-assessment
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## 🛠️ Tech stack
- JavaScript
- TypeScript
- React
- CSS (Sass)
- React-Router v.6 (as a comment)
- classNames library

## 👤 Comments throughout the code
Please note that I've added some comments throughout the code to highlight some of the logic or code that would be applied if the page were real.
- For addaptive layout (mobile, tablet, desktop) @media mixin from Sass were used. You can find it in _mixins folder. (src/styles/_mixins.scss).
- In the App.tsx file, possible routing for the entire page was specified. For this purpose, a folder with constants could be created (not only for paths, but also for other data such as phone number, address, etc. After all, they can change over time) and the paths could be written there. Then use them for routing, as described in the file.
- The "classNames" library was used to create additional classes: in the "Header", it was created to style the burger menu in the open state through the parent container class and further combine classes. In "ContactInfo", additional classes through this library were used to style non-empty inputs.
- In the "ContactInfo" component, if the page was real, the data received from the form would have to be added to the database. There is a commented function that sends a "request to the backend" to add a new record to the database. In the "Footer" component, the backend request is sent with the email that the user left for subscription.  
