/* @flow */
import React, { Component } from 'react';
import { fetchPopularRepos } from '../utils/api'
import * as config from '../config'


function PopularTabs(props) {

    var languages = ['All', 'Javascript', 'Ruby', 'Java', 'Css', 'Python'];
    return (
        <div>
            <h1>Helllo</h1>
            <ul className='popularTabs'>
                {languages.map((lang) => (
                    <li
                        key={lang}
                        onClick={props.setSelectedLanguages.bind(null, lang)}
                        style={props.selectedLanguage === lang ? { color: 'red' } : null}>
                        {lang}
                    </li>
                ))}
            </ul>
        </div >


    )

}

function ReposGrid(props: { repos: any }) {
    return (
        <ul className="popular-list">

            {props.repos.map((repo: any, index: number) => (
                <li className="popular-item" key={repo.name}>
                    <div>#{index}</div>
                    <div className="list-container">
                        < img
                            className='avatar'
                            src={repo.owner.avatar_url}
                            alt={`Avatar for ${repo.name}`} />
                        <div>
                            <a href={repo.html_url} target="_blank" >{repo.name}</a>
                        </div>
                        <div>@{repo.owner.login}</div>
                        <div>{repo.stargazers_count}</div>
                    </div>

                    {/* <ul>
                        <li><a href="https://example.com">Website</a></li>
                        <li><a href="mailto:michael.bluth@example.com">Email</a></li>
                        <li><a href="tel:+123456789">Phone</a></li>

                    </ul> */}

                </li>

            ))}
        </ul>
    )
}

export class Popular extends Component<{}, { selectedLanguage: string, repos: ?string }>{

    state = {
        selectedLanguage: 'All',
        repos: null
    };

    setSelectedLanguages = (lang: string) => {
        this.setState({
            selectedLanguage: lang,
            repos: null
        });

        fetchPopularRepos(lang).then(x => {
            console.log(x);
            let text = JSON.stringify(x[1]);
            this.setState({ repos: x })

        })
            .catch(err => {
                console.log(err);

            })
    }

    componentDidMount() {
        this.setSelectedLanguages('All');
    }
    render() {

        return (
            <div>
                <PopularTabs setSelectedLanguages={this.setSelectedLanguages}
                    selectedLanguage={this.state.selectedLanguage} />
                {this.state.repos
                    ? <ReposGrid repos={this.state.repos} />
                    : "Loading"
                }



            </div>

        );
    }
}