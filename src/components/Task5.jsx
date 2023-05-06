import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'

import { tasks } from '../../data'
import { VerticallyCenter } from '../hooks/modal/VerticallyCenter'
import { useChangeInputData, useSendInputData } from '../hooks/useSendInputData'
import { generateScene } from '../utils/task5/generatorScene'
import { countGoodPositions } from '../utils/task5/task5'

const Task5 = () => {
  const task5 = 'task5'
  const [sizeSceneForm, setSizeSceneForm] = useState({
    actors: '',
    long: '',
    width: ''
  })
  const [count, setCount] = useState(0)

  const { isOpen, onClose } = useDisclosure()

  const sendInputDataForTask = useChangeInputData(task5)

  const sendResponseData = useSendInputData(`response/${task5}`)

  const handleSubmit = (event) => {
    event.preventDefault()

    const { actors, long, width } = sizeSceneForm
    const res = generateScene(actors, long, width)

    sendInputDataForTask.mutate(sizeSceneForm)

    setCount(countGoodPositions(res))
    sendResponseData.mutate({ data: count })
  }

  return (
    <>
      <Heading as="h1" size="md" textAlign="center">
        TASK-5
      </Heading>
      <VerticallyCenter
        isOpen={isOpen}
        onClose={onClose}
        text={tasks[4].task5}
        title={tasks[4].title}
      />
      <Box display="flex" alignItems="center" justifyContent="center" mt={20}>
        <Box maxW="2xl" p={50} textAlign="center">
          <Text mb={5} fontSize={20}>
            Matrix length
          </Text>
          <form onSubmit={handleSubmit}>
            <Box display="flex" mb={10} w="100%">
              <FormControl isRequired mr={20}>
                <FormLabel>Input Actors</FormLabel>
                <Input
                  placeholder="number of actors"
                  type="number"
                  value={sizeSceneForm.actors}
                  onChange={(e) =>
                    setSizeSceneForm({
                      ...sizeSceneForm,
                      actors: e.target.value
                    })
                  }
                />
              </FormControl>

              <FormControl isRequired mr={20}>
                <FormLabel>Input Long</FormLabel>
                <Input
                  placeholder=" long"
                  type="number"
                  value={sizeSceneForm.long}
                  onChange={(e) =>
                    setSizeSceneForm({
                      ...sizeSceneForm,
                      long: e.target.value
                    })
                  }
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Input Width</FormLabel>
                <Input
                  placeholder=" width"
                  type="number"
                  value={sizeSceneForm.width}
                  onChange={(e) =>
                    setSizeSceneForm({
                      ...sizeSceneForm,
                      width: e.target.value
                    })
                  }
                />
              </FormControl>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center">
              <Box>
                <Text mb={5} fontSize={20}>
                  Count the number of good positions
                </Text>

                <Button colorScheme="blue" type="submit">
                  Count
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        {count !== 0 && (
          <div>
            Number of good positions:{' '}
            <Box as="span" color="red" fontSize={20}>
              {count}
            </Box>
          </div>
        )}
      </Box>
    </>
  )
}

export default Task5
