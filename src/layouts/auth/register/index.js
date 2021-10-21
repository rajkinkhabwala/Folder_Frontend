import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Flex,
  Heading,
  Link,
  Button,
  Avatar,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Box,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Input,
  chakra,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import authServices from '../../../services/authServices'
import { useQuery } from 'react-query'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function onSubmit(values) {
  return new Promise(resolve => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resolve();
    }, 3000);
  });
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = data => {
    fetchLogin(data);
  };
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const fetchLogin = (data) =>{
    authServices.register(data.username, data.password, data.username)
  }
  const { isLoading, data, error } = useQuery('login', fetchLogin)

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="10"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="blue.800" />
        <Heading color="blue.800">Welcome !!</Heading>
        <Text fontSize="2xl" color="blue.800">
          If you are new users please fill the form below to create your account
        </Text>
        <Box minW="500px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={5}
              p="1rem"
              backgroundColor="blue.800"
              boxShadow="md"
              borderRadius={5}
            >
              <FormControl isInvalid={errors.name}>
              <InputGroup
                    size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="white" />}
                  />
                  <Input
                    id="username"
                    name="username"
                    type="email"
                    placeholder="Email Address"
                    color="white"
                    focusBorderColor="pink"
                    {...register('username', {
                      required: 'This is required',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 4',
                      },
                    })}
                  />
                  <FormErrorMessage>
                  {errors.username && <span>This field is required</span>}
                  </FormErrorMessage>
                </InputGroup>
              <FormControl isInvalid={errors.name}>
                <InputGroup
                    size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="white" />}
                  />
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    color="white"
                    focusBorderColor="pink"
                    {...register('firstname', {
                      required: 'This is required',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 4',
                      },
                    })}
                  />
                  <FormErrorMessage>
                  {errors.username && <span>This field is required</span>}
                  </FormErrorMessage>
                </InputGroup>
              </FormControl>
              </FormControl>
              <FormControl>
                <InputGroup
                    size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    color="white"
                    children={<CFaLock color="white" />}
                  />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    color="white"
                    focusBorderColor="pink"
                    {...register('password', {
                      required: true,
                    })}
                  />
                  <FormErrorMessage size="lg">
                    {errors.password?.type === 'required' &&
                      'First name is required'}
                  </FormErrorMessage>
                  <InputRightElement width="60px">
                    <Button h="28px" size="sm" mr="2" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button
                  variant="solid"
                  size="sm"
                  colorScheme="white"
                  onClick={onOpen}
                  float="right"
                  p={0}
                >
                  Forgot Password?
                </Button>
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      hello world is lorem500 this is fdkssdkb sedgnsjd eofj eig
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </FormControl>
              <Button
                variant="solid"
                size="lg"
                colorScheme="pink"
                isLoading={isLoading}
                type="submit"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
