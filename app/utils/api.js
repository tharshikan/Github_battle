/* @flow */
import axios from 'axios';


export function fetchPopularRepos(lang: string) {
    let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI).then((res) => res.data.items);


};

