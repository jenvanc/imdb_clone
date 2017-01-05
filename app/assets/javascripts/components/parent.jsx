class Parent extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }
  }

  getMovieData(event, title){
    event.preventDefault()
    const omdbUrl = "http://www.omdbapi.com/?s="
    let urlRequest = omdbUrl + encodeURIComponent(title);
    $.ajax({
         url: urlRequest
       })
     .done(function(response) {
         debugger
       })
  }
  render(){
    return(<SearchForm getMovieData={this.getMovieData} />)
  }

}
