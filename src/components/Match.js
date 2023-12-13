import React from 'react'


export default function Match(props) {
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    var d = new Date(props.date);
    var date = d.toLocaleString('en-US', options)

    return (
        <div className="match-container">
            <div className="match-header">
                <h3 className="group">{props.stage.replaceAll('_', ' ')} - {props.group}</h3>
            </div>
            <div className="match-result">
                <div className="homeTeamCont">
                    <img id="homeTeamIcon" src={require(`../img/${props.homeTeam.id}.png`)} alt="home team logo" />
                    <h1 className="home-team">{props.homeTeam.name}</h1>
                </div>
                <div className="score">
                    <span className="home-score">{props.homeScore}</span>
                    <span className="dash">-</span>
                    <span className="away-score">{props.awayScore}</span>
                </div>
                <div className="awayTeamCont">
                    <img id="awayTeamIcon" src={require(`../img/${props.awayTeam.id}.png`)} alt="away team logo" />
                    <h1 className="away-team">{props.awayTeam.name}</h1>
                </div>
            </div>
            <div className="footer">
                {date}
            </div>
        </div>
    )
}
