import React from 'react';

import { Container, Photo, Name, Email } from './styles';

export function User() {
  return (
    <Container>
      <Photo
        source={{ uri: "https://github.com/kauefontes.png" }}
      />

      <Name>
        Kaue
      </Name>

      <Email>
        kaue@quewui.dev
      </Email>
    </Container>
  );
}