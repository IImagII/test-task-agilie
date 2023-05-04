import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import Task1 from '../components/Task1'
import Task2 from '../components/Task2'
import Task3 from '../components/Task3'
import Task4 from '../components/Task4'

export const Home = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box maxW={900}>
          <Tabs variant="enclosed" size="md">
            <TabList>
              <Tab>Task1</Tab>
              <Tab>Task2</Tab>
              <Tab>Task3</Tab>
              <Tab>Task4</Tab>
              <Tab>Task5</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Task1 />
              </TabPanel>
              <TabPanel>
                <Task2 />
              </TabPanel>
              <TabPanel>
                <Task3 />
              </TabPanel>
              <TabPanel>
                <Task4 />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  )
}
