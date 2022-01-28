import { useState } from "react";
import Beer from "./Beer";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Bar = () => {

    const [loaded, setLoaded] = useState(false);
    const [beerData, setBeerData] = useState([]);
    const [error, setError] = useState(null);
    const [tempId, setTempId] = useState(null);


    const getData = () => {
        console.log("button clicked");
        axios.get("http://localhost:5015/beer/getAll")
        .then((res) => {
            console.log(res);
            setBeerData(res.data);
            
            setLoaded(true);
        })
        .catch((err) => {
            setError(error);
            console.error(err);
        });
    };

    const getById = (id) => {

        axios.get(`http://localhost:5015/beer/get/${id}`)
        .then((response) => {
            setBeerData(response.data);
            setLoaded(true);
            console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAAAA${response}`);
        }).catch((error) => {
            setLoaded(true);
            setError(error);
            console.log(error);
            console.log("SOMETHING WENT WRONGGG")
        });
    }



    return ( 
        <div>
            <h5>Bar</h5>
            <Button type="primary" onClick={()=>{getData()}}>Get Beers!</Button>
            <div>
                <input type="text" name="beerId" onChange={(event) => setTempId(event.target.value)}/>
                <Button onClick={() => {getById(tempId)}}>
                    Get Beer by ID
                </Button>
            </div>

                  {beerData.map((beer) => {
                    return <Beer name={beer.name} tagline={beer.tagline} image={beer.image_url} abv={beer.abv} desc={beer.description}/>
                })}


        </div>
     );
};
 
export default Bar;