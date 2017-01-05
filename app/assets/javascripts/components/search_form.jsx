class SearchForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.props.getMovieData(event, this.refs.movieTitle.value)
  }

  render() {
    return(
      <div>
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input id="search" type="text" ref="movieTitle"/>
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}
