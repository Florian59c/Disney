import React, { Component } from 'react'
import { EnTete } from './EnTete';
import { Col, Row } from 'antd';

export default class DescFilms extends Component {

    //initialise une state vide que l'on va remplir grace a l'api
    state = {
        detailsFilms: []
    };

    // initialisation de l'api grace a l'id en parametre pour que se soit dynamique
    async getDetails(id) {
        const reponse = await fetch(`https://elorri.fr/api/disney-plus/movie/${id}`);
        const data = await reponse.json();
        // il ne reste plus q'a mettre a jour le state pour injecter les données de l'api dans le tableau members du state
        this.setState({
            detailsFilms: data
        });
    }

    // la methode get componentdidmount esst appeler automatiquement lors de la creation du composnat app apres le 1er rendu
    componentDidMount() {
        this.getDetails(this.props.match.params.id);
    }

    render() {
        return (
            <div className='container'>
                <EnTete />
                <div className='description'>
                    <Row className='details' justify='center' gutter={[16, 16]} >
                        <Col xs={24} md={10} xl={6}>
                            <div>
                                <img src={this.state.detailsFilms.poster} alt={`Le poster du film ${this.state.detailsFilms.title}`} />
                            </div>
                        </Col>
                        <Col xs={24} md={14} xl={18}>
                            <div>
                                <h1>{this.state.detailsFilms.title}</h1>
                                <button>{this.state.detailsFilms.company}</button>
                                <p>{this.state.detailsFilms.description}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}