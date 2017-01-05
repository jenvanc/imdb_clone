class MovieList extends React.Component {
  render(){

    return(
      <div>
        <section>
          <h2>Results</h2>
          <ul>
            {this.props.movies.map((movie, i) =>
              <Movie movie={movie} key={i} />
            )}
          </ul>
        </section>
      </div>
    )
  }
}
