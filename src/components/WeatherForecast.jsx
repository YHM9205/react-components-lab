// shows one day of the forecast
function WeatherForecast(props) {
    const { day, img, imgAlt, conditions, time } = props

    return (
        <div className="weather">
            <h2>{day}</h2>
            <img src={img} alt={imgAlt} />
            <p>Conditions: {conditions}</p>
            <p>Time: {time}</p>
        </div>
    )
}

export default WeatherForecast
