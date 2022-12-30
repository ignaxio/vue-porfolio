<script setup>
import './about-view.scss'

import IntroText from "../components/organism/introText/IntroText.vue";
import Image from "../components/atoms/image/Image.vue"


const introText = "It’s been quite a journey to get here, finally pursuing the thing I always wanted my career to be: Art & Design.\n" +
    "Ever since I was little, I took art classes in all kinds of mediums: drawing, painting, glass, ceramics, wood, metals, photography, and more. Everything about hands-on creation fascinated me.\n" +
    "My big imagination also sparked a love of books, which led me to pursue an Bachelor’s Degree in English Literature at university. After jobs in sales and multiple Michelin-star restaurants in NYC, I decided to move to Spain and finally put that English degree to work as an ESL teacher.\n" +
    "Despite exploring the world as well as a new career avenue, I always had that nagging feeling to create. The pandemic forced me to reassess my career path and I decided to learn some coding skills which revealed to me the wide world of web and digital design.\n" +
    "Although I love working independently, I’m seeking team collaboration mingled with the excitement of discovering new ideas on the road to solving challenging problems.\n" +
    "I want to wake up every day with the ability to use my creativity in my work and experience the satisfaction of seeing hard work come to fruition.";


const aboutTitle = "DANA HEIMANN";
const aboutSubTitle = "UX/UI & VISUAL DESIGNER";

</script>

<template>
  <main>

    <header class="header-about">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 header-about__image">
            <Image class="" alt="Dana Heimann UX disigner" url="./images/portraitOriginal.jpg"/>
          </div>
          <div class="col-12 col-md-6 text-center header-about__text">
            <h1>{{ aboutTitle }}</h1>
            <p class="lead">{{ aboutSubTitle }}</p>
            <Image alt="Logo dana heimann" url="./logo.svg"/>


          </div>
        </div>
      </div>
    </header>

    <IntroText :text="introText"/>
    <section class="container">
      <h2 class="text-center title-section">Skills</h2>
      <div class="row justify-content-center">
        <div class="col-10 col-lg-12">
          <div class="dn-list-group-wrapper row">
            <div class="dn-list-group col-12 col-md-6 col-lg-3">
              <h4 class="dn-list-group__title">UX</h4>
              <ul class="dn-list-group__ul">
                <li>User Journeys</li>
                <li>User Flow</li>
                <li>Sketching</li>
                <li>Storyboarding</li>
                <li>Paper Wireframing</li>
                <li>Digital Wireframing</li>
                <li>Mockups</li>
                <li>User Research</li>
                <li>Affinity Mapping</li>
                <li>Mobile App Design Systems</li>
                <li>Low-Fidelity Prototyping</li>
                <li>High-Fidelity Prototyping</li>
                <li>Usability Studies</li>
              </ul>
            </div>
            <div class="dn-list-group col-12 col-md-6 col-lg-3">
              <h4 class="dn-list-group__title">Design</h4>
              <ul class="dn-list-group__ul">
                <li>Typography</li>
                <li>Visual Hierarchy</li>
                <li>Color Theory</li>
              </ul>
            </div>
            <div class="dn-list-group col-12 col-md-6 col-lg-3">
              <h4 class="dn-list-group__title">Coding</h4>
              <ul class="dn-list-group__ul">
                <li>HTML</li>
                <li>CSS</li>
                <li>CSS Grid & Flexbox</li>
                <li>Basic JavaScript</li>
                <li>Bootstrap</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div class="dn-list-group col-12 col-md-6 col-lg-3">
              <h4 class="dn-list-group__title">General</h4>
              <ul class="dn-list-group__ul">
                <li>Fluent in Spanish</li>
                <li>Teaching</li>
                <li>Photography</li>
                <li>Leadership</li>
                <li>Problem Solving</li>
                <li>Writing & Editing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <h2 class="text-center title-section">Tools</h2>
      <div class="row justify-content-center">
        <div class="col-8 col-sm-6 col-md-3">
          <div class="dn-list-group-wrapper">
            <div class="dn-list-group">
              <ul class="dn-list-group__ul">
                <li>Figma</li>
                <li>Adobe Suite</li>
                <li>VS Code</li>
                <li>CSS3/HTML5</li>
                <li>Apple Keynote/Pages</li>
                <li>Microsoft Powerpoint/Word</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container dn-education">
      <h2 class="text-center title-section">Education</h2>
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-md-6">
          <div class="dn-education-group">
            <p>GOOGLE USER EXPERIENCE DESIGN PROFESSIONAL CERTIFICATE 2022</p>
          </div>
          <div class="dn-education-group">
            <p>STATE UNIVERSITY OF NEW YORK AT NEW PALTZ</p>
            <p>New Paltz, NY, USA, 2009-2013</p>
            <p>Bachelor of Arts</p>
            <p>Cum Laude</p>
            <p>English Literature Major</p>
            <p>Spanish & Art Studio Minors</p>
            <p>GPA 3.6</p>
          </div>
          <div class="dn-education-group">
            <p>UNIVERSIDAD DE SEVILLA</p>
            <p>Seville, Spain, Spring 2012</p>
            <p>Spanish Language Studies</p>
            <p>GPA 4.0</p>
          </div>
        </div>
      </div>
    </section>


    <section class="container dn-see-my-cv">
      <div class="text-center dn-btn-wrapper">
        <a href="./UX_UI_dana_heimann.pdf" class="dn-btn-outline-old-mauve">
          See my CV
          <font-awesome-icon icon="fa-regular fa-circle-right"/>
        </a>
      </div>
    </section>

  </main>
</template>





