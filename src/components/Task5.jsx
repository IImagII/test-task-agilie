import { useState } from 'react'
import { canGiftEveryone } from '../utils/task5'

export const Task5 = () => {
   const [selectedSizes, setSelectedSizes] = useState([])
   const [showResult, setShowResult] = useState(false)
   const tshirts = ['S', 'M', 'M', 'L', 'XXL']

   const handleSizeSelect = size => {
      setSelectedSizes(prevSelectedSizes => [...prevSelectedSizes, size])
   }

   const handleGift = () => {
      const canGift = canGiftEveryone(tshirts, selectedSizes)
      setShowResult(canGift)
   }

   return (
      <div>
         <h1>Оберіть розміри футболок:</h1>
         <button onClick={() => handleSizeSelect('S')}>S</button>
         <button onClick={() => handleSizeSelect('M')}>M</button>
         <button onClick={() => handleSizeSelect('L')}>L</button>
         <button onClick={() => handleSizeSelect('XL')}>XL</button>
         <button onClick={() => handleSizeSelect('XXL')}>XXL</button>
         <br />
         <br />
         {selectedSizes}
         <button onClick={handleGift}>
            Перевірити можливість надання футболок
         </button>

         {showResult ? <div>Можемо</div> : <div>Неможемо</div>}
      </div>
   )
}
