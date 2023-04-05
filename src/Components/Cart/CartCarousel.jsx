import { Box,Button,Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
export const CartCarousel = ({data,handleAddToShortList,handleAddToCart}) => {
  return (
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
                                                                        <Button onClick={()=>handleAddToShortList(card.id)}>SHORTLIST</Button>
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
  )
}
