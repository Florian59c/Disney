import { Component } from 'react'; // permet d'utiliser "export default class app extends Component"
import { EnTete } from './components/EnTete';
import { Bouton } from './components/Bouton';
import "./index.css"
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

export default class app extends Component {

  state = {
    films: [],
    suggestions: []
  };

  // creation d'une methode asyncrone pour recuperer des membres de l'api
  async getFilms() {
    const reponse = await fetch("https://elorri.fr/api/disney-plus/movies");
    const data = await reponse.json();
    // il ne reste plus q'a mettre a jour le state pour injecter les données de l'api dans le tableau members du state
    this.setState({
      films: data
    });
  }

  // creation d'une methode asyncrone pour recuperer des membres de l'api
  async getSuggestions() {
    const reponse = await fetch("https://elorri.fr/api/disney-plus/suggest");
    const data = await reponse.json();
    // il ne reste plus q'a mettre a jour le state pour injecter les données de l'api dans le tableau members du state
    this.setState({
      suggestions: data
    });
  }

  // la methode get componentdidmount est appeler automatiquement lors de la creation du composnat app apres le 1er rendu
  componentDidMount() {
    this.getFilms();
    this.getSuggestions();
  }

  render() {

    const listNouveau = this.state.films.slice(0, 6).map((filmNouveau) => { // slice limite le parcour de la map en commencant par l'index 0 et en affiche 6
      return (

        <Col xs={24} sm={12} md={8} xl={4}>
          <Link to={`/movie/${filmNouveau.id}`}>
            <img src={filmNouveau.poster} alt={`Affiche du film : ${filmNouveau.title}`} />
          </Link>
        </Col>
      )
    })



    // const listSuggestion = this.state.films.filter(filmSuggere => filmSuggere.highlighted).map((filmSuggere, index) => { // le .filter va filtrer le contenu de la state en fonction de la suggestion a l'interieur de la state (ici : highlighted == true) / le map parcourt ensuite uniquement ceux qui ont été selectionner par le .filter
    const listSuggestion = this.state.suggestions.slice(0, 3).map((filmSuggere) => {
      return (
        <Col xs={24} md={8}>
          <Link to={`/movie/${filmSuggere.id}`}>
            <img src={filmSuggere.cover} alt={`Poster du film : ${filmSuggere.title}`} />
          </Link>
        </Col>
      )
    })

    return (
      <div className="container">
        <EnTete />
        <div>
          {/* carrousel */}
        </div>
        <div>
          <Bouton />
        </div>
        <div className="nouveau">
          <h1>Nouveautés</h1>
          <Row justify="space-evenly" gutter={[16, 16]} >
            {listNouveau}
          </Row>
        </div>
        <div className="suggestion">
          <h1>Suggestions</h1>
          <Row justify="space-evenly" gutter={[16, 16]} >
            {listSuggestion}
          </Row>
        </div>
      </div>
    )
  }
}