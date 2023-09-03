import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

type Props = {
  url: string;
  username: string;
};

const ResetPassword = ({ url, username }: Props) => {
  return (
    <Html>
      <Head>
        <title>Request to reset password for {username} on Toiec</title>
      </Head>
      <Preview>Toiec - Reset password for {username}</Preview>
      <Tailwind>
        <Body>
          <Container>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-brand-tether text-white"
            >
              <path d="M14.08 20.188c-1.15 1.083 -3.02 1.083 -4.17 0l-6.93 -6.548c-.96 -.906 -1.27 -2.624 -.69 -3.831l2.4 -5.018c.47 -.991 1.72 -1.791 2.78 -1.791h9.06c1.06 0 2.31 .802 2.78 1.79l2.4 5.019c.58 1.207 .26 2.925 -.69 3.83c-3.453 3.293 -3.466 3.279 -6.94 6.549z"></path>
              <path d="M12 15v-7"></path>
              <path d="M8 8h8"></path>
            </svg>
            <Section>
              <Text>Hi {username},</Text>
              <Text>
                Someone recently requested a password change for your Toiec
                account.This request only available for 15 minutes. If you want
                to change your password, click the button below:
              </Text>
              <Button
                href={url}
                className="outline-0 focus:outline-0 active:outline-0 border-0 rounded transition-[background-color] font-medium flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-transparent"
              >
                Reset password
              </Button>
              <Text>
                If you don&apos;t want to change your password or didn&apos;t
                request this, just ignore and delete this message.
              </Text>
              <Text>
                To keep your account secure, please don&apos;t forward this
                email to anyone. See our Help Center for{' '}
                <Link>more security tips.</Link>
              </Text>
              <Text>Happy Learning!</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResetPassword;
