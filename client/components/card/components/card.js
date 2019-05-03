import React from 'react'

export default function Card ({data, date, time}) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 p-2">
      <div className="card">
        <div className="card-header">
          <strong>{data.timezone}</strong>
        </div>
        <div className="card-body">
          <h1 className="card-title mb-0">{time}</h1>
          <p className="card-text m-1 mb-2 font-weight-bold text-muted">{date}</p>
          <p className="card-text m-1">Summary: {data.currently.summary}</p>
          <p className="card-text m-1">Temperature: {data.currently.temperature}F°</p>
          <p className="card-text m-1">Humidity: {data.currently.humidity}</p>
        </div>
        <div className="card-footer">
          <small><strong>Latitude:</strong> {data.latitude}, <strong>Longitude:</strong> {data.longitude}</small>
        </div>
      </div>
    </div>
  )
}
