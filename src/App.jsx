import './App.css'
import Budget from './component/Budget'
import { AppProvider } from './context/AppContext'
import AddExpenseForm from './component/AddExpenseForm'
import { ExpenseList } from './component/ExpenseList'
import ExpenseTotal from './component/ExpenseTotal'
import RemainingBudget from './component/RemainingBudget'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>Budget App</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
  )
}

export default App
