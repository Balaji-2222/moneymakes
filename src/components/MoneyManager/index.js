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
  state = {list: [], title: '', amount: '', type: '', income: 0, expenses: 0}

  personDetails = event => {
    event.preventDefault()
    const {title, amount, type, income, expenses, list} = this.state
    const newList = {
      title,
      amount,
      type,
      id: uuidv4(),
    }
    if (type === 'Income') {
      this.setState(prevState => ({
        list: [...prevState.list, newList],
        amount: prevState.amount + amount,
        income: prevState.income + income,
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        list: [...prevState.list, newList],
        amount: prevState.amount + amount,
        expenses: prevState.expenses + expenses,
      }))
    }
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  typeDaily = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {list} = this.state
    const {amount, income, expenses, type} = this.state
    console.log(amount)
    console.log(expenses)
    return (
      <div className="bgContainer">
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
            type={type}
          />
        </ul>
        <form className="entryCard" onChange={this.personDetails}>
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
          <p htmlFor="type">Type</p>
          <select onChange={this.typeDaily}>
            <option value="Income">Income</option>
            <option value="Expenses">Expenses</option>
          </select>
          <button type="submit">ADD</button>
        </form>
        <ul>
          <TransactionItem list={list} />
        </ul>
      </div>
    )
  }
}
export default MoneyManager
