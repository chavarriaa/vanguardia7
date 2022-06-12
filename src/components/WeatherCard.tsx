import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
export default function WeatherCard(props: WeatherCardProps) {

    return (
      <>
        <Card style={{ width: "18rem", margin: "12px",background:'#d1d1d1de' }}>
          <Card.Img
            variant="top"
            height={"120px"}
            src={props.getCountryImage(props.id) || ""}
          />
  
          <Card.Body>
            <Card.Subtitle>{`${kelvinToCelsius(
              props.weather.temperature
            )} °C`}
            
            <span className="icon">
            <img src={`http://openweathermap.org/img/wn/${props.iconCloud}@2x.png`}/>
            </span></Card.Subtitle>
            <Card.Title>{`${props.name}, ${props.country}`}</Card.Title>
  
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem> {`Máxima: ${kelvinToCelsius(props.weather.max)} °C`} </ListGroupItem>
          <ListGroupItem>{`Mínima: ${kelvinToCelsius(props.weather.min)} °C`}</ListGroupItem>
            <ListGroupItem>{`Humedad: ${props.humidity} %`}</ListGroupItem>
            <ListGroupItem>{`Nubes: ${props.clouds} %`}</ListGroupItem>
          
          </ListGroup>
        </Card>
      </>
    );
  }
  
  const kelvinToCelsius = (grades: number) => Math.round(grades - 273.15);

  interface WeatherCardProps {
    getCountryImage:Function
    id: number;
    name: string;
    country: string;
    img: string;
    weather: {
      temperature: number;
      max: number;
      min: number;
    };
    humidity: number;
    clouds: number;
    iconCloud: string;
  }
  