// index.js

//this gets react from our files

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';



import SearchBar from './components/search_bar';

import VideoList from './components/video_list';

import VideoDetail from './components/video_detail';


//need variable to hold api key for youtube

const API_KEY = 'AIzaSyC50C564f9_qoE4Xn5wcEbsHiV0d7WcvRc';



//downwards dataflow
//most parent component should be responsible for fetching data


//must instal npm youtube- npm install ==save youtube-api-search



// create component that will make some html
// can use () => { to replace function(){ value of this is slightly different 

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({ key: API_KEY, term: '' }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });


        });

    }

    render() {
        return ( 
            < div >
            < SearchBar / >
            < VideoDetail video = { this.state.selectedVideo }/>
            < VideoList onVideoSelect = { selectedVideo => ({ this.setState.selectedVideo }) }
            videos = { this.state.videos } />
            
            < /div>
        );


    }
}


//the above will not run without react to put it
// on DOM with import statement, wrap component in jsx tag to make it an instance
// ReactDOM tells to put the element into a div or html tag

ReactDOM.render( < App / > , document.querySelector('.container'));
