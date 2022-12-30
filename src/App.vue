<script setup>
import NavBar from "./components/organism/navBar/NavBar.vue"
import Footer from "./components/organism/footer/Footer.vue";
import './scss/custom.scss'


// data variables
const projectCards = [
  {
    title: "The second project card",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    image: {
      url: "https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg",
      alt: "Project image alt",
      position: "left"
    },
    listItems: [
      {
        label: "Role:",
        description: 'Description role array'
      }, {
        label: "Timeline:",
        description: 'Description timeline'
      }, {
        label: "Tools:",
        description: 'Description tools'
      }, {
        label: "About:",
        description: 'Description about'
      }
    ]
  }
];

const footer = {
  image: {
    url: "./images/footer2500.jpg",
    alt: "Project image alt"
  }
};


</script>

<template>
  <Nav-bar/>
  <router-view/>
  <Footer :image="footer.image" title="Get in touch" email="DANA.C.HEIMANN@GMAIL.COM" phone="+34 658 68 86 37"/>
</template>