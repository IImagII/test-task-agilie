import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'

import { turnNumber } from '../utils/task1'

const Task1 = () => {
  const [numberForm, setNumberForm] = useState({
    startNumber: '',
    endNumber: ''
  })

  const [result, setResult] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const canTransformResult = turnNumber(
      parseInt(numberForm.startNumber),
      parseInt(numberForm.endNumber)
    )

    setResult(canTransformResult)
  }

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" mt={20}>
        <Box maxW="xl" p={100}>
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
              <Button colorScheme="blue" type="submit">
                Transform
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      {result !== null && (
        <Box display="flex" alignItems="center" justifyContent="center">
          {result
            ? `The number ${numberForm.startNumber} can be transformed to ${numberForm.endNumber} according to the condition`
            : `The number ${numberForm.startNumber} cannot be transformed to ${numberForm.endNumber} according to the condition`}
        </Box>
      )}
    </>
  )
}
export default Task1
