import WeatherIcon from "./WeatherIcon"
import WeatherData from "./WeatherData"

// shows one day of the forecast
function WeatherForecast(props) {
    const { day, img, imgAlt, conditions, time } = props

    return (
        <div className="weather">
            <h2>{day}</h2>
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <WeatherData conditions={conditions} time={time} />
        </div>
    )
}

export default WeatherForecast
