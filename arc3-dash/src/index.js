import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import axios from 'axios';

import Home from './routes/Home';
import Transcript from './routes/Transcript';
import Transcripts from './routes/Transcripts';
import Appeal from './routes/Appeal'
import Appeals from './routes/Appeals'
import UserNotes from './routes/UserNotes.jsx';
import Notes from './routes/Notes'

function App() {

  const [self, setSelf] = React.useState(null);
  

  React.useEffect(() => {
    axios.get('/api/discord/me').then(res => {
      setSelf(res.data);
    })
  }, [setSelf])


  const router = createBrowserRouter(
    [
      
      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/:guildid",
        element: <Home/>
      },

      {
        path: "/:guild/notes/",
        element: <Notes/>,
        children: [
          {
          path: ":userid",
          element: <UserNotes />
          }
        ]
      },
      
      {
        path: "/:guildid/transcripts",
        element: <Transcripts/>,
        children: [
          {
            path: "*",
            element: <Transcript/>
          }
        ]
      },

    ]
  );
  
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
