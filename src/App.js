import logo from "./logo.svg";
import "./App.css";
import ClassComponet from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import Parent from "./Parent";
import States from "./States";
import SetState from "./SetState";
import ParentProps from "./ParentProps";
import ParentFunctionalProps from "./ParentFunctionalProps";
import EventHandlingClassComponent from "./EventHandlingClassComponent";
import EventHandlingFunctionalComponent from "./EventHandlingFunctionalComponent";
import CssInline from "./CssInline";
import Local from "./Local";
import CssUsingEvents from "./CssUsingEvents";
import ProjectCounter from "./Project-Counter";
import LifeCycle from "./LifeCycle";
import UseState from "./UseState";
import UseEffects from "./UseEffects";
import ManipulatingCssUsingHooks from "./ManipulatingCssUsingHooks";
import Forms from "./Forms";
import FormSubmission from "./FormSubmission";
import UserAuthentication1 from "./UserAuthentication1";
import TodoList from "./TodoList";
import Navbar from './Navbar'
import Homepage from './Homepage'
import Home from './Home'
import ContactUs from './ContactUs'
import Services from './Services'
import Data from './Data'
import {BrowserRouter,Route} from 'react-router-dom'
import Maps from './Maps'
import ConditionalRendering from './ConditionalRendering'
import ConditionalRenderingClassComponent from './ConditionalRenderingClassComponent'
import HttpFetchMethod from './HttpFetchMethod'
import HttpAxiosMethod from './HttpAxiosMethod'
import HotelProjectNavbar from './HotelProjectNavbar'
import HotelProjectBody from './HotelProjectBody'
import HotelProjectFooter from './HotelProjectFooter'
import CatsProjectNavbar from './CatsProjectNavbar'
import CatsProjectBody from './CatsProjectBody'
import CatsProjectFooter from './CatsProjectFooter'
import CatsProjectCheckout from './CatsProjectCheckout.js'

function App() {
    return ( 
        <div className = "App" > { /* <h1>This Thing Printed from Main Component</h1> */ }

        {
            /* <ClassComponet/>

                              <FunctionalComponent/> */
        }

        { /* <Parent /> */ }

        { /* <States /> */ }

        { /* <SetState /> */ }

        { /* <ParentProps movie='Avengers' /> */ }

        { /* <ParentFunctionalProps /> */ }

        { /* <EventHandlingClassComponent /> */ }

        { /* <EventHandlingFunctionalComponent /> */ }

        { /* <CssInline / > */ }

        { /* <Local /> */ }

        { /* <CssUsingEvents /> */ }

        { /* <ProjectCounter /> */ }

        { /* <LifeCycle /> */ }

        { /* <UseState /> */ }

        { /* <UseEffects /> */ }

        { /* <ManipulatingCssUsingHooks /> */ }

        { /* <Forms /> */ }

        { /* <FormSubmission /> */ }

        { /* <UserAuthentication1 /> */ }

        { /* <TodoList /> */ }

        {/* <Navbar /> */}

        {/* <BrowserRouter>

            <Route path='/home' component={Home} exact />
            
            <Route path='/contactUs' component={ContactUs} exact />

            <Route  path='/services' component={Services} exact />

            <Route  path='/data' component={Data} exact />


        </BrowserRouter> */}

        {/* <Maps /> */}

        {/* <ConditionalRendering /> */}

        {/* <ConditionalRenderingClassComponent /> */}

        {/* <HttpFetchMethod /> */}

        {/* <HttpAxiosMethod /> */}

        {/* <HotelProjectNavbar />

        <HotelProjectBody />

        <HotelProjectFooter /> */}

        <CatsProjectNavbar />

        <CatsProjectBody />

        <CatsProjectFooter /> 
        
        <BrowserRouter>

            <Route path='/checkout' component={CatsProjectCheckout} exact />

        </BrowserRouter>
        
        </div>
    );
}

export default App;