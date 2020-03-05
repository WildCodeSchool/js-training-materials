import React from 'react';
import './App.css';
import GifList from './GifList';
import SelectedGif from './SelectedGif';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gifs: [],
      query: '',
      selectedGif: {}
    }
  }

  componentDidMount() {
    this.handleLoadGifs(undefined, 'trees');
  }

  // controlled component (text input, search bar)
  handleChange = e => this.setState({query: e.target.value});

  // fetch from API, used in componentDidMount and when user clicks 'search'
  handleLoadGifs = (e, q) => {
    const apiKey = '4N0IwbUYxHyLJW9pvX1gTgAVYYMcSOeM';
    const query = q || this.state.query;

    fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=5`)
      .then(res => res.json())
      .then(results => {
        this.setState({
          gifs: results.data
        })
      })
  }

  // used when user clicks a gif
  handleSelectGif = (clickedGif) => {
    this.setState({
      selectedGif: clickedGif
    });
  }

  render() {
    return (
      <>
        <h1>Giphy App</h1>
        <div>
          <input type="text" value={this.state.query} onChange={this.handleChange}/>
          <input type="submit" value="Search" onClick={this.handleLoadGifs}/>
        </div>
        <div className="content">
          <GifList gifs={this.state.gifs} onClick={this.handleSelectGif}/>
          {
            this.state.selectedGif.images &&
            <SelectedGif gif={this.state.selectedGif}/>
          }
        </div>
      </>
    );
  }
}

export default App;
