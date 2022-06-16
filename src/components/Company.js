import React, { Component } from 'react'
import { EnTete } from './EnTete';
import logoDisney from '../img/companies/logo-disney.png'
import logoPixar from '../img/companies/logo-pixar.png'
import logoMarvel from '../img/companies/logo-marvel.png'
import logoStarWars from '../img/companies/logo-starwars.png'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

export default class Company extends Component {

    //initialise une state vide que l'on va remplir grace a l'api
    state = {
        companies: []
    };

    // initialisation de l'api grace a l'id en parametre pour que se soit dynamique
    async getCompanies(name) {
        const reponse = await fetch(`https://elorri.fr/api/disney-plus/company/${name}`);
        const data = await reponse.json();
        // il ne reste plus q'a mettre a jour le state pour injecter les données de l'api dans le tableau members du state
        this.setState({
            companies: data
        });
    }

    // la methode get componentdidmount esst appeler automatiquement lors de la creation du composnat app apres le 1er rendu
    componentDidMount() {
        this.getCompanies(this.props.match.params.name);

    }

    getImg(name) {
        switch (name) {
            case 'disney':
                return (logoDisney)
            case 'pixar':
                return (logoPixar);
            case 'marvel':
                return (logoMarvel);
            case 'starwars':
                return (logoStarWars);
        }
    }

    render() {

        const listFilmsCompany = this.state.companies.map((film) => {
            return (
                <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                    <Link to={`/movie/${film.id}`}>
                        <img src={film.poster} alt={`Affiche du film : ${film.title}`} />
                    </Link>
                </Col>
            )
        })

        return (
            <div className='container'>
                <EnTete />
                <div>
                    <Row className='companies' justify='center' gutter={[16, 16]} >
                        <Col xs={9} sm={7} md={5} xl={3}>
                            <img src={this.getImg(this.props.match.params.name)} alt={`Le logo de ${this.props.match.params.name}`} />
                        </Col>
                        <Col xs={9} sm={7} md={5} xl={3}>
                            <p>Vous présente tout son catalogue</p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className='companies' gutter={[16, 16]} >
                        {listFilmsCompany}
                    </Row>
                </div>
            </div>
        )
    }
}