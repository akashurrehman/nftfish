import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
import Modal from '../Modal';
import Spacing from '../Spacing';

export default function PrivacyAndTerms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Assuming you have legal content for privacy policy and terms of service
  const privacyPolicyContent = `
    <h2>Privacy Policy</h2>
    <p>Your privacy is important to us. This privacy statement explains what personal data we collect from you and how we use it.</p>
    <p>We collect personal data such as name, email, and address for the purpose of providing our services to you.</p>
    <p>...</p>
  `;

  const termsOfServiceContent = `
    <h2>Terms of Service</h2>
    <p>These terms govern your use of our website and services. By using our website, you agree to these terms.</p>
    <p>We provide our services "as is" and do not guarantee their availability or accuracy.</p>
    <p>...</p>
  `;

  pageTitle('Privacy & Terms');

  return (
    <>
      <Section id="privacy-policy">
        <Spacing lg="100" md="70" />
        <Section className="container">
          <SectionHeading title="Privacy Policy" />
          <Spacing lg="50" md="30" />
          <Section tag="div" dangerouslySetInnerHTML={{ __html: privacyPolicyContent }} />
        </Section>
        <Spacing lg="100" md="70" />
      </Section>

      <Section id="terms-of-service">
        <Spacing lg="100" md="70" />
        <Section className="container">
          <SectionHeading title="Terms of Service" />
          <Spacing lg="50" md="30" />
          <Section tag="div" dangerouslySetInnerHTML={{ __html: termsOfServiceContent }} />
        </Section>
        <Spacing lg="100" md="70" />
      </Section>

      {/* Optional: Contact form or additional legal disclaimers */}
      <Section id="contact">
        <Spacing lg="100" md="70" />
        <Section className="container">
          <SectionHeading title="Contact Us" />
          <Spacing lg="50" md="30" />
          <Section className="row">
            <Section className="col-lg-6">
              {/* Example: Contact Form or Contact Information */}
              <Modal modalType="connect" btnText="Connect" />
            </Section>
          </Section>
        </Section>
        <Spacing lg="100" md="70" />
      </Section>
    </>
  );
}
