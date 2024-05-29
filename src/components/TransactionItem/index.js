const TransactionItem = props => {
  const {list} = props
  const {title, amount, type} = list

  return (
    <li>
      <h1>{title}</h1>
      <p>{amount}</p>
      <h1>{type}</h1>
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
