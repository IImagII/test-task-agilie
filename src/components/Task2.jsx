import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

import { tasks } from '../../data'
import { VerticallyCenter } from '../hooks/modal/VerticallyCenter'
import { useSendInputData } from '../hooks/useSendInputData'
import { generateArray } from '../utils/task2/generatorNumber'
import { findDuplicate } from '../utils/task2/task2'

const Task2 = () => {
  const task2 = 'task2'

  const [arr, setArr] = useState([])

  const [duplicate, setDuplicate] = useState(null)

  const { isOpen, onClose } = useDisclosure()

  const sendInputDataForTask = useSendInputData(task2)

  const sendResponseData = useSendInputData(`response/${task2}`)

  const handleGenerateNumber = async () => {
    const array = generateArray()

    setArr(array)
    setDuplicate(null)
    const data = Number(array.join(''))
    sendInputDataForTask.mutate({ data })
  }

  const handleFindDuplicate = () => {
    const res = findDuplicate(arr)

    setDuplicate(res)
    sendResponseData.mutate(JSON.stringify({ data: res }))
  }

  return (
    <>
      <Heading as="h1" size="md" textAlign="center">
        TASK-2
      </Heading>
      <VerticallyCenter
        isOpen={isOpen}
        onClose={onClose}
        text={tasks[1].task2}
        title={tasks[1].title}
      />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box maxW="2xl" p={150}>
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
                <Box color="red" fontSize="20px" textAlign="center">
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
