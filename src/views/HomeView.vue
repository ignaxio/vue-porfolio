<script setup>

import MastHead from "../components/organism/mastHead/MastHead.vue";
import ProjectCard from "../components/organism/projectCard/ProjectCard.vue";
import IntroText from "../components/organism/introText/IntroText.vue";


// data variables
const webTitle = "DANA HEIMANN";
const webSubTitle = "UX/UI & VISUAL DESIGNER";
const introText = "I’m a UX/UI and Visual Designer from New York, now based in Southern Spain.\n" +
    "I bring my love of adventure to my work by always staying curious, learning from others, and looking forward to what’s next. As a passionate artist and designer with innovative ideas, I can work with anyone and on any project, contributing a fresh perspective and helping teams gain forward momentum.";


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
  },
];
</script>

<template>
  <MastHead :title="webTitle" :subtitle="webSubTitle"/>
  <main>
<IntroText :text="introText" />
<!--    <section class="container">-->
<!--      <h2 class="title-section text-old-mauve text-center">My work</h2>-->
<!--      <div class="row">-->
<!--        <div class="col-12">-->
<!--          <ProjectCard v-for="(projectCard, index)  in projectCards"-->
<!--                       :listItems="projectCard.listItems"-->
<!--                       :title="projectCard.title"-->
<!--                       :description="projectCard.description"-->
<!--                       :image="projectCard.image"/>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

  </main>
</template>
