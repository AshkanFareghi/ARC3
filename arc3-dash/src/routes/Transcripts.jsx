import Navbar from '../components/Nav/Navbar';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Outlet } from "react-router-dom";

import { TranscriptSidebar } from '../components/Transcripts/TranscriptSidebar.jsx';
import { toggleSidebar } from '../lib/domactions.js';

export default function Transcripts() {

  const [transcripts, setTranscripts] = useState([]);
  const {guildid} = useParams();

  useEffect(() => {

    axios.get(`/api/transcripts/${guildid}`).then(res => {
      setTranscripts(res.data);
    })

  }, [guildid])

  return (
    <>
      <div className="transcript">
        <title>Transcript</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/solarized-dark.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.8.1/lottie.min.js"></script>

        <main>
          <TranscriptSidebar transcripts={transcripts} toggleSidebar={toggleSidebar}/>
          <div className="transcript-body">
            <Outlet/>
          </div>
        </main>
      </div>
    </>
  );
};