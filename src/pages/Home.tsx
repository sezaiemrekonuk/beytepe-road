import React from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'
import { FaExchangeAlt, FaHandshake, FaUniversity } from 'react-icons/fa'

const Feature = ({ title, text, icon }: { title: string; text: string; icon: any }) => {
  return (
    <Stack align={'center'} textAlign={'center'}>
      <Icon as={icon} w={10} h={10} color={'green.500'} />
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color={'green.800'}>
                Beytepe Road
              </Text>
              <br />
              <Text as={'span'} color={'green.600'} fontSize={'4xl'}>
                Modern Dönemin İpek Yolu
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Beytepe Road, boykot dönemlerinde toplulukların temel ihtiyaçlarını karşılamak için
              tasarlanmış modern bir takas platformudur. Hacettepe Üniversitesi öğrencileri için
              özel olarak geliştirilmiştir.
            </Text>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'green'}
                bg={'green.700'}
                _hover={{ bg: 'green.600' }}>
                Hemen Başla
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                leftIcon={<FaUniversity />}>
                @hacettepe.edu.tr ile Giriş
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Beytepe Road Logo'}
                fit={'contain'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={'/beyteperoad-logo.jpg'}
              />
            </Box>
          </Flex>
        </Stack>

        {/* Features Section */}
        <Box p={4}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={10}>
            <Feature
              icon={FaExchangeAlt}
              title={'Modern Takas Sistemi'}
              text={'Güvenli ve kolay bir şekilde ihtiyaçlarınızı takas edin.'}
            />
            <Feature
              icon={FaHandshake}
              title={'Güvenilir Topluluk'}
              text={'Sadece Hacettepe Üniversitesi öğrencilerine özel platform.'}
            />
            <Feature
              icon={FaUniversity}
              title={'Akademik Doğrulama'}
              text={'@hacettepe.edu.tr mail adresi ile güvenli giriş.'}
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
} 