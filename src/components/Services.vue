<template lang="pug">
.content
  section(id="services")
    div(class="container")
      div(class="row")
        div(class="col-lg-12 text-center")
          h2(class="section-heading text-uppercase") Services
          //- h3(class="section-subheading text-muted") Lorem ipsum dolor sit amet consectetur.

      div(
        class="row text-center",
      )
        div(
          class="col-md-4"
          v-for="(service, index) in services",
          :key="index"
        )
          span(class="fa-stack fa-4x")
            i(class="fa fa-circle fa-stack-2x")
            i(:class="service.icon")
          h4(class="service-heading") {{ service.title }}
          p(class="text-muted") {{ service.text }}

        //- div(class="col-md-4")
        //-   //- span(class="fa-stack fa-4x")
        //-   //-   i(class="fa fa-circle fa-stack-2x text-primary")
        //-     //- i(class="fa fa-home fa-stack-1x fa-inverse")
        //-   h4(class="service-heading") Responsive Design
        //-   p(class="text-muted") Lorem ipsum dolor sit amet,
        //-     | consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni,
        //-     | dicta impedit.

        //- div(class="col-md-4")
        //-   //- span(class="fa-stack fa-4x")
        //-     //- i(class="fa fa-circle fa-stack-2x text-primary")
        //-     //- i(class="fa fa-home fa-stack-1x fa-inverse")
        //-   h4(class="service-heading") Web Security
        //-   p(class="text-muted") Lorem ipsum dolor sit amet,
        //-     | consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni,
        //-     | dicta impedit.

</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'Demolition',
          text: 'Demolition or razing is the tearing down of buildings and other man-made structures ' +
            'Demolition contrasts with deconstruction, which involves taking a building apart while' +
            'carefully preserving valuable elements for reuse purposes.',
          icon: 'fa fa-home fa-stack-1x fa-inverse',
        },
        {
          title: 'Concrete Removal',
          text: 'Most concrete contractors, even though not demolition specialists, ' +
            'will have to demolish portions of structures as a part of their usual business. ' +
            'Knowing which method or combination of methods to use for demolition of ' +
            'reinforced or prestressed concrete structures is essential for a safe and profitable job.',
          icon: 'fa fa-home fa-stack-1x fa-inverse',
        },
        {
          title: 'Scrap Removal',
          text: 'We remove scrap demolition services for customers in Massachusetts. ' +
                'Our experience ranges from removal of plant equipment and machinery ' +
                'to complex utility infrastructures. Our team makes sure your project ' +
                'is done in accordance with environmental and safety standards.',
          icon: 'fa fa-home fa-stack-1x fa-inverse',
        },
        // {
        //   title: 'Progress',
        //   text:
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
        //     'Minima maxime quam architecto quo inventore harum ex magni, ' +
        //     'dicta impedit.',
        //   icon: 'fa fa-home fa-stack-1x fa-inverse',
        // },
        // {
        //   title: 'Final Cleaner',
        //   text:
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
        //     'Minima maxime quam architecto quo inventore harum ex magni, ' +
        //     'dicta impedit.',
        //   icon: 'fa fa-home fa-stack-1x fa-inverse',
        // },
        // {
        //   title: 'Pressure Washing',
        //   text:
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
        //     'Minima maxime quam architecto quo inventore harum ex magni, ' +
        //     'dicta impedit.',
        //   icon: 'fa fa-home fa-stack-1x fa-inverse',
        // },
        // {
        //   title: 'Plastering',
        //   text:
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
        //     'Minima maxime quam architecto quo inventore harum ex magni, ' +
        //     'dicta impedit.',
        //   icon: 'fa fa-home fa-stack-1x fa-inverse',
        // },
        // {
        //   title: 'Post-Const Cleaning',
        //   text:
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
        //     'Minima maxime quam architecto quo inventore harum ex magni, ' +
        //     'dicta impedit.',
        //   icon: 'fa fa-home fa-stack-1x fa-inverse',
        // },
        // {
        //   title: 'Skilled Labor',
        //   text:
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
        //     'Minima maxime quam architecto quo inventore harum ex magni, ' +
        //     'dicta impedit.',
        //   icon: 'fa fa-home fa-stack-1x fa-inverse',
        // },
        // {
        //   title: 'Windows Cleaning',
        //   text:
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
        //     'Minima maxime quam architecto quo inventore harum ex magni, ' +
        //     'dicta impedit.',
        //   icon: 'fa fa-home fa-stack-1x fa-inverse',
        // },
      ],
    };
  },
};
</script>


<style lang="scss">
  content {
    overflow-x: hidden;
    font-family: 'Roboto Slab', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  p {
    line-height: 1.75;
  }

  a {
    color: #DC853D;
  }

  a:hover {
    color: #DC853D;
  }

  .text-primary {
    color: #DC853D !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  section {
    padding: 100px 0;
  }

  section h2.section-heading {
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 15px;
  }

  section h3.section-subheading {
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 75px;
    text-transform: none;
    font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  @media (min-width: 768px) {
    section {
      padding: 150px 0;
    }
  }
</style>
