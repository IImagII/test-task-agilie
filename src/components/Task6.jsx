import { useState } from 'react'
import { countGoodPositions } from '../utils/task6'

export const Task6 = () => {
   const [long, setLong] = useState('')
   const [weight, setWeight] = useState('')
   const [count, setCount] = useState(0)
   console.log('🚀 ~ count:', count)

   const handleSubmit = event => {
      event.preventDefault()
      setCount(countGoodPositions(long, weight))
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <label>
               Длина матрицы:
               <input
                  type='number'
                  value={long}
                  onChange={e => setLong(e.target.value)}
               />
            </label>

            <label>
               <input
                  type='number'
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
               />
            </label>
            <br />
            <button type='submit'>Посчитать количество хороших позиций</button>
         </form>
         {count !== 0 && <div>Количество хороших позиций: {count}</div>}
      </div>
   )
}

export default Task6
