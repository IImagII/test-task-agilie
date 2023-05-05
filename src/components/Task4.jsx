import { Box, Button, Heading, Text, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

import { tasks } from '../../data'
import { VerticallyCenter } from '../hooks/modal/VerticallyCenter'
import { useSendInputData } from '../hooks/useSendInputData'
import { canGiftEveryone } from '../utils/task4/task4'

const Task4 = () => {
  const task4 = 'task4'
  const [selectedSizes, setSelectedSizes] = useState([])
  console.log('🚀 ~ selectedSizes:', selectedSizes)
  const [showResult, setShowResult] = useState(false)

  const tshirts = ['S', 'M', 'L', 'XL', 'XXL']

  const { isOpen, onClose } = useDisclosure()

  const sendInputDataForTask = useSendInputData(task4)

  const sendResponseData = useSendInputData(`response/${task4}`)

  const handleSizeSelect = (size) => {
    setSelectedSizes((prev) => [...prev, size])
  }

  const reset = () => {
    setSelectedSizes([])
  }
  const handleGift = () => {
    const canGift = canGiftEveryone(tshirts, selectedSizes)
    setShowResult(canGift)
    const data = selectedSizes.join('')
    console.log('🚀 ~ data:', data)
    sendInputDataForTask.mutate({ data })
    sendResponseData.mutate({ data: canGift })
  }

  return (
    <>
      <Heading as="h1" size="md" textAlign="center">
        TASK-3.2
      </Heading>
      <VerticallyCenter
        isOpen={isOpen}
        onClose={onClose}
        text={tasks[3].task4}
        title={tasks[3].title}
      />
      <Box
        maxW="2xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p={150}
      >
        <Box mb={5}>
          <Text fontSize="xl">Choose T-shirt sizes:</Text>
        </Box>
        <Box mb={5}>
          {tshirts.map((tshirt, i) => (
            <Button
              key={i}
              colorScheme="blue"
              onClick={() => handleSizeSelect(tshirt)}
              mr={2}
            >
              {tshirt}
            </Button>
          ))}
          <Button colorScheme="red" onClick={reset}>
            Reset
          </Button>
        </Box>
        {selectedSizes.join(' - ')}
        <Box>
          <Text fontSize="xl" mb={5} mt={5}>
            Check the possibility of providing T-shirts:
          </Text>
        </Box>
        <Button colorScheme="blue" onClick={handleGift} mb={5}>
          Check
        </Button>
        {showResult ? (
          <Box color="green">can give a gift to all athletes</Box>
        ) : (
          <Box color="red">cannot give a gift to all athletes</Box>
        )}
      </Box>
    </>
  )
}
export default Task4
