import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Codes = ({ alpha3Code, alpha2Code, flag, name }) => {

    const [Code, setCodes] = useState([])
    const [input, setInput] = useState('')
    const [output, setOutput] = useState([])

    // get data
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCodes(data));
    }, [])

    // filter data

    useEffect(() => {
        setOutput([])
        Code.filter(val => {
            if (val.alpha3Code.toUpperCase().includes(input.toUpperCase())) {
                setOutput(output => [...output, val])
            }
        })

    }, [input]);

    return (
        <div>
            <div className="container-fluid w-25 p-3">
                <form className="d-flex">
                    <input onChange={e => setInput(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            <div className="container conainer">
                {Code && output.map(res => (
                    <>
                        <div className='country'>
                            <div className="image">
                                <img src={res.flag} alt="flag" />
                            </div>
                             <div className='country-detail'>
                                <p>{res.alpha3Code} </p>
                                <p>{res.alpha2Code}</p>
                                <Link to={`/capitales/${res.name}`}>
                                    <button className="btn btn-primary">show more</button>
                                </Link>

                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Codes;

