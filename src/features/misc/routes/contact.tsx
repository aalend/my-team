import { Head } from '@/components/head';
import { Container, Splitter } from '@/components/ui';
import { Content, Form } from '@/features/contact-form/components';

export function Contact() {
  return (
    <>
      <Head description='Contact MyTeam Multipage' title='Contact' />
      <Container>
        <Splitter>
          <Content />
          <Form />
        </Splitter>
      </Container>
    </>
  );
}
