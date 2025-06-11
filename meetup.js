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
//NotFound Component
//index.js

import {
NotFoundDiv,
NotFoundImg,
NotFoundH1,
NotFoundP,
} from './styledComponent'
const NotFound = () => (
<NotFoundDiv>
<NotFoundImg
src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png
alt="not found"
/>
<NotFoundH1>Page Not Found</NotFoundH1>
<NotFoundP>
We are sorry, the page you requested could not be found
</NotFoundP>
</NotFoundDiv>
)
export default NotFound

//styledComponent.js
import styled from 'styled-components'

export const NotFoundDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
`

export const NotFoundImg = styled.img`
width: 50%;
`

export const NotFoundH1 = styled.h1`
font-size: 34px;
font-weight: 700;
color: #334155;
margin-bottom: 10px;
`

export const NotFoundP=styled.p`
font-size: 24px;
font-weight: 500;
color: #7b8794;
margin-bottom: 10px;
`
//Rigister Component
//index.js

import NavBar from '../Navbar'
import HistoryContext from '../../Context/RegisterContext'
import {
MainDiv,
RegisterCardDiv,
RegisterImg,
RegisterForm,
FormH1,
Label,
Input,
Select,
Option,
FormBtn,
ErrP,
} from './styledComponent'
const topicsList = [
{
id: 'ARTS_AND_CULTURE',
displayText: 'Arts and Culture',
},
{
id: 'CAREER_AND_BUSINESS',
displayText: 'Career and Business',
},
{
id: 'EDUCATION_AND_LEARNING',
displayText: 'Education and Learning',
},
{
id: 'FASHION_AND_BEAUTY',
displayText: 'Fashion and Learning',
},
{
id: 'GAMES',
displayText: 'Games'
},
]
const Register = props => (
<HistoryContext.Consumer>
{value => {
const {
changeRegistrationStatus,
updateName,
updateTopic,
topic,
name,
registerErr,
updateErr,
} = value
const submitForm = event => {
event.preventDefault()
changeRegistrationStatus()
if (name !== '" && topic !== '') {
const {history} = props
history.replace('/')
} else {
updateErr(true)
}
}
const onChangeTopic = event => {
updateTopic (event.target.value)
}
const onChangeName = event => {
updateName (event.target.value)
}
return (
<>
<NavBar />
<MainDiv>
<RegisterCardDiv>
<RegisterImg
src="https://assets.ccbp.in/frontend/react-js/meetup/website"
alt="website register"
/>
<RegisterForm onClick={submitForm}>
<FormH1>Let us join</FormH1>
<Label htmlFor="name">NAME</Label>
<Input
type="text"
id="name"
value={name}
placeholder="Your name"
onChange={onChangeName}
/>
<Label htmlFor="topic">TOPICS</Label>
<Select id="topic" value=(topic) onChange={onChangeTopic}>
{topicsList.map(each => (
<Option key=[each.id) value={each.id}>
{each.displayText}
</Option>
))}
</Select>
<FormBtn type="submit">Register Now</FormBtn>
{registerErr? <ErrP>Please enter your name</ErrP>: null}
</RegisterForm>
</RegisterCardDiv>
</MainDiv>
</>
)
}}
</HistoryContext.Consumer>
)
export default Register

//styledComponents

import styled from 'styled-components'
export const MainDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
min-height: 100vh;
width: 100%;
padding: 20px;
`
export const RegisterCardDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
width: 80%;
height: 70vh;
`
export const RegisterImg = styled.img`
width: 40%;
`
export const RegisterForm = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 60%;
align-items: flex-start;
margin-top: 20px;
export const FormH1 = styled.h1
font-size: 50px;
font-weight: 500;
margin: 0px;
color: #334155;
margin-bottom: 15px;
`
export const Label = styled.label`
font-size: 16px;
font-weight: 700;
color: #768794;
margin-bottom: 10px;
`
export const Input styled.input`
font-size: 16px;
font-weight: 700;
color: #7b8794;
height: 40px;
width: 50%;
outline: none;
padding-left: 15px;
border: 1px solid #768794;
margin-bottom: 30px;
`
export const Select = styled.select`
font-size: 16px;
background-color: transparent;
font-weight: 700;
color: #334155;
height: 40px;
width: 50%;
padding-left: 15px;
outline: none;
border: 1px solid #7b8794;
margin-bottom: 30px;
`
export const Option = styled.option
font-size: 16px;
font-weight: 700;
color: #334155;
`
export const FormBtn = styled.button`
background-color: #2563eb;
font-size: 18px;
font-weight: 700;
color: #ffffff;
border: none;
border-radius: 10px;
height: 40px;
width: 200px;
margin-bottom: 25px;
cursor: pointer;
margin-top: 20px;
`
export const ErrP styled.p`
font-size: 12px;
font-weight: 500;
color: #ff0b37;
margin: 0px;
`
//App.js
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import HistoryContext from './Context/RegisterContext
import Home from './components/Home'
import Register from './components/Register'
import Not Found from './components/NotFound'
// Replace your code here
class App extends Component {
state = {
isRegister: false,
name: '',
topic: 'Arts and Culture',
registerErr: false,
}
changeRegistrationStatus=()=> {



