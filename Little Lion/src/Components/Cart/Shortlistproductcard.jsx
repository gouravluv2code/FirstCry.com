import {
  Box,
  Heading,
  Text,
  Img,
  Center,
  HStack,
  Button,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export default function Shortlistproductcard({id,image,title,mrp,price,removeitemshortlist}) {
  return (
    <Center minW={"0"} py={6}>
      <Box
        w="30%"
        height={"370px"}
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="rgb(166,171,183)">
        <Box h={'200px'}>
          <Img
            src={image}
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="100%"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Box
            bg="white"
            display={'inline-block'}
            px={2}
            py={1}
            color="white"
            mb={2}>
            <Text color="black" fontSize={'xs'} fontWeight="bold">
             {title}
            </Text>
          </Box>
          <Text textDecorationLine={"line-through"} color={'gray.500'} noOfLines={2}>
          MRP:₹ {mrp}
          </Text>
          <Heading color={'black'} fontSize={'md'} noOfLines={1}>
           Price:₹ {price}
          </Heading>
        </Box>
        <HStack color="black">
        <Button onClick={()=>removeitemshortlist(id)} color="rgb(255,112,67)" backgroundColor={"white"} width={"300px"}><Text paddingRight={"5px"} textAlign={"left"}>Move to Cart</Text><DeleteIcon color={"rgb(255,112,67)"} /></Button>
        </HStack>
      </Box>
    </Center>
  );
}