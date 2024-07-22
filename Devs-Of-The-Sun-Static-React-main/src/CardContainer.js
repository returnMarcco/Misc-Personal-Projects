import React from 'react'
import { Container } from 'semantic-ui-react'
import { devCardArr } from './DevCards'
// import { DevCardJohn } from './DevCards';
// import { DevCardMax } from './DevCardMax';
// import { DevCardMark } from './DevCardMark';


function placeholderFunction(){
    
}
const CardContainer = () => { 
    return <div className = 'card-css'>
    <div class="ui three doubling stackable cards">
        {devCardArr}
    </div>
    </div>
}

export default CardContainer