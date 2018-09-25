/* @flow */
import axios from 'axios';


export function fetchPopularRepos(lang: string) {
    let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI).then((res) => res.data.items);


};


export function Battle(users: Array<string>) {
    return (
        axios.all(users.map(getUserData))
            .then(players => {
                sortPlayers(players)
                return players;
            })
            .catch(e => {
                console.warn(e);
                return null;
            })

    )


}

function sortPlayers(players) {
    players.sort((a, b) => {
        return (a - b);
    })
}

export function getUserData(userID: string) {
    return (
        axios.all(
            [
                getProfile(userID),
                getRepos(userID)
            ]
        )
            .then((data) => {
                let profile = data[0];
                let repos = data[1];
                let score = getScore(repos, profile)
                return (
                    {
                        profile: profile,
                        score: score
                    }
                )
            }

            )
    )

}

export function getProfile(userID: string) {
    return (
        axios.get(`https://api.github.com/users/${userID}`).then(res => res.data)


    );
}

export function getScore(repos: any, profile: any) {
    let repscore = repos.reduce((sum, i) => (
        sum + i.stargazers_count), 0)

    let followers = profile.followers;
    return (repscore + 3 * followers)


}




function getRepos(userID: string) {
    return (
        axios.get(`https://api.github.com/users/${userID}/repos`).then(res => res.data)

    )
}


