import React from 'react'
import Wallpaper from './Wallpaper';
import Part1 from './Part1';
import Part2 from './Part2';
import CardSection from './CardSection';
import Part3 from './Part3';
import MyNavbar from './MyNavbar';

function Root() {
    return (
        <div>
            <Wallpaper label='Welcome'/>
            <MyNavbar path={prop.location.pathname}/>
            <Part1/>
            <CardSection showNum='3'/>
            <Part1/>
            <Part2/>
            <Part1/>
            <Part3/>
            <Part1/>
        </div>
    )
}

export default Root

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }