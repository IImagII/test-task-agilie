import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react'

import Task1 from '../components/Task1'
import Task2 from '../components/Task2'
import Task3 from '../components/Task3'
import Task4 from '../components/Task4'
import Task5 from '../components/Task5'
import { Header } from '../components/header/Header'

export const Home = () => {
  const tasks = [
    { name: 'Task1', component: <Task1 /> },
    { name: 'Task2', component: <Task2 /> },
    { name: 'Task3', component: <Task3 /> },
    { name: 'Task4', component: <Task4 /> },
    { name: 'Task5', component: <Task5 /> }
  ]

  const taskTitles = tasks.map((task) => task.name)

  return (
    <>
      <Header />
      <Container
        maxW="3xl"
        display="flex"
        justifyContent="center"
        height="100vh"
      >
        <Box maxW="100%">
          <Tabs variant="enclosed" size="md">
            <TabList>
              {taskTitles.map((title) => (
                <Tab key={title}>{title}</Tab>
              ))}
            </TabList>
            <TabPanels height="calc(100vh - 48px)">
              {tasks.map(({ name, component }) => (
                <TabPanel key={name} height="100%">
                  {component}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  )
}
