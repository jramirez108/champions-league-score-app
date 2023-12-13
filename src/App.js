import './App.css';
import { useEffect, useState } from 'react';
import Match from './components/Match'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './components/Loading'
import Filters from './components/Filters'
import data from './sampleMatches.json'

function App() {
  const [isLoading, setLoading] = useState(true);
  const [showAllMatches, setShowAllMatches] = useState(true);
  const [matches, setMatches] = useState({});

  const toggleShowAllMatches = () => {
    setShowAllMatches(!showAllMatches);
  }

  useEffect(() => {

    var validMatches = data.filter(match => match.awayTeam.id !== null);
    var matchesToDisplay = showAllMatches ? validMatches : validMatches.filter(match => match.status === "FINISHED");
    setMatches(matchesToDisplay);
    setLoading(false);
    AOS.init()

  }, [showAllMatches]);

  if (isLoading) {
    return <div className="App"><Navbar /><Loading /></div>
  }

  return (
    <div className="App">
      <Navbar />
      <Filters showAllMatches={showAllMatches} handler={toggleShowAllMatches} />
      <div className="container-main">
        {
          matches.map(match =>
            <div key={match.id} data-aos="fade-up" data-aos-duration="1000">
              <Match
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                homeScore={match.score.fullTime.homeTeam}
                awayScore={match.score.fullTime.awayTeam}
                group={match.group}
                stage={match.stage}
                date={match.utcDate}
              />
            </div>)
        }
      </div>
    </div>
  );
}

export default App;
