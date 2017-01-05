class Movie extends React.Component {
  render(){
    let {Poster, Title, Year, Type} = this.props.movie

    return(
      <li className="movie">
        <img className="poster" src={Poster} />
        <div>
          <h3>{Title}</h3>
          <p>{Year}</p>
          <p>{Type}</p>
        </div>
      </li>
    )
  }

}
