import React, { useCallback } from 'react';
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
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { FiUpload } from 'react-icons/fi';
import Upload from './Upload';


export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDir="column" justifyContent="space-between" h="100vh">
      <Flex flexDir="column" as="nav">
        <Heading
          mt={50}
          mb={70}
          fontSize="4xl"
          alignSelf="center"
          letterSpacing="wide"
          m="14"
        >
          Folders.
        </Heading>
        <Flex flexDir="column" align="center" justifyContent="center" mb={50}>
          <Link as={ReachLink} to="/">
            <Button
              leftIcon={<FiUpload />}
              variant="solid"
              size="lg"
              colorScheme="pink"
              onClick={onOpen}
            >
              Upload
            </Button>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Upload a File</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Upload />
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Link>
        </Flex>
        <Flex flexDir="column" align="center" justifyContent="center">
          <Link as={ReachLink} to="/">
            <Button
              variant="link"
              size="lg"
              color="white"
              _hover={{ color: 'pink.400' }}
            >
              Item 1
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex
        flexDir="column"
        alignItems="center"
        mt={5}
        bgColor="pink.400"
        p="15"
      >
        <Avatar
          size="xl"
          my={2}
          src="https://pbs.twimg.com/profile_images/667969617072168960/elrxmGCn_400x400.jpg"
        />
        <Text textAlign="center" fontSize="xl">
          Raj Kinkhabwala
        </Text>
      </Flex>
    </Flex>
  );
}
