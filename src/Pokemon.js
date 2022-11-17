import Card from '@mui/material/Card';

export default function Pokemon(props) {
    data = props.data;
    image = data[0];
    type = data[1];
    nature = data[2];
    attack = data[3];
    total = data[4];
    return (
        <Card></Card>
    );
}