import React, { Component } from 'react';
import { Card, Icon, Image} from 'semantic-ui-react';
import './Components.css';
import './Images.css'



const devCardArr =  [
  <Card className='card-john-css'>
    <Image src='https://i.ytimg.com/vi/G-NoOdYKidw/maxresdefault.jpg' wrapped ui={false} />
    <Card key="0"></Card>
      <Card.Content>
       <Card.Header>John</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2008</span>
        </Card.Meta>
        <Card.Description>
          John is the resident service dog. He likes to fetch snacks for us during business hours.
        </Card.Description>
        
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          80 Friends
        </a>
      </Card.Content>
    </Card>,
    
    <Card className='card-max-css'>
    <Image src='https://www.mamytwink.com/upload/news/2019/mars/18/ion-hazzikostas-janvier-wow.jpg' wrapped ui={false} />
    <Card key="1"></Card>
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
</Card>,

<Card className='card-mark-css'>
<Image src='https://media.distractify.com/brand-img/DuRBaI6j5/0x0/jeff-kaplan-overwatch-1619020186963.png' wrapped ui={false} />
<Card key="2"></Card>
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
]
       
export { devCardArr }
 
