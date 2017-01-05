class Parent extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }
    this.getMovieData = this.getMovieData.bind(this)
  }

  getMovieData(event, title){
    let that = this
    event.preventDefault()
    const omdbUrl = "http://www.omdbapi.com/?s="
    let urlRequest = omdbUrl + encodeURIComponent(title);
    $.ajax({
         url: urlRequest
       })
     .done(function(response) {
         that.setState({
           movies: response.Search
         })
       })
  }
  render(){
    return(
      <div>
        <SearchForm getMovieData={this.getMovieData} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }

}
