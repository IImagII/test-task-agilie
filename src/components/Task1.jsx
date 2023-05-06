import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useState } from 'react'

import { tasks } from '../../data'
import { VerticallyCenter } from '../hooks/modal/VerticallyCenter'
import { useChangeInputData, useSendInputData } from '../hooks/useSendInputData'
import { turnNumber } from '../utils/task1/task1'

const Task1 = () => {
  const task1 = 'task1'

  const [numberForm, setNumberForm] = useState({
    startNumber: '',
    endNumber: ''
  })

  const { isOpen, onClose } = useDisclosure()

  const [result, setResult] = useState(null)

  const sendInputDataForTask = useChangeInputData(task1)

  const sendResponseData = useSendInputData(`response/${task1}`)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const canTransformResult = turnNumber(
      parseInt(numberForm.startNumber),
      parseInt(numberForm.endNumber)
    )
    setResult(canTransformResult)

    sendInputDataForTask.mutate(numberForm)

    sendResponseData.mutate(JSON.stringify({ data: canTransformResult }))
  }

  const handleReset = () => {
    setNumberForm({
      startNumber: '',
      endNumber: ''
    })

    setResult(null)
  }

  return (
    <>
      <Heading as="h1" size="md" textAlign="center">
        TASK-1
      </Heading>
      <VerticallyCenter
        isOpen={isOpen}
        onClose={onClose}
        text={tasks[0].task1}
        title={tasks[0].title}
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={20}
        maxW="2xl"
      >
        <Box p={100}>
          <form onSubmit={handleSubmit}>
            <Box display="flex" mb={10}>
              <FormControl isRequired mr={20}>
                <FormLabel>First Number</FormLabel>
                <Input
                  placeholder="First number"
                  type="number"
                  value={numberForm.startNumber}
                  onChange={(e) =>
                    setNumberForm({
                      ...numberForm,
                      startNumber: e.target.value
                    })
                  }
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Second Number</FormLabel>
                <Input
                  placeholder="Second number"
                  type="number"
                  value={numberForm.endNumber}
                  onChange={(e) =>
                    setNumberForm({
                      ...numberForm,
                      endNumber: e.target.value
                    })
                  }
                />
              </FormControl>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button colorScheme="blue" type="submit" mr={5}>
                Start the transformation
              </Button>
              <Button colorScheme="red" onClick={handleReset}>
                Reset
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      {result !== null && (
        <Box display="flex" alignItems="center" justifyContent="center">
          {result ? (
            <Box color="green">
              The number {numberForm.startNumber} can be transformed to{' '}
              {numberForm.endNumber} according to the condition
            </Box>
          ) : (
            <Box color="red">
              The number {numberForm.startNumber} cannot be transformed to{' '}
              {'  '}
              {numberForm.endNumber} according to the condition
            </Box>
          )}
        </Box>
      )}
    </>
  )
}
export default Task1



