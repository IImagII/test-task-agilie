import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { findOptimalDiscCombination } from '../utils/task3'
import { transformDisplay } from '../utils/transformDisplay'

const Task3 = () => {
  const [currentWeight, setCurrentWeight] = useState('')
  const [displayShow, setDisplayShow] = useState()

  const nextWeight = findOptimalDiscCombination(parseInt(currentWeight))

  useEffect(() => {
    if (nextWeight) {
      const res = transformDisplay(nextWeight.plates)
      setDisplayShow(res)
    }
  }, [nextWeight])

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
              onChange={(e) => setCurrentWeight(e.target.valueAsNumber)}
            />
          </FormControl>{' '}
          <Box>
            {nextWeight && nextWeight.plates ? (
              <Box as="p">
                <Box>
                  Next weight to beat: {nextWeight.totalWeight.toFixed(1)}
                </Box>
                <Box>minimum next set of disc loaders: {displayShow}</Box>
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
