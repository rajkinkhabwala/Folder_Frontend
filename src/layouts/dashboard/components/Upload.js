import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Flex,
  Text,
  Button,
  Textarea,
  Box,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

function Upload() {      
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  
  function onSubmit(values) {
    let formData = new FormData();
    
    formData.append('name', values.name);
		formData.append('object', values.object[0]);
    axios.post('http://localhost:8000/api/files/', formData, {
      headers: {
        'Content-Type': 'application/json',
		    accept: 'application/json',
      }
    }).then((response) => console.log(response))
    .catch((error) => console.log(error))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <FormControl isInvalid={errors.title} p="2">
        <FormLabel htmlFor="name">File Title</FormLabel>
        <Input
          id="title"
          placeholder="Title"
          {...register('name', {
            required: 'This is required',
            minLength: {
              value: 4,
              message: 'Minimum length should be 4',
            },
          })}
        />
        <FormErrorMessage>
          {errors.title && errors.title.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.objects} p="2">
        <FormLabel htmlFor="name">File Upload</FormLabel>
        <Input
        type="file"
          {...register('object')}
          multiple={false}
        />
        <FormErrorMessage>
          {errors.objects && errors.objects.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.descriptions} p="2">
        <FormLabel htmlFor="name">File Descriptions</FormLabel>
        <Textarea
          id="descriptions"
          placeholder="File Descriptions"
          {...register('description', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.descriptions && errors.descriptions.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Upload;
