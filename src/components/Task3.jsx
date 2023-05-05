import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useDisclosure
} from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'

import { tasks } from '../../data'
import { VerticallyCenter } from '../hooks/modal/VerticallyCenter'
import useDebounce from '../hooks/useDebounce'
import { useChangeInputData, useSendInputData } from '../hooks/useSendInputData'
import { findOptimalDiscCombination } from '../utils/task3/task3'
import { transformDisplay } from '../utils/task3/transformDisplay'

const Task3 = () => {
  const task3 = 'task3'

  const [currentWeight, setCurrentWeight] = useState('')

  const debounceWeight = useDebounce(currentWeight, 700)

  const [displayShow, setDisplayShow] = useState()

  const nextWeight = useMemo(() => {
    if (debounceWeight) {
      return findOptimalDiscCombination(parseInt(debounceWeight))
    }
  }, [debounceWeight])

  const sendInputDataForTask = useChangeInputData(task3)

  const sendResponseData = useSendInputData(`response/${task3}`)

  const handleCurrentWeight = (e) => {
    const data = e.target.valueAsNumber
    setCurrentWeight(data)
    sendInputDataForTask.mutate({ data: data })
  }

  const { isOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (nextWeight) {
      const res = transformDisplay(nextWeight.plates)
      sendResponseData.mutate(nextWeight)
      setDisplayShow(res)
    }
  }, [nextWeight])

  return (
    <>
      <Heading as="h1" size="md" textAlign="center">
        TASK-3.1
      </Heading>
      <VerticallyCenter
        isOpen={isOpen}
        onClose={onClose}
        text={tasks[2].task3}
        title={tasks[2].title}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box maxW="2xl" p={150}>
          <FormControl isRequired mr={20} mb={15}>
            <FormLabel>Сurrent weight</FormLabel>
            <Input
              placeholder="current weight"
              type="number"
              value={currentWeight}
              // onChange={(e) => setCurrentWeight(e.target.valueAsNumber)}
              onChange={handleCurrentWeight}
            />
          </FormControl>{' '}
          <Box>
            {nextWeight && nextWeight.plates ? (
              <Box as="div" textAlign="center">
                <Box as="p">
                  Next weight to beat:{' '}
                  <Box as="span" color="red" fontSize={20}>
                    {nextWeight.totalWeight.toFixed(1)}
                  </Box>
                </Box>
                <Box>
                  minimum next set of disc loaders:
                  <br />{' '}
                  <Box as="span" color="red" fontSize={20}>
                    {displayShow}{' '}
                  </Box>
                </Box>
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
