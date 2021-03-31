import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PageMain from './PageMain';
import PageBlog from './PageBlog'
import PageGallery from './PageGallery'
import PageBlogEach from './PageBlogEach'
import Footer from './Footer';
import PageEditAccount from './PageEditAccount'
import PageAddBlog from './PageAddBlog'

function Index() {    
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path='/' exact component={PageMain}/>
                    <Route path='/blog' exact component={PageBlog}/>     
                    <Route path='/blog/create' strict exact component={PageAddBlog}/>           
                    <Route path='/blog/:id' strict exact component={PageBlogEach}/> 
                    <Route path='/user/edit' exact component={PageEditAccount}/>
                    <Route path='/gallery' component={PageGallery}/>
                </Switch>
            </Router>
            <Footer />
        </React.Fragment>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
