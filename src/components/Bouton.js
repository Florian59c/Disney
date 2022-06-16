import React from 'react'
import logoDisney from '../img/companies/logo-disney.png'
import logoPixar from '../img/companies/logo-pixar.png'
import logoMarvel from '../img/companies/logo-marvel.png'
import logoStarWars from '../img/companies/logo-starwars.png'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

const companies = {
    disney: "disney",
    marvel: "marvel",
    pixar: "pixar",
    starwars: "starwars"
};

export const Bouton = () => {

    return (
        <Row className='bouttonLien' justify="space-evenly" gutter={[16, 16]} >
            <Col xs={24} sm={12} md={6}>
                <Link to={`/company/${companies.disney}`}>
                    <button>
                        <img src={logoDisney} alt="Boutton avec le logo Disney qui ammène aux films Disney" />
                    </button>
                </Link>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Link to={`/company/${companies.pixar}`}>
                    <button>
                        <img src={logoPixar} alt="Boutton avec le logo Pixar qui ammène aux films Pixar" />
                    </button>
                </Link>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Link to={`/company/${companies.marvel}`}>
                    <button>
                        <img src={logoMarvel} alt="Boutton avec le logo Marvel qui ammène aux films Marvel" />
                    </button>
                </Link>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Link to={`/company/${companies.starwars}`}>
                    <button>
                        <img src={logoStarWars} alt="Boutton avec le logo Star Wars qui ammène aux films Star Wars" />
                    </button>
                </Link>
            </Col>
        </Row>
    )
}

export default companies;