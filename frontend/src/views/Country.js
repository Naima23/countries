import React, { useState, useEffect } from 'react';
// import '../App.css';

const Country = () => {
    const [Code, setCodes] = useState([])
    const [input, setInput] = useState({ name:''})
    const [output, setOutput] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCodes(data));
    },[])

    useEffect(() => {
        setOutput([])
        Code.filter(val => {
            if (val.region.includes(input)) {
                setOutput(output => [...output, val])
            }
        })

    }, [input]);
    console.log('code=>', input);

    return (
        <div className= 'container select '>
            <select name='name' onChange={e => setInput(e.target.value)} class="form-select form-select-sm  w-75 p-3" aria-label=".form-select-sm example">
                <option selected>Regio</option>
                {/* <option value="All">All</option> */}
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <div className="conainer">
                {output.map((res, index) => (
                    <>
                        <div className='country ' key={index}>
                            <div className="image">
                                <img src={res.flag} alt="flag" />
                            </div>
                            <div className='country-detail'>
                                <h2>{res.name} </h2>
                                <p>region:{res.region}</p>
                                <p>capital:{res.capital}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Country;
