import { useState } from "react";

export default function form(){
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [users, setUsers] = useState([]);

    async function saveUser(){
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({name, age})
            // body: {name, age}
        });

        const resp = await fetch('/api/form');
        const respJson = await resp.json();
        setUsers(respJson);
    }

    function renderUsers(){
        return users.map( (u,i) => (
            <li key={i} > {u.name} tem {u.age} anos </li>
        ));
    }

    return (
        <div>
            <h1>Integrando com API #02</h1>
            <input 
                type="text" 
                value={name}    
                onChange={e => setName(e.target.value)}
            />
            <input 
                type="number" 
                value={age}
                onChange={e => setAge(+e.target.value)}
            />

            <button onClick={saveUser} >Enviar</button>

            <hr/>

            <ul>
                {renderUsers()}
            </ul>
        </div>
    );
}