import React, { useEffect, useState } from 'react'
import logo from "../../assest/Kids fashion logo.png"
import { Link } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button, Text, useToast, Container, Stack, Heading, RadioGroup, Radio, Input, Flex, Spacer, border } from '@chakra-ui/react'
import Emptycart from './Emptycart'
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios"
import Emptyshortlist from './Emptyshortlist'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import CartProductCard from './CartProductCard'
import { Showdelivery } from './Showdelivery'
import Payment from './Payment'
const Cart = () => {
    const [price, setprice] = useState(0);
    const [mrp, setmrp] = useState(0);
    const [discount,setDiscount]=useState(0)
    const [quant,setQuant]=useState(0)
    const toast = useToast()
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(false)
    const [radio, setRadio] = useState(false)

    const handlequantity = (value, id) => {
        const updatedData = cartdata.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + value } : item
        );
        localStorage.setItem("cartdata", JSON.stringify(updatedData));
        setUpdate(!update)
    };
    let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
    let shortlistdata = JSON.parse(localStorage.getItem("shortlistdata")) || [];
    useEffect(() => {
        let tempprice =
            cartdata.length > 0 &&
            cartdata.reduce((acc, item) => {
                return (acc += item.quantity * Number(item.price));
            }, 0);
        setprice(tempprice);
        let tempquntity =
        cartdata.length > 0 &&
        cartdata.reduce((acc, item) => {
            return (acc += item.quantity);
        }, 0);
        setQuant(tempquntity)
    setprice(tempprice);
        let tempmrp=cartdata.length>0 && cartdata.reduce((acc,item)=>{
            return (acc+=item.quantity * Number(item.mrp))
        },0)
        setmrp(tempmrp)
        setDiscount(tempmrp-tempprice)
    }, [cartdata, shortlistdata, handlequantity]);
    const removeitem = (id) => {
        const updatedData = cartdata.filter((el) => {
            return el.id !== id;
        });
        localStorage.setItem("cartdata", JSON.stringify(updatedData));
        setUpdate(!update)
    };
    const getData = (id) => {
        if (id) {
            return axios.get(`http://localhost:8080/MenKids/${id}`).then((res) => {
                res = res.data;
                setUpdate(!update)
                res = { ...res, quantity: 1 };
                let LSdata = JSON.parse(localStorage.getItem("cartdata")) || [];
                localStorage.setItem("cartdata", JSON.stringify([...LSdata, res]));
                toast({
                    title: `Item added Successfully`,
                    status: "success",
                    isClosable: true,
                });
            })
        }
        else {
            return axios.get(`http://localhost:8080/MenKids`).then((res) => {
                setData(res.data)
                setUpdate(!update)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const handleAddToCart = (id) => {
        getData(id)
    }
    return (
        <div>
            <div>
                <div>
                    <Link to="/"><img src={logo} alt="img" width="100px" /></Link>
                </div>
                <div style={{ backgroundColor: "#f0f0f0",paddingTop:"30px"}}>
                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList w={"80%"} m="auto">
                            <Tab>Shopping Cart ({quant})</Tab>
                            <Tab>My Shortlist</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel
                            >
                                <Box>
                                    {cartdata && cartdata.length == 0 ? (
                                        <Emptycart />
                                    ) : (
                                        cartdata &&
                                        cartdata.length > 0 &&
                                        <Box display="flex" m={"auto"} w="80%">
                                            <Box w={"80%"} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" bg="white" p="5">
                                                <Box width={"90%"} m="auto" border={"0.1px solid gray"} p="2" mt={"2"} bg="white">
                                                    <Box display={"flex"} gap="8px">
                                                        <img src="https://cdn.fcglcdn.com/brainbees/checkout/pers.jpg" alt="" width={"17px"} />
                                                        <Text fontSize='1xl'>Available offers:</Text>
                                                    </Box>
                                                    <li>5% Cashback upto Rs. 300 on Simpl (Minimum Order Value: Rs 1300) T&C</li>
                                                </Box>
                                                {
                                                    cartdata.map((el) => (
                                                        <CartProductCard
                                                            removeitem={removeitem}
                                                            handlequantity={handlequantity}
                                                            key={el.id}
                                                            {...el}
                                                        />
                                                    ))
                                                }

                                                <Box bg={"white"} direction={{ base: 'column', md: 'row' }} p="5">
                                                    {/* <Button colorScheme={"orange"} w="70%" mr={"5"} onClick={()=><Showdelivery/>}>ADD DELIVERY ADDRESS</Button> */}
                                                    <Showdelivery/>
                                                    {/* <Button>PLACE ORDER</Button> */}
                                                    <Payment price={price} />
         
                                                </Box>
                                            </Box>

                                            <Box w="40%" ml={"30px"}>
                                                <Box w={"90%"} m="20px auto" bg={"white"} p="20px">
                                                    <Box display={"flex"} gap="8px" mb={"10px"}>
                                                        <img src="https://cdn.fcglcdn.com/brainbees/checkout/pers.jpg" alt="" width={"17px"} />
                                                        <Text fontSize='1xl'>Coupon/Gift Certificate</Text>
                                                    </Box>
                                                    <Box pt="10px">
                                                        <RadioGroup defaultValue='1' pb={4}>
                                                            <Stack spacing={5} direction='row'>
                                                                <Radio colorScheme='orange' value='1' onClick={()=>setRadio(false)}>
                                                                Coupon
                                                                </Radio>
                                                                <Radio colorScheme='orange' value='2' onClick={()=>setRadio(true)}>
                                                                Gift Certificate
                                                                </Radio>
                                                             
                                                            </Stack>
                                                        </RadioGroup>

                                                        {
                                                            radio?<Input type="text" placeholder='Apply Gift Certifcate Code/Saving Code'/>:<Input type="text" placeholder="Enter your Coupen Code "/>
                                                        }
                                                    </Box>
                                                </Box>
                                                <Box w={"90%"} m="20px auto" bg={"white"} p="20px">
                                                <Text fontSize='1xl'><b>Use Club Cash </b> (₹ 0 Available)</Text>
                                                <Text>
                                                You have to earn a minimum of ₹100 Club Cash before you can redeem it in your future purchases.
                                                </Text>
                                                </Box>

                                                <Box w={"90%"} m="20px auto" bg={"white"} p="20px">
                                                    <Box borderBottom="dotted" mb={"10px"}>
                                                <Heading as='h5' size='sm'>Payment Information</Heading>
                                                   <Flex mt={"10px"}>
                                                    <Box>Value of Product(s)</Box>
                                                    <Spacer/>
                                                    <Box>₹ {mrp}</Box>
                                                   </Flex>
                                                   <Flex color={"#99c289"}>
                                                    <Box>Discount(-)</Box>
                                                    <Spacer/>
                                                    <Box>₹ {discount}</Box>
                                                   </Flex>
                                                   <Flex color={"#99c289"} mb="15px">
                                                    <Box>Shipping (+)</Box>
                                                    <Spacer/>
                                                    <Box>Free</Box>
                                                   </Flex>
                                                   </Box>
                                                  <Box borderBottom="dotted" mb={"10px"}>
                                                  <Flex mb="15px">
                                                    <b><Box>Sub Total</Box></b>
                                                    <Spacer/>
                                                    <b><Box>₹ {price}</Box></b>
                                                   </Flex>
                                                  </Box>

                                                  <Box mb={"10px"}>
                                                  <Flex mb="15px">
                                                    <b><Box>Final Payment</Box></b>
                                                    <Spacer/>
                                                    <b><Box>₹ {price}</Box></b>
                                                   </Flex>
                                                  </Box>
                                                </Box>
                                            </Box>
                                        </Box>

                                    )}
                                </Box>




                                <Box style={{ margin: "50px auto", background: "white", width: "80%" }}>
                                    <div className="container">
                                        <Swiper
                                            slidesPerView={5}
                                            spaceBetween={20}
                                            slidesPerGroup={3}
                                            loop={false}
                                            // loopFillGroupWithBlank={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation]}
                                            className="mySwiper"
                                        >
                                            {
                                                data.map((card) => {
                                                    if (card) {
                                                        return <SwiperSlide>
                                                            <Box style={{ height: "500px" }}>
                                                                <Box><img src={card.image} alt={card.title} /></Box>
                                                                <Box className='card_details'>
                                                                    <Text className='cardTitle' fontSize='15px'>{card.title}</Text>
                                                                    <br />
                                                                    <Text className='cardPrice'>₹ {card.price}</Text>

                                                                    <Box style={{ display: "flex", gap: "10px", padding: "10px 0px" }}>
                                                                        <Button colorScheme='orange' onClick={() => handleAddToCart(card.id)}>ADD TO CART</Button>
                                                                        <Button>SHORTLIST</Button>
                                                                    </Box>

                                                                </Box>
                                                            </Box>


                                                        </SwiperSlide>
                                                    }
                                                })

                                            }
                                        </Swiper>
                                    </div>
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Emptyshortlist />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default Cart