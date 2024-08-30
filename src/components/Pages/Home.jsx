import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
//import Accordion from '../Accordion'
import Card from '../Card'
import ContactForm from '../ContactForm'
import ContactInfo from '../ContactInfo'
import FunFact from '../FunFact'
import Hero from '../Hero'
//import IconBox from '../IconBox'
import Modal from '../Modal'
import Section from '../Section'
import SectionHeading from '../SectionHeading'
import ImageBoxSlider from '../Slider/ImageBoxSlider'
//import RoadmapSlider from '../Slider/RoadmapSlider'
import Spacing from '../Spacing'
//import Team from '../Team'

export default function Home() {
  pageTitle('Home');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  /* const accordionData1 = [
    {
      question: 'How to Mint an NFT?',
      answer: 'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat ion in some form. There are many variations of passages. There are many variations of pass ges.'
    },
    {
      question: 'What happens once purchase NFT?',
      answer: 'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat ion in some form. There are many variations of passages. There are many variations of pass ges.'
    },
    {
      question: 'How can I obtain NFTs?',
      answer: 'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat ion in some form. There are many variations of passages. There are many variations of pass ges.'
    },
    {
      question: 'Do NFTs appreciate in value?',
      answer: 'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat ion in some form. There are many variations of passages. There are many variations of pass ges.'
    }
  ]
  const accordionData2 = [
    {
      question: 'How can I obtain NFTs?',
      answer: 'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat ion in some form. There are many variations of passages. There are many variations of pass ges.'
    },
    {
      question: 'How can I obtain NFTs?',
      answer: 'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat ion in some form. There are many variations of passages. There are many variations of pass ges.'
    },
    {
      question: 'Do NFTs appreciate in value?',
      answer: 'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat ion in some form. There are many variations of passages. There are many variations of pass ges.'
    },
    {
      question: 'How to Mint an NFT?',
      answer: 'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat ion in some form. There are many variations of passages. There are many variations of pass ges.'
    },
    {
      question: 'How can I obtain NFTs?',
      answer: 'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat ion in some form. There are many variations of passages. There are many variations of pass ges.'
    }
  ] */
  return (
    <>
      <Hero 
        title='Discover &amp; Collect <br />NFT Artwork'
        mintNumber='0'
        mintMax='725'
        mintPrice='0.02'
        mintDeathLine='22 July' 
        bgUrl='/images/hero_bg.jpeg'
        heroImageUrl='/images/hero_img.svg' 
        animatedUrl='/images/hero_img_sm.png' 
        overlay='0.3'
        bgOpacity='0.4'
      />
      <Section tag='section' id='about'>
        <Spacing lg='100' md='70'/>
        <Section className="container">
          <Section className="row align-content-center">
            <Section className="col-lg-6">
              <Section className='cs-right_space_40'>
                <SectionHeading 
                  title='About Us'
                  subtitle='Our Story'
                />
                <Spacing lg='20' md='20'/>
                <Section tag='p'>As of January 2012, there were more than 21,000 ERC20 token contracts. We Built this Template because Ethereum ECO system is the most popular Platform. Among the most successful ERC20 token sales are EOS, Bancor, Qash and Bankex raising over $70 Million each.</Section>
                <Section tag='p'>As of January 2012, there were more than 21,000 ERC20 token contracts. We Built this Template because Ethereum ECO system is the most popular Platform. Among the most successful ERC20 token sales are EOS, Bancor, Qash and Bankex raising over $70 Million each.</Section>
                <Spacing lg='25' md='15'/>
                <Section className="cs-btn_group">
                  <Modal modalType='connect' btnText='Connect' />
                </Section>
              </Section>
              <Spacing lg='0' md='40'/>
            </Section>
            <Section className="col-lg-6">
              <img src="/images/about_img.svg" alt="About" />
            </Section>
          </Section>
        </Section>
        <Spacing lg='100' md='70'/>
      </Section>
      {/* <Section className="container">
        <Section className="row">
          <Section className="col-lg-4">
            <IconBox 
              title='Gaming NFTS' 
              subtitle='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
            >01</IconBox>
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-lg-4">
            <IconBox 
              title='Play To Earn' 
              subtitle='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
            >02</IconBox>
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-lg-4">
            <IconBox 
              iconNumber='02' 
              title='Metaverse Ready' 
              subtitle='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
            >03</IconBox>
            <Spacing lg='25' md='25'/>
          </Section>
        </Section>
      </Section> */}
      <Spacing lg='70' md='45'/>
      <ImageBoxSlider/>
      <Spacing lg='90' md='65'/>
      <Section className="container">
        <Section className="row">
          <Section className="col-lg-3 col-6">
            <FunFact 
              number='365'
              title='Total Items'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-lg-3 col-6">
            <FunFact 
              number='1125'
              title='Total Owners'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-lg-3 col-6">
            <FunFact 
              number='1.72'
              title='Floor Price'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-lg-3 col-6">
            <FunFact 
              number='42.2'
              title='Volume Traded'
            />
            <Spacing lg='25' md='25'/>
          </Section>
        </Section>
      </Section>
      <Spacing lg='65' md='35'/>
      <Section className="container">
        <SectionHeading 
          title='Minting Techniques'
          subtitle='Simple Steps'
        />
        <Spacing lg='50' md='30'/>
        <Section className="row">
          <Section className="col-xl-3 col-md-6">
            <Card 
              title='Connect Wallet'
              emoji='👋'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-xl-3 col-md-6">
            <Card 
              title='Select Your Quantity'
              emoji='👉'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-xl-3 col-md-6">
            <Card 
              title='Transection Confirm'
              emoji='👍'
            />
            <Spacing lg='25' md='25'/>
          </Section>
          <Section className="col-xl-3 col-md-6">
            <Card 
              title='Recive Your NFTs'
              emoji='🙂'
            />
            <Spacing lg='25' md='25'/>
          </Section>
        </Section>
      </Section>
     {/*  <Section id='team'>
        <Spacing lg='70' md='40'/>
        <Section className="container">
          <SectionHeading 
            title='Meet The Team'
            subtitle='Team'
          />
          <Spacing lg='50' md='30'/>
          <Section className="row">
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member1.svg'
                name='Jeffrey Robin' 
                designation='UI Designer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member2.svg'
                name='Pamela Newborn' 
                designation='FrontEnd engineer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member3.svg'
                name='Jeffrey Bassett' 
                designation='Software engineer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member4.svg'
                name='Steven S. Cook' 
                designation='Digital Marketing' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member5.svg'
                name='Diane B. Lyons' 
                designation='Digital Marketing' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member6.svg'
                name='Nancy Riddell' 
                designation='UI Designer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member7.svg'
                name='Helen Herman' 
                designation='Product Designer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
            <Section className="col-lg-3 col-sm-6">
              <Team 
                src='/images/member8.svg'
                name='Lindsay Baker' 
                designation='UI Designer' 
                facebookHref='/' 
                linkedinHref='/' 
                whatsappHref='/'
              />
              <Spacing lg='25' md='25'/>
            </Section>
          </Section>
        </Section>
      </Section> */}
{/*       <Section tag='section' id='roadmap'>
        <Spacing lg='70' md='40'/>
        <Section className="container">
          <SectionHeading 
            title='Roadmap Make Unique'
            subtitle='Our Goals'
          />
          <Spacing lg='75' md='30'/>
          <Section className="cs-accent_seperator_1 cs-accent_color"></Section>
          <RoadmapSlider/>
        </Section>
      </Section> */}
     {/*  <Section tag='section' id='faq'>
        <Spacing lg='95' md='70'/>
        <Section className="container">
          <SectionHeading 
            title='Still have questions?'
            subtitle='FAQ'
          />
          <Spacing lg='50' md='30'/>
          <Section className="row">
            <Section className="col-lg-6">
              <Accordion variant='' data={accordionData1} openPosition={0} questionNumberStarter={1}/>
            </Section>
            <Section className="col-lg-6">
              <Accordion variant='' data={accordionData2} openPosition={false} questionNumberStarter={5}/>
            </Section>
          </Section>
        </Section>
      </Section> */}
      <Section id='contact'>
        <Spacing lg='95' md='70'/>
        <Section className="container">
          <SectionHeading 
            title='Get in touch'
            subtitle='Contact us'
          />
          <Spacing lg='50' md='30'/>
          <Section className="row">
            <Section className="col-lg-6">
              <ContactForm/>
            </Section>
            <Section className="col-lg-5 offset-lg-1">
            <Spacing lg='30' md='40'/>
              <ContactInfo/>
            </Section>
          </Section>
        </Section>
        <Spacing lg='100' md='70'/>
      </Section>
    </>
  )
}
