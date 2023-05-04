import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useState } from 'react'

import { findOptimalDiscCombination } from '../utils/task3'

const Task3 = () => {
  const [currentWeight, setCurrentWeight] = useState('')

  const handleWeightChange = (event) => {
    setCurrentWeight(event.target.valueAsNumber)
  }

  const nextWeight = findOptimalDiscCombination(parseInt(currentWeight))

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box maxW="800" p={150}>
          <FormControl isRequired mr={20} mb={15}>
            <FormLabel>Сurrent weight</FormLabel>
            <Input
              placeholder="current weight"
              type="number"
              value={currentWeight}
              onChange={handleWeightChange}
            />
          </FormControl>{' '}
          <Box>
            {nextWeight && nextWeight.plates ? (
              <Box as="p">
                <Box>
                  Next weight to beat: {nextWeight.totalWeight.toFixed(2)}
                </Box>
                <Box>Используются следующие </Box>
              </Box>
            ) : (
              <Box as="p">No possible weight to win</Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Task3
