import React, { useState, useEffect } from 'react'
import '../assets/Clock.css'

const Clock = () => {

  const url = 'https://api.warframestat.us/pc/cetusCycle/';
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);


  const getData = async () => {
    await fetch(url).then(res => res.json()).then((data) => setData(data))
    setCount(count + 1);
  }


  useEffect(() => {
    if (data.isDay) {
      document.body.style.backgroundImage = `url("cetus_Day.jpg")`
    } else {
      document.body.style.backgroundImage = `url("cetus_night.jpg")`
    }
  }, [data])

  useEffect(() => {
    getData();

  }, [url])

  setTimeout(() => {
    getData();
    console.log(count);
  }, 120000);



  return (
    <main>
      <div className="clock">
        {data.state === "day" ? (<h1>DAY</h1>) : (<h1>NIGHT</h1>)}
        <h1>{data.shortString}</h1>
      </div>
    </main>
  )
}

export default Clock