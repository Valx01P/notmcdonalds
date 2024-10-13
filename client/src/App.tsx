import Home from '../public/pages/Home'
import CreateOrder from '../public/pages/CreateOrder'
import UpdateOrder from '../public/pages/UpdateOrder'
import Header from '../public/components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='content header'>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders/new" element={<CreateOrder />} />
            <Route path="/orders/:id/edit" element={<UpdateOrder />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App