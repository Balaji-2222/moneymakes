const TransactionItem = props => {
  const {eachItem} = props
  const {title, amount, typex} = eachItem
  console.log(typex)
  return (
    <li>
      <h1>{title}</h1>
      <p>{amount}</p>
      <h1>{typex}</h1>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
