import { Body, Container, Head, Html, Preview, Text } from "@react-email/components";

import * as React from "react";

interface ContactEmailProps {
  name: string;
  message: string;
}

const SuccessEmail = ({ name, message }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{name} Viewed Your Portfolio!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Hi Tunji,</Text>
          <Text style={paragraph}>{message}</Text>
          <Text style={paragraph}>Regards, {name}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default SuccessEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};
