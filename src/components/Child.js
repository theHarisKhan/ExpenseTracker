import React, { useContext } from 'react'
import AddTransaction from './AddTransaction'
import IncomeExpenses from './IncomeExpenses'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

function Child() {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2)

    return (
       <>
            <h2>Expense Manager</h2>
            <div className="container">
                <div className="available-bal">
                    <h4>Available Balance</h4>
                    <h1>${total}</h1>
                </div>

                <IncomeExpenses />
        
                <ul className="list">
                    {transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} /> 
                    ))}
                </ul>

                <AddTransaction />
            </div>
        </>
    )
}

export default Child
