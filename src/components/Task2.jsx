import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'

import { generateArray } from '../utils/generatorNumber'
import { findDuplicate } from '../utils/task2'

const Task2 = () => {
  const [arr, setArr] = useState([])

  const [duplicate, setDuplicate] = useState(null)

  const handleGenerateNumber = () => {
    const array = generateArray()

    setArr(array)
    setDuplicate(null)
  }

  const handleFindDuplicate = () => {
    const res = findDuplicate(arr)
    setDuplicate(res)
  }

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box maxW="800" p={150}>
          <Box
            mb={10}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Массив: [{arr.join(', ')}]
          </Box>
          <Box display="flex">
            <Button
              colorScheme="blue"
              size="sm"
              onClick={handleGenerateNumber}
              mr="10"
            >
              Generate new array
            </Button>

            <Button colorScheme="blue" size="sm" onClick={handleFindDuplicate}>
              Find duplicate element
            </Button>
          </Box>
          <Box
            mt={10}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {duplicate ? (
              <Box size={20}>
                Найден повторяющийся элемент:{' '}
                <Box color="red" fontSize="20px">
                  {duplicate}
                </Box>
              </Box>
            ) : (
              <Box>Не найдено повторяющихся элементов</Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Task2
