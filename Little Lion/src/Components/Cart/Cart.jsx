import React from 'react'
import logo from "../../assest/Kids fashion logo.png"
import { Link } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Emptycart from './Emptycart'
import Emptyshortlist from './Emptyshortlist'

const Cart = () => {
    return (
        <div>
            <div>
                <div>
                    <Link to="/"><img src={logo} alt="img" width="100px" /></Link>
                </div>
                <div  style={{backgroundColor:"#f0f0f0",height:"100vh"}}>
                    <Tabs>
                        <TabList>
                            <Tab>Shopping Cart</Tab>
                            <Tab>My Shortlist</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <Emptycart/>
                            </TabPanel>
                            <TabPanel>
                                <Emptyshortlist/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default Cart