<script setup>
import NavBar from "./components/organism/navBar/NavBar.vue"
import MastHead from "./components/organism/mastHead/MastHead.vue";
import ProjectCard from "./components/organism/projectCard/ProjectCard.vue";
import './scss/custom.scss'


// data variables
const webTitle = "DANA HEIMANN";
const webSubTitle = "UX/UI & VISUAL DESIGNER";

const introText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

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
        label: "Role",
        description: 'Description role array'
      }, {
        label: "Timeline",
        description: 'Description timeline'
      }, {
        label: "Tools",
        description: 'Description tools'
      }, {
        label: "About",
        description: 'Description about'
      }, {
        label: "Extra kjfgjkdfg",
        description: 'Description about'
      }
    ]
  },
  {
    title: "An other project",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    image: {
      url: "https://www.granadahoy.com/2022/08/28/vivir/casa-dragon-Granada-imagenes_1715239244_165068924_667x375.jpg",
      alt: "Project image alt",
      position: "right"
    },
    listItems: [
      {
        label: "Role",
        description: 'Description role'
      }, {
        label: "Timeline",
        description: 'Description timeline'
      }, {
        label: "Tools",
        description: 'Description tools'
      }, {
        label: "About",
        description: 'Description about'
      }
    ]
  },
  {
    title: "An other project last one",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    image: {
      url: "https://www.granadahoy.com/2022/08/28/vivir/casa-dragon-Granada-imagenes_1715239244_165068924_667x375.jpg",
      alt: "Project image alt",
      position: "left"
    },
    listItems: [
      {
        label: "Role",
        description: 'Description role last'
      }, {
        label: "Timeline",
        description: 'Description timeline'
      }, {
        label: "Tools",
        description: 'Description tools'
      }, {
        label: "About",
        description: 'Description about'
      }
    ]
  }
];
</script>

<template>
  <Nav-bar/>
  <MastHead :title="webTitle" :subtitle="webSubTitle"/>
  <main>
    <section class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <p>{{ introText }}</p>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-12">
          <ProjectCard v-for="(projectCard, index)  in projectCards"
                       :listItems="projectCard.listItems"
                       :title="projectCard.title"
                       :description="projectCard.description"
                       :image="projectCard.image"/>
        </div>
      </div>
    </section>

  </main>
</template>