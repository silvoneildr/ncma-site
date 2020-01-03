<template lang="pug">
div(class="container")
  div(id="carousel-services" class="carousel slide " data-ride="carousel")
    ol(class="carousel-indicators")
      li(data-target="#carousel-services" data-slide-to="0" class="active")
      li(data-target="#carousel-services" data-slide-to="1")
      li(data-target="#carousel-services" data-slide-to="2")
      //- li(data-target="#carousel-services" data-slide-to="3")
      //- li(data-target="#carousel-services" data-slide-to="4")
      //- li(data-target="#carousel-services" data-slide-to="5")
      //- li(data-target="#carousel-services" data-slide-to="6")
      //- li(data-target="#carousel-services" data-slide-to="7")
      //- li(data-target="#carousel-services" data-slide-to="8")
      //- li(data-target="#carousel-services" data-slide-to="9")

    div(class="carousel-inner")
      div(class="carousel-item active carousel-fade")
        div(class="d-block w-100 demolition")
        div(class="carousel-caption")
          div(class="row")
            div(class="col")
              h5 Demolition
              p Demolition contrasts with deconstruction, which involves taking a building apart while
                |  carefully preserving valuable elements for reuse purposes.
          //- div(class="row justify-content-center align-items-end")
          //-   a(class="float", @click="goToServices()")
          //-     i(class="fa fa-chevron-down my-float")

      div(class="carousel-item carousel-fade")
        div(class="d-block w-100 concrete_removal")
        div(class="carousel-caption")
          div(class="row")
            div(class="col")
              h5 Concrete Removal
              p Knowing which method or combination of methods to use for demolition of
                |  reinforced or prestressed concrete structures is essential for a safe and profitable job.
      //-   div(class="row justify-content-center align-items-end")
      //-     a(class="float", @click="goToServices()")
      //-       i(class="fa fa-chevron-down my-float")

      div(class="carousel-item carousel-fade")
        div(class="d-block w-100 scrap_removal")
        div(class="carousel-caption")
          div(class="row")
            div(class="col")
              h5 Scrap Removal
              p We offer remove scrap demolition services for customers in Massachusetts.
                |  Our experience ranges from removal of plant equipment and machinery to complex utility infrastructures.
      //-   div(class="row justify-content-center align-items-end")
      //-     a(class="float", @click="goToServices()")
      //-       i(class="fa fa-chevron-down my-float")

      //- div(class="carousel-item")
      //-   div(class="d-block w-100 final_cleaner")
      //-   div(class="carousel-caption float-left")
      //-     h5 Final Cleaner
      //-     p This phase begins with a repeat the all glass cleaning followed by an in-depth cleaning of
      //-       | all interior surfaces. At the completion of this phase the space is usually considered move-in ready.
      //-       | We take every type of flooring into consideration when we choose a cleaning medium to ensure that no
      //-       | damage is caused.
      //-     a(class="float")
      //-       i(class="fa fa-arrow-down my-float")

      //- div(class="carousel-item")
      //-   div(class="d-block w-100 skilled_labor")
      //-   div(class="carousel-caption float-left")
      //-     h5 Skilled Labor
      //-     p Skilled labor is a segment of the workforce with specialized know-how, training and experience
      //-       | to carry out more-complex physical or mental tasks than routine job functions. Skilled labor
      //-       | is generally characterized by higher education, expertise levels attained through training and
      //-       | experience, and higher wages.
      //-     a(class="float")
      //-       i(class="fa fa-arrow-down my-float")

      //- div(class="carousel-item")
      //-   div(class="d-block w-100 windows_cleaning")
      //-   div(class="carousel-caption float-left")
      //-     h5 Windows Cleaning
      //-     p Window cleaning, or window washing, is the exterior cleaning of architectural glass used for structural,
      //-       | lighting, or decorative purposes. It can be done manually, using a variety of tools for cleaning and access.
      //-       | Technology is also employed and increasingly, automation.
      //-     a(class="float")
      //-       i(class="fa fa-arrow-down my-float")

      //- div(class="carousel-item")
      //-   div(class="d-block w-100 pressure_washing")
      //-   div(class="carousel-caption float-left")
      //-     h5 Pressure Washing
      //-     p Pressure washing or power washing is the use of high-pressure water spray to remove loose paint, mold, grime,
      //-      | dust, mud, chewing gum and dirt from surfaces and objects such as buildings, vehicles and concrete surfaces.
      //-      | The volume of a mechanical pressure washer is expressed in gallons or litres per minute, often designed into
      //-      | the pump and not variable.
      //-     a(class="float")
      //-       i(class="fa fa-arrow-down my-float")

      //- div(class="carousel-item")
      //-   div(class="d-block w-100 post_const_cleaner")
      //-   div(class="carousel-caption float-left")
      //-     h5 Post-Const Cleaning
      //-     p Whether it is new construction, remodeling or a repipe situation, Dirt Busters is your construction clean-up
      //-       | solution. We provide post construction services for both residential and commercial customers. We have all
      //-       | the necessary tools to clean your home or office.
      //-     a(class="float")
      //-       i(class="fa fa-arrow-down my-float")

      //- div(class="carousel-item")
      //-   div(class="d-block w-100 plastering")
      //-   div(class="carousel-caption float-left")
      //-     h5 Plastering
      //-     p Plastering the process of applying thin cover of cement mortar over the exposed surface in order to safeguard
      //-       | against penetration of rain water and other atmospheric agencies. It improves the appearance of the structure
      //-       | and gives decorative effect to the interiors.
      //-     a(class="float")
      //-       i(class="fa fa-arrow-down my-float")

      //- div(class="carousel-item")
      //-   div(class="d-block w-100 scrap_removal")
      //-   div(class="carousel-caption float-left")
      //-     h5 Scrap Removal
      //-     p We offer scrap metal demolition services for customers in Massachusetts.
      //-       | Our experience ranges from removal of plant equipment and machinery to complex utility infrastructures.
      //-       | Our team makes sure your project is done in accordance with environmental and safety standards.
      //-     a(class="float")
      //-       i(class="fa fa-arrow-down my-float")

    a(class="carousel-control-prev" href="#carousel-services" role="button" data-slide="prev")
      span(class="carousel-control-prev-icon" aria-hidden="true")
      span(class="sr-only") Previous

    a(class="carousel-control-next" href="#carousel-services" role="button" data-slide="next")
      span(class="carousel-control-next-icon" aria-hidden="true")
      span(class="sr-only") Next

