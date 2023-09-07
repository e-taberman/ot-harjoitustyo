import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const CalculateAverage = (good, bad, all) => {
  let result = (good - bad) / all
  if (isNaN(result)) {return 0}
  return (result)
}

const GetPositive = (good, all) => {
  let result = good / all
  if (isNaN(result)) {return}
  return result + "%"
}

const Statistics = (props) => {
  let average = CalculateAverage(props.good, props.bad, props.all)
  let positive = GetPositive(props.good, props.all)
  if (props.all > 0) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <tr>
              <td><StatisticsLine text="good"/></td>
              <td><StatisticsLine value={props.good}/></td>
            </tr>
            <tr>
              <td><StatisticsLine text="neutral"/></td>
              <td><StatisticsLine value={props.neutral}/></td>
            </tr>
            <tr>
              <td><StatisticsLine text="bad"/></td>
              <td><StatisticsLine value={props.bad}/></td>
            </tr>
            <tr>
              <td><StatisticsLine text="all"/></td>
              <td><StatisticsLine value={props.all}/></td>
            </tr>
            <tr>
              <td><StatisticsLine text="average"/></td>
              <td><StatisticsLine value={average}/></td>
            </tr>
            <tr>
              <td><StatisticsLine text="positive"/></td>
              <td><StatisticsLine value={positive}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const StatisticsLine = ({text, value}) => {
  return (
    <div>{text} {value}</div>

  )
}

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [all, setAll] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <Header name="give feedback"/>
      <Button text="good" handleClick={increaseGood}/>
      <Button text="neutral" handleClick={increaseNeutral}/>
      <Button text="bad" handleClick={increaseBad}/>
      <Statistics good={good} bad={bad} neutral={neutral}
      all={all}/>
    </div>
  )
}

export default App
