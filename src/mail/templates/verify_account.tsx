import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface VerifyAccountProps {
  code: string;
  username: string;
}

export const VerifyAccount = ({ code, username }: VerifyAccountProps) => {
  return (
    <Html>
      <Head />
      <Preview>Verify your Toiec account</Preview>
      <Tailwind>
        <Body className="p-4">
          <Container className="border border-solid p-11">
            <Section>
              <Text>Hi {username},</Text>
              <Text>
                We're happy you signed up for Toiec. To complete your
                registration, please put this code into the verification form:
              </Text>
              <Text className="font-medium">{code}</Text>
              <Text>
                We hope you enjoy using Toiec. If you have any questions or need
                help, check out our{' '}
              </Text>
              <Link className="text-underline" href="">
                Help Center
              </Link>
              <Text>
                Thanks, <br /> The Toiec Team
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerifyAccount;
