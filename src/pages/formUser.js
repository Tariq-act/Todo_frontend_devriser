import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Form from '@/components/Form/Form';
import Users from '@/components/Users/Users';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  margin-top: 100px;

  @media (min-width: 960px) {
    width: 50%;
    height: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;

  @media (min-width: 960px) {
    width: 50%;
    height: 100%;
  }
`;

const UsersContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function FormUser() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Container>
        <Left>
          <Form />
        </Left>
        <Right>
          <UsersContainer>
            <Users />
          </UsersContainer>
        </Right>
      </Container>
    </>
  );
}
