import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './Components.css';
import './Images.css'
import jeffKaplan from './jeff_kaplan.jpg'


const DevCardMax = () => (

    <Card className='card-max-css'>
        <Image src='https://www.mamytwink.com/upload/news/2019/mars/18/ion-hazzikostas-janvier-wow.jpg' wrapped ui={false} />
        <Card.Content>
            <Card.Header>Max</Card.Header>
            <Card.Meta>
            <span className='date'>Joined in 2012</span>
            </Card.Meta>
            <Card.Description>
            Max is a stonemason who develops MMORPGs in his spare time. His dream is to finally kill World of Warcraft.
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
            <Icon name='user' />
            22 Friends
            </a>
        </Card.Content>
    </Card>
    
)
  
export { DevCardMax }
 