</template>
<script>
export default {
  methods: {
    goToServices() {
      // const elmnt = document.getElementById('services');
      // elmnt.scrollIntoView();
    },
  },
};
</script>


<style scoped lang="scss">
  // @media (min-width: 1440px) {
  //   .container {
  //     max-width: 1400px !important;
  //   }
  // }
//   .carousel-item {
//     display: flex;
//     height: 100vh;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//   }

//   .carousel-item:nth-child(1) {
//     background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
//       url('../assets/images/carousel/demolition.jpg');
//   }

//   .carousel-item:nth-child(2) {
//     background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
//       url('../assets/images/carousel/concrete_removal.jpg');
//   }

//   .carousel-item:nth-child(3) {
//     background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
//       url('../assets/images/carousel/scrap_removal.jpg');
// }

  @keyframes buttonAnimated {
    from {bottom: 100px;}
    to {bottom: 103px;}
  }
  .row-float {
    height: 100px;
  }
  .float {
    cursor: pointer;
    position: absolute;
    width: 50px;
    height: 50px;
    color: white !important;
    border: 2px solid #FFF;
    background-color: #191919;
    border-radius: 50px;
    text-align: center;
    -webkit-box-shadow: 3px #424a52;
    box-shadow: 3px #424a52;
    animation-name: buttonAnimated;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  a.float:active, a.float:focus, a.float:hover {
    background-color: #191919;
  }
  .my-float{
    margin-top:10px;
  }
  .my-float.fa {
    font: normal normal normal 20px/1 FontAwesome;
    font-size: x-large;
  }
  .carousel-caption {
    text-align: left;
    max-width: 800px;
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    // top: 30%;
  }
  .carousel-caption h5 {
    font-size: 24px;
  }
  .carousel-caption p {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    // .carousel-caption {
    //   top: 33%;
    // }
    .carousel-caption h5 {
      font-size: 43px;
    }
    .carousel-caption p {
      font-size: 19px;
    }
  }

  @media (min-width: 1220px) {
    // .carousel-caption {
    //   top: 35%;
    // }
    .carousel-caption h5 {
      font-size: 48px;
    }
    .carousel-caption p {
      font-size: 24px;
    }
  }

  .demolition {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
      url('../assets/images/carousel/demolition.jpg');
    display: flex;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .concrete_removal {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
      url('../assets/images/carousel/concrete_removal.jpg');
    display: flex;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .scrap_removal {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
      url('../assets/images/carousel/scrap_removal.jpg');
    display: flex;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  // .final_cleaner {
  //   background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
  //     url('../assets/images/carousel/final_cleaner.jpg');
  //   display: flex;
  //   height: 100hv;
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  // }

  // .skilled_labor {
  //   background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
  //     url('../assets/images/carousel/skilled_labor.jpg');
  //   display: flex;
  //   height: 100vh;
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  // }

  // .windows_cleaning {
  //   background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
  //     url('../assets/images/carousel/windows_cleaning.jpg');
  //   display: flex;
  //   height: 100vh;
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  // }

  // .pressure_washing {
  //   background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
  //     url('../assets/images/carousel/pressure_washing.png');
  //   display: flex;
  //   height: 100vh;
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  // }

  // .post_const_cleaner {
  //   background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
  //     url('../assets/images/carousel/post_const_cleaner.jpg');
  //   display: flex;
  //   height: 100vh;
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  // }

  // .plastering {
  //   background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
  //     url('../assets/images/carousel/plastering.jpg');
  //   display: flex;
  //   height: 100vh;
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  // }

</style>
