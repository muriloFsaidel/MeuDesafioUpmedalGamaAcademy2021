import React from "react";

interface leadsProps{

}

const Leads: StorefrontFunctionComponent<leadsProps> = () =>{
   
return (
        <div>
        <input type="text" placeholder="Nome"></input>
        <br/>
        <br/>
        <input type="text" placeholder="Email"></input>
        <br/>
        <br/>
        <input type="text" placeholder="telefone"></input>
        <br/>
        <br/>
        <input type="submit" value="Submit"></input>
        </div>
        )
}

Leads.schema = {
    title: 'editor.suporteZap.title',
    description: 'editor.suporteZap.description',
    type: 'object',
    properties: {

    },
}

export default Leads