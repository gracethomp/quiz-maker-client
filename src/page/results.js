import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButton from '../components/navigation-buttons';

function Result() {
    const [results, setResult] = useState([]);

    const getData = () => {
        fetch("http://localhost:5000/results")
        .then((response) => response.json())
        .then((result) => setResult(result))
        .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);

    const navigate = useNavigate();

    const navigateToMain = () => {
      navigate('/');
    };

    return (
        <div class='creator'>
            <div class='form'>
                <table>
                    <tr>
                        <th>IP</th>
                        <th>Result</th>
                    </tr>
                    {results.map((result) => (
                        <tr>
                            <td>{result.ip}</td>
                            <td>{result.result}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <NavigationButton visible={false}/>
        </div>
    )
}

export default Result;