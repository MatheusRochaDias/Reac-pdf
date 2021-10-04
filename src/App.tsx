import React from "react";
import logo from './logo.png';
import {
  Box,
  Flex,
  Center,
  Table,
  Text,
  Tr,
  Tfoot,
  Thead,
  Image,
  Divider,
  Th,
  Tbody,
} from "@chakra-ui/react";


import ReactToPrint from "react-to-print";
function MyApp() {
  return (
    <Box>
      <Box padding="40px" w="800px" h="842px" bg="white" ml="auto" mr="auto">
        <Box>
          <Center
            w="100%"
            h="8%"
            fontSize="34px"
            fontWeight="500"
            fontFamily="arial"
            color="#cccccc"
            paddingBottom="10px"
          >
            INVOICE{" "}
          </Center>
          <Flex w="100%">
            <Box flexDir="column" w="40%" h="100%">
              <Image
                src="https://api.kombinations.wedev.software/media/image_institution/SCOND.jpg"
                alt="Logo"
                paddingLeft="110px"
                boxSize="110px"
              />
            </Box>

            <Box w="60%" flexDir="column" h="100%">
              <Text
                fontSize="30px"
                fontWeight="500"
                w="90%"
                color="Black"
                fontFamily="arial"
                textAlign="end"
              >
                Beneficiary
              </Text>

              <Text
                fontSize="15px"
                fontWeight="500"
                mt="-30px"
                w="90%"
                color="Black"
                fontFamily="arial"
                textAlign="end"
              >
                MULLER CAVALCANTE COMPUTAÇÃO E TECNOLOGIA LTDA.{" "}
              </Text>

              <Text
                fontSize="15px"
                fontWeight="500"
                w="90%"
                color="Black"
                fontFamily="arial"
                textAlign="end"
              >
                10.788.508/0001-50
              </Text>
              <Text
                fontSize="15px"
                fontWeight="500"
                mt="-15px"
                w="90%"
                color="Black"
                fontFamily="arial"
                textAlign="end"
              >
                Niterói, Rio de Janeiro
              </Text>
              <Text
                fontSize="15px"
                fontWeight="500"
                w="90%"
                mt="-15px"
                color="Black"
                fontFamily="arial"
                textAlign="end"
              >
                BRAZIL
              </Text>
            </Box>
          </Flex>
          <Box paddingTop="0px" mt="-5px">
            <hr></hr>
          </Box>
          <Flex w="100%">
            <Box flexDir="column" w="50%">
              <Text
                fontSize="30px"
                fontWeight="500"
                w="90%"
                color="Black"
                fontFamily="arial"
                textAlign="initial"
              >
                Bill To
              </Text>
              <Text
                fontSize="15px"
                fontWeight="500"
                w="90%"
                color="Black"
                mt="-30px"
                fontFamily="arial"
                textAlign="initial"
              >
                ZPLAY (HK) TECHNOLOGY CO., Limited
              </Text>
              <Text
                fontSize="15px"
                fontWeight="500"
                w="90%"
                color="Black"
                fontFamily="arial"
                textAlign="initial"
              >
                FLAT/RM 606 6/F HOLLYWOOD CENTRE NO 77-91 QUEENS ROAD WEST
                SHEUNG WAN HK
              </Text>
              <Text
                fontSize="15px"
                fontWeight="500"
                w="90%"
                color="Black"
                mt="-15px"
                fontFamily="arial"
                textAlign="initial"
              >
                HONG KONG
              </Text>
            </Box>

            <Box w="50%" flexDir="column" paddingTop="20px">
              <Flex w="100%">
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  w="50%"
                  textAlign="initial"
                >
                  Due Date:
                </Text>
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  w="50%"
                  textAlign="end"
                >
                  30/09/2021{" "}
                </Text>
              </Flex>
              <Flex w="100%">
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  w="50%"
                  mt="-10px"
                  textAlign="initial"
                >
                  Invoice:{" "}
                </Text>
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  mt="-10px"
                  fontFamily="arial"
                  w="50%"
                  textAlign="end"
                >
                  WTM_IN_1509
                </Text>
              </Flex>
              <Flex w="100%">
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  w="50%"
                  mt="-10px"
                  textAlign="initial"
                >
                  Email:{" "}
                </Text>
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  w="50%"
                  mt="-10px"
                  textAlign="end"
                >
                  lucas.pessoa@zplay.com{" "}
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Divider />
        <hr></hr>
        <Table width="100%" border="10px" borderColor="red">
          <Thead>
            <Tr>
              <Th w="10%">
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  textAlign="center"
                >
                  Nº
                </Text>
              </Th>
              <Th w="60%">
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  textAlign="initial"
                >
                  Description
                </Text>
              </Th>
              <Th w="15%">
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  textAlign="center"
                >
                  Quantity
                </Text>
              </Th>
              <Th w="15%">
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  textAlign="center"
                >
                  Value
                </Text>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Th w="10%">
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  textAlign="center"
                >
                  1{" "}
                </Text>
              </Th>
              <Th w="60%">
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  textAlign="initial"
                >
                  Game Name: Fire and Ice Run (Funding)
                </Text>
              </Th>
              <Th w="15%">
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  textAlign="center"
                >
                  1
                </Text>
              </Th>
              <Th w="15%">
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  color="Black"
                  fontFamily="arial"
                  textAlign="center"
                >
                  $1,500.00
                </Text>
              </Th>
            </Tr>
          </Tbody>
        </Table>
        <hr></hr>
        <Flex w="100%">
          <Box flexDir="column" w="50%" h="100%"></Box>

          <Box w="50%" pl="100px" pr="60px" pt="40px" flexDir="column" h="100%">
            {" "}
            <Flex w="100%">
              <Text
                fontSize="15px"
                fontWeight="500"
                color="Black"
                fontFamily="arial"
                w="50%"
                mt="-10px"
                textAlign="initial"
              >
                Amount:
              </Text>
              <Text
                fontSize="15px"
                fontWeight="500"
                color="Black"
                mt="-10px"
                fontFamily="arial"
                w="50%"
                textAlign="end"
              >
                $1,500.00 USD
              </Text>
            
            </Flex>
            <hr></hr>
          </Box>
        </Flex>
        
        <Flex w="100%" pt="20px">
          <Box w="55%" flexDir="column" h="100%">
            <Text
              fontSize="23px"
              fontWeight="500"
              w="90%"
              color="Black"
              fontFamily="arial"
              textAlign="initial"
            >
              Payment terms and conditions{" "}
            </Text>

            <Text
              fontSize="15px"
              fontWeight="500"
              w="90%"
              color="Black"
              fontFamily="arial"
              textAlign="initial"
            >
              DEPOSIT FOR OUR LOCAL PAYMENT PROCESSOR:
            </Text>
            <Text
              fontSize="15px"
              fontWeight="500"
              w="90%"
              color="Black"
              fontFamily="arial"
              textAlign="initial"
            >
              Correspondent Bank: STANDARD CHARTERED BANK Swift (BIC CODE):
              SCBLUS33
            </Text>
            <Text
              fontSize="15px"
              fontWeight="500"
              w="90%"
              color="Black"
              fontFamily="arial"
              textAlign="initial"
            >
              Field 57 - Account: 3544026839001 Beneficiary Bank: Banco Topázio
              S/A Swift (BIC CODE): TOPZBRRSXXX
            </Text>
            <Text
              fontSize="15px"
              fontWeight="500"
              w="90%"
              color="Black"
              fontFamily="arial"
              textAlign="initial"
            >
              Field 59 IBAN: BR9207679404000000012492088C1
            </Text>

            <Text
              fontSize="15px"
              fontWeight="500"
              w="90%"
              color="Black"
              fontFamily="arial"
              textAlign="initial"
            >
              Beneficiary: WTM DO BRASIL SERVICOS LTDA Field 70 Details of
              Payment: B&T Corretora de Câmbio
            </Text>

            <Text
              fontSize="25px"
              fontWeight="500"
              w="90%"
              color="Black"
              fontFamily="arial"
              textAlign="initial"
            >
              Observations
            </Text>
            <Text
              fontSize="15px"
              fontWeight="500"
              w="90%"
              color="Black"
              fontFamily="arial"
              textAlign="initial"
            >
              Game Name: Fire and Ice Run (Funding)
            </Text>
            <Text
              fontSize="15px"
              fontWeight="500"
              w="90%"
              
              mt="-10px"
              color="Black"
              fontFamily="arial"
              textAlign="initial"
            >
              Period of Campaign: Starting on Sep. 2021
            </Text>
            <Text
              fontSize="15px"
              fontWeight="500"
              w="90%"
              mt="-10px"
              color="Black"
              fontFamily="arial"
              textAlign="initial"
            >
              Net Remittance (USD): 1,500.00
            </Text>
          </Box>

          <Box w="45%" flexDir="column" h="100%"></Box>
        </Flex>
        <Box align="center">
        <Image src={logo} className="App-logo" alt="logo" />
            </Box>
      </Box>
    </Box>
  );
}
export default MyApp;
