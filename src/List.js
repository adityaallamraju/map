import React, { Component, useState } from "react";


class List extends Component
{
    planets=['Mars','Venus','Jupiter','Earth','Saturn','Neptune'];
    htmlList=this.planets.map((item)=>{
    return <li className="list-group-item">{item}</li>;
    });
    render(){
        return(
            <div className="List">
                <ul className="list-group">
                    {this.htmlList}
                </ul>
            </div>
        );
    }
    

}
export default List