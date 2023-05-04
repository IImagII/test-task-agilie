import { Box, Button, Text } from '@chakra-ui/react'
import { useState } from 'react'

import { canGiftEveryone } from '../utils/task4'

const Task4 = () => {
  const [selectedSizes, setSelectedSizes] = useState([])
  console.log('🚀 ~ selectedSizes:', selectedSizes)
  const [showResult, setShowResult] = useState(false)
  const tshirts = ['S', 'M', 'M', 'L', 'XXL']

  const handleSizeSelect = (size) => {
    setSelectedSizes((prev) => [...prev, size])
  }

  const handleGift = () => {
    const canGift = canGiftEveryone(tshirts, selectedSizes)
    setShowResult(canGift)
  }

  return (
    <>
      <Box
        maxW="800"
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
