import {v4 as uuidv4} from 'uuid'

const Balance = [
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    heading: 'Your Balance',
    amount: 0,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    heading: 'Your Income',
    amount: 0,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    heading: 'Your Expenses',
    amount: 0,
  },
]

const MoneyDetails = props => {
  const {amount, income, expenses, type} = props

  return (
    <div>
      {Balance.map(eachItem => (
        <li>
          <img src={eachItem.imageUrl} alt="money" />
          <h1>{eachItem.heading}</h1>
          <p>Rs :{eachItem.amount}</p>
        </li>
      ))}
    </div>
  )
}

export default MoneyDetails
