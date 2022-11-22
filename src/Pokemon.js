import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import './Pokemon.css';
import tangrowth from './images/tangrowth.webp';
import chimchar from './images/chimchar.png';
import flareon from './images/flareon.webp';
import heatmor from './images/heatmor.webp';
import leafeon from './images/leafeon.jpg';
import meganium from './images/meganium.png';
import milotic from './images/milotic.webp';
import politoed from './images/politoed.jpg';
import torkoal from './images/torkoal.webp';
import totodile from './images/totodile.png';
import turtwig from './images/turtwig.png';
import vaporeon from './images/vaporeon.png';

function checkImage(name) {
    switch(name) {
        case "Tangrowth":
            return tangrowth;
        case "Chimchar":
            return chimchar;
        case "Flareon":
            return flareon;
        case "Heatmor":
            return heatmor;
        case "Leafeon":
            return leafeon;
        case "Meganium":
            return meganium;
        case "Milotic":
            return milotic;
        case "Politoed":
            return politoed;
        case "Torkoal":
            return torkoal;
        case "Totodile":
            return totodile;
        case "Turtwig":
            return turtwig;
        default:
            return vaporeon;
        }
}

export default function Pokemon(props) {
    const data = props.data;
    const type = data.type;
    const nature = data.nature;
    const attack = data.attack;
    const total = data.total;
    const pName = data.pName;
    const image = checkImage(pName);

    function handleAdd() {
        props.addToTeam(pName, parseInt(total));
    }

    function handleRemove() {
        props.removeFromTeam(pName, parseInt(total));
    }

    return (
        <Card className="card">
            <div className="pokemon-info">
                <Typography variant="h5" sx={{fontWeight: 'bold'}}>{pName}</Typography>
                <Typography variant="subtitle1">Type: {type}</Typography>
                <Typography variant="subtitle1">Nature: {nature}</Typography>
                <Typography variant="subtitle1">Attack: {attack}</Typography>
                <Typography variant="subtitle1">Total: {total}</Typography>
                <div className="button">
                    <Button variant="contained" size="small" onClick={ () => {
                        handleAdd();
                    }}>Add To Party</Button>
                </div>
                <div className="button">
                    <Button variant="contained" size="small" onClick={ () => {
                        handleRemove();
                    }}>Remove From Party</Button>
                </div>
            </div>
            <div className="pokemon-image">
                <img src={image}></img>
            </div>
        </Card>
    );
}