import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import 'bulma'
import './styles/styles.scss'
import Layout from './Layout/Layout'

class App extends Component {
  render() {
    return(
      <div className="app-wrapper">
        
      <Layout />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// import Homepage from './components/common/Homepage'
// import Navbar from './components/common/Navbar'
// import Footer from './components/common/Footer'
// import Layout from './components/Layout/Layout'
// import JobDetails from './components/jobs/JobDetails'
// import JobsIndex from './components/jobs/JobsIndex'

// This is the top level component of the project. It includes the Nav bar, the footer and three routes to:
// the home page, the JobsIndex (the list of all the jobs available) and the job details (the page whch contains more information for each individual job listing)

// class Bapp extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <main>
//           <Navbar />
//           <Switch>
//           <Route path="/layout" component={Layout}/>
//             {/* <Route path="/jobs/:id" component={JobDetails}/>
//             <Route path="/jobs" component={JobsIndex}/> */}
//             <Route exact path="/" component={Homepage}/>
//           </Switch>
//           <Footer />
//         </main>
//       </BrowserRouter>
//     )
//   }
// }
