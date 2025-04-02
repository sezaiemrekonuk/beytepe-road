import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
import { FaExchangeAlt, FaHandshake, FaShieldAlt, FaUsers } from 'react-icons/fa'

const Feature = ({ title, text, icon }: { title: string; text: string; icon: any }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'brand.500'}
        mb={1}
      >
        <Icon as={icon} w={8} h={8} />
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function LandingPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Container maxW={'7xl'} py={{ base: 20, md: 28 }}>
        <Flex
          align={'center'}
          gap={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} gap={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text as={'span'} position={'relative'} color={'brand.500'}>
                Beytepe Road
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Modern dünyada takas sistemini yeniden canlandırıyoruz. İhtiyaçlarınızı paylaşın,
              elinizdekileri takas edin. Sadece @hacettepe.edu.tr e-posta adresleri ile kayıt olun.
            </Text>
            <Flex
              gap={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'brand'}
                bg={'brand.500'}
                _hover={{ bg: 'brand.600' }}
              >
                Hemen Başla
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
              >
                <FaHandshake style={{ marginRight: '8px' }} />
                Nasıl Çalışır?
              </Button>
            </Flex>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Image
              alt="Beytepe Road Logo"
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src="/beyteperoad-logo.jpg"
              rounded={'xl'}
              shadow={'2xl'}
            />
          </Flex>
        </Flex>
      </Container>

      {/* Features Section */}
      <Box p={4}>
        <Container maxW={'7xl'} py={12}>
          <Stack gap={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Neden Beytepe Road?</Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
              Modern takas sistemimiz ile ihtiyaçlarınızı karşılayın
            </Text>
          </Stack>

          <Container maxW={'7xl'} mt={10}>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap={{ base: 10, md: 4 }}
              py={10}
            >
              <Feature
                icon={FaExchangeAlt}
                title={'Kolay Takas'}
                text={
                  'Basit ve kullanıcı dostu arayüzümüz ile takas işlemlerinizi hızlıca gerçekleştirin.'
                }
              />
              <Feature
                icon={FaShieldAlt}
                title={'Güvenli Sistem'}
                text={
                  'Sadece @hacettepe.edu.tr e-posta adresleri ile kayıt olarak güvenli bir topluluk oluşturuyoruz.'
                }
              />
              <Feature
                icon={FaUsers}
                title={'Topluluk Odaklı'}
                text={
                  'Hacettepe Üniversitesi öğrencileri ve personeli için özel olarak tasarlanmış bir platform.'
                }
              />
            </SimpleGrid>
          </Container>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg={'gray.50'}>
        <Container
          maxW={'7xl'}
          py={16}
          px={{ base: 4, sm: 6, lg: 8 }}
          textAlign={'center'}
        >
          <Heading
            as={'h2'}
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight={700}
            textAlign={'center'}
            mb={8}
          >
            Hemen Katılın
          </Heading>
          <Text fontSize={'xl'} color={'gray.600'} mb={8}>
            @hacettepe.edu.tr e-posta adresiniz ile kayıt olun ve takas topluluğumuza katılın.
          </Text>
          <Button
            size={'lg'}
            colorScheme={'brand'}
            bg={'brand.500'}
            _hover={{ bg: 'brand.600' }}
            px={8}
            rounded={'full'}
          >
            Kayıt Ol
          </Button>
        </Container>
      </Box>
    </Box>
  )
} 