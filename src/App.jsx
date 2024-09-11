import { MenuTabs } from './components/menuTabs'
import PriceDisplay from './components/priceDisplay'

function App() {

  return (
    <>
      <main className='px-10'>
        <div className='mt-28 mb-12'>
          <PriceDisplay />
        </div>
        <div>
          <MenuTabs />
        </div>

      </main>
    </>
  )
}

export default App