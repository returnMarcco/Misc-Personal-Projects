import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './Components.css';
import './Images.css'


const DevCardMark = () => (
    
    <Card className='card-mark-css'>
        <Image src='https://media.distractify.com/brand-img/DuRBaI6j5/0x0/jeff-kaplan-overwatch-1619020186963.png' wrapped ui={false} />
        <Card.Content>
            <Card.Header>Mark</Card.Header>
            <Card.Meta>
            <span className='date'>Joined in 2009</span>
            </Card.Meta>
            <Card.Description>
            Mark is a seasoned game developer and avid environmentalist. He is a big believer in the power of recycling, and that is evident with his newest sequel, Overwatch 2.
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
            <Icon name='user' />
            443 Friends
            </a>
        </Card.Content>
    </Card>
   
)
       
export { DevCardMark}
 