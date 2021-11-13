import React from 'react'
import { Flex, Center, Heading, Box, FormControl, FormLabel, Input, FormErrorMessage, ButtonGroup, Button }  from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import authServices from '../../../services/authServices';

export default function Register() {

  const { handleSubmit, register, formState: { errors, isSubmitting, isSubmitSuccessful }} = useForm();

  const onSubmit = (data) => 
  {
    authServices.register(data.username, data.password, data.email).then((res) => console.log(res)).catch((err) => console.log(err));
  }
  return (
  <Flex bg="teal">
      <Center w="100vw" h="100vh">
      <Box bg="white" w="xl" p={6}  shadow="md" borderRadius="md">
      <Center>
      <Heading color="pink.300">Register</Heading>
      </Center>
      <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.username} p="2">
      <FormLabel htmlFor="name">Username</FormLabel>
        <Input
          id="username"
          placeholder="Enter your username"
          {...register('username', {
            required: 'This is required',
            minLength: {
              value: 4,
              message: 'Minimum length should be 4',
            },
          })}
        />
        <FormErrorMessage>
          {errors.username && errors.username.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email} p="2">
      <FormLabel htmlFor="name">Email</FormLabel>
        <Input
          id="email"
          placeholder="Enter your email"
          {...register('email', {
            required: true,
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "This field is an Email Field."
            }
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password} p="2">
      <FormLabel htmlFor="name">Password</FormLabel>
        <Input
          id="password"
          placeholder="Enter your password"
          type="password"
          {...register('password', {
            required: 'This is required',
            minLength: {
              value: 4,
              message: 'Minimum length should be 4',
            },
          })}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <ButtonGroup m={2}>
          <Button type="submit" title="Submit" colorScheme="pink">Register</Button>
      </ButtonGroup>
      </form>
      </Box>
      </Center>
  </Flex>
  )
}
