import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {list: [], title: '', amount: '', typex: '', income: 0, expenses: 0}

  personDetails = event => {
    event.preventDefault()
    const {title, amount, typex, income, expenses, list} = this.state

    const newList = {
      title,
      amount,
      typex,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      list: [...prevState.list, newList],
      amount: parseInt(prevState.amount) + parseInt(amount),
    }))
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  typeDaily = event => {
    this.setState({typex: event.target.value})
  }

  render() {
    const {list} = this.state
    const {amount, income, expenses, typex} = this.state
    console.log(list)
    return (
      <form className="bgContainer" onSubmit={this.personDetails}>
        <div className="firstContainer">
          <h1 className="firstHeading">Hi, Richard</h1>
          <p className="firstParagraph">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <ul className="arrange">
          <MoneyDetails
            amount={amount}
            income={income}
            expenses={expenses}
            typex={typex}
          />
        </ul>
        <div className="entryCard">
          <h1>Add Details</h1>
          <p htmlFor="title">Title</p>
          <input
            id="title"
            type="text"
            placeholder="TITLE"
            onChange={this.changeTitle}
          />
          <br />
          <p htmlFor="amount">Amount</p>
          <input
            id="amount"
            type="text"
            placeholder="AMOUNT"
            onChange={this.changeAmount}
          />
          <br />
          <p>Type</p>
          <select onChange={this.typeDaily} value={typex}>
            {transactionTypeOptions.map(eachItem => (
              <option value={eachItem.displayText} id={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </select>
          <button type="submit">ADD</button>
        </div>
        <ul>
          {list.map(eachItem => (
            <TransactionItem eachItem={eachItem} />
          ))}
        </ul>
      </form>
    )
  }
}
export default MoneyManager
