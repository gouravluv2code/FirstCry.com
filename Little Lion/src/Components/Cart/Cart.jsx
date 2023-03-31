import React, { useEffect, useState } from 'react'
import logo from "../../assest/Kids fashion logo.png"
import { Link } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button, Text, useToast } from '@chakra-ui/react'
import Emptycart from './Emptycart'
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios"
import Emptyshortlist from './Emptyshortlist'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import CartProductCard from './CartProductCard'
const Cart = () => {
    const [price, setprice] = useState(0);
    const toast=useToast()
    const [data,setData]=useState([])
    const handlequantity = (value, id) => {
      const updatedData = cartdata.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + value} : item
      );
      localStorage.setItem("cartdata", JSON.stringify(updatedData));
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
    }, [cartdata, shortlistdata, handlequantity]);
    const removeitem = (id) => {
      const updatedData = cartdata.filter((el) => {
        return el.id !== id;
      });
      localStorage.setItem("cartdata", JSON.stringify(updatedData));
    };
    const getData = (id) => {
        if (id) {
            return axios.get(`http://localhost:8080/MenKids/${id}`).then((res) => {
                res = res.data;
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
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    useEffect(() => {
        getData()
    }, [cartdata])
    const handleAddToCart = (id) => {
        getData(id)
    }


    return (
        <div>
            <div>
                <div>
                    <Link to="/"><img src={logo} alt="img" width="100px" /></Link>
                </div>
                <div style={{ backgroundColor: "#f0f0f0" }}>
                    <Tabs >
                        <TabList>
                            <Tab>Shopping Cart</Tab>
                            <Tab>My Shortlist</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel display={"flex"}
                                flexDirection="column"
                                alignItems={"self-start"}
                                justifyContent={"left"}>
                                {cartdata && cartdata.length == 0 ? (
                                    <Emptycart />
                                ) : (
                                    cartdata &&
                                    cartdata.length > 0 &&
                                    cartdata.map((el) => (
                                        <CartProductCard
                                            removeitem={removeitem}
                                            handlequantity={handlequantity}
                                            key={el.title}
                                            {...el}
                                        />
                                    ))
                                )}

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
                                                                        <Button >SHORTLIST</Button>
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