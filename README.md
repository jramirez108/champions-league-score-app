# Champions League Score Tracking App
React.js project that displays upcoming and completed Champions League matches.
The match data is in a JSON file stored as separate objects.

This data used to be fetched from an API https://www.football-data.org/ but due to CORS issues with the Heroku server I had to store the latest data into a JSON file and use that instead.

## Example JSON Object
{
        "id": 451623,
        "season": {
            "id": 1630,
            "startDate": "2023-09-19",
            "endDate": "2024-06-01",
            "currentMatchday": 6
        },
        "utcDate": "2023-09-19T16:45:00Z",
        "status": "FINISHED",
        "matchday": 1,
        "stage": "GROUP_STAGE",
        "group": "GROUP_F",
        "lastUpdated": "2023-09-20T00:20:01Z",
        "odds": {
            "msg": "Activate Odds-Package in User-Panel to retrieve odds."
        },
        "score": {
            "winner": "DRAW",
            "duration": "REGULAR",
            "fullTime": {
                "homeTeam": 0,
                "awayTeam": 0
            },
            "halfTime": {
                "homeTeam": 0,
                "awayTeam": 0
            },
            "extraTime": {
                "homeTeam": null,
                "awayTeam": null
            },
            "penalties": {
                "homeTeam": null,
                "awayTeam": null
            }
        },
        "homeTeam": {
            "id": 98,
            "name": "AC Milan"
        },
        "awayTeam": {
            "id": 67,
            "name": "Newcastle United FC"
        },
        "referees": [
            {
                "id": 207080,
                "name": "José Sánchez Martínez",
                "role": "REFEREE",
                "nationality": "Spain"
            }
        ]
    }
