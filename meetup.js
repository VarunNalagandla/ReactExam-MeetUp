//RegisterContext.js

import React from 'react'

const HistoryContext = React.createContext({
isRegister: false,
changeRegistrationStatus: () => {},
name: '',
updateName: () => {},
topic: '',
updateTopic: () => {},
registerErr: false,
updateErr: () => {}
})

export default HistoryContext

//Home Component
//index.js

import {Link} from 'react-router-dom'
import HistoryContext from '../../Context/RegisterContext'
import {
MainDiv,
BeforeRegisH1,
BeforeRegisP,
BeforeRegisBtn,
BeforeRegisImg,
AfterRegisImg,
AfterRegisH1,
AfterRegisP,
} from './styledComponent'
import NavBar from '../Navbar'
const Home = props => {
const onClickRegister = () => {
const {history) =props
history.replace('/register')
}
const renderBeforeRegisteredView = () => (
<>
<BeforeRegisH1>Welcome to Meetup</BeforeRegisH1>
<BeforeRegisP>Please register for the topic</BeforeRegisP>
<Link to="/register">
<BeforeRegisBtn onclick={onClickRegister}>Register</BeforeRegisBtn>
</Link>
<BeforeRegisImg
src="https://assets.cchp.in/frontend/react-js/meetup/meetup-ing.png"
alt="meetup"
/>
</>
)
const renderAfterRegisteredView=(name, topic)=>(
<>
<AfterRegisH1>{`Hello $(name)`}</AfterRegisH1>
<AfterRegisP>{`Welcome to ${topic}`}</AfterRegisP>
<AfterRegisimg
src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-ing.png"
alt-"meetup"
/>
</>
)
return (
<HistoryContext.Consumer>
(value=> (
const {isRegister, name, topic}=value
return(
<>
<NavBar />
<MainDiv>
{isRegister
? renderAfterRegisteredView (name, topic)
: renderBeforeRegisteredView()}
</MainDiv>
</>
)
}}
</HistoryContext.Consumer>
)
}
export default Home

//styledComponents.js
import styled from 'styled-components'
export const MainDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
padding: 20px;
`
export const BeforeRegisH1 = styled.h1`
font-size: 50px;
font-weight: 700;
margin: 0px;
color: #334155;
margin-bottom: 15px;
`
export const BeforeRegisP = styled.p`
font-size: 24px;
margin: 0px;
font-weight: 700;
margin-bottom: 25px;
color: #475569;
`
export const BeforeRegisBtn = styled.button`
background-color: #2563eb;
font-size: 18px;
font-weight: 700;
color: #ffffff;
border: none;
border-radius: 10px;
height: 40px;
width: 120px;
margin-bottom: 25px;
cursor: pointer;
`

export const BeforeRegisImg = styled.img`
height: 350px;
width: 60%;
`
export const AfterRegisImg = styled.img`
height: 350px;
width: 60%;
`
export const AfterRegisH1 = styled.p`
font-size: 70px;
font-weight: 700;
color: #3b82f6;
margin: 0px;
margin-bottom: 10px;
`
export const AfterRegisp = styled.p`
font-size: 34px;
font-weight: 700;
margin: 0px;
margin-bottom: 25px;
color: #334155;
`

//NavBar Component
//index.js

const NavBar = () => (
<Navbar>
    <Logo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img."
        alt="website logo"
    />
</Navbar>
)

export default NavBar

//styledComponent.js

export const Navbar = styled.nav`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 70px;
padding-left: 20px;
`
export const Logo = styled.img`
height: 80%;
`

