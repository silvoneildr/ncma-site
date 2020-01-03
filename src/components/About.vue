<template lang="pug">
.content
  section(id="about")
    div(class="container")
      div(class="row titulo")
        div(class="col-lg-12 text-center")
          h2(class="section-heading text-uppercase") About
          //- h3(class="section-subheading text-muted") Lorem ipsum dolor sit amet consectetur

      div(class="row")
        div(class="col-lg-12")
          ul(class="timeline")
            li()
              div(class="timeline-image")
                h3.marg-titulo 2018
              div(class="timeline-panel")
                div(class="timeline-heading")
                  h3(class="subheading") New Concept Construction Service
                div(class="timeline-body")
                  p(class="text-muted") .
                  | We offer construction services for customers in Massachusetts.
                  | Our team makes sure your project is done in accordance with environmental and safety standards!
            li(class="timeline-inverted")
              div(class="timeline-image")
                h4 Be Part
                  <br>Of Our
                  <br>Story!

</template>

<style lang="scss" scoped>
  .marg-titulo {
    margin-top: 20px;
  }
  .titulo {
    margin-bottom: 70px;
  }
  .content {
    overflow-x: hidden;
    font-family: 'Roboto Slab', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .timeline {
    position: relative;
    padding: 0;
    list-style: none;
  }

  .timeline:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    width: 2px;
    margin-left: -1.5px;
    content: '';
    background-color: #e9ecef;
  }

  .timeline > li {
    position: relative;
    min-height: 50px;
    margin-bottom: 50px;
  }

  .timeline > li:after, .timeline > li:before {
    display: table;
    content: ' ';
  }

  .timeline > li:after {
    clear: both;
  }

  .timeline > li .timeline-panel {
    position: relative;
    float: right;
    width: 100%;
    padding: 0 20px 0 100px;
    text-align: left;
  }

  .timeline > li .timeline-panel:before {
    right: auto;
    left: -15px;
    border-right-width: 15px;
    border-left-width: 0;
  }

  .timeline > li .timeline-panel:after {
    right: auto;
    left: -14px;
    border-right-width: 14px;
    border-left-width: 0;
  }

  .timeline > li .timeline-image {
    position: absolute;
    z-index: 100;
    left: 0;
    width: 80px;
    height: 80px;
    margin-left: 0;
    text-align: center;
    color: #212529;
    border: 7px solid #e9ecef;
    border-radius: 100%;
    background-color: #fff;
  }

  .timeline > li .timeline-image h4 {
    font-size: 10px;
    line-height: 14px;
    margin-top: 12px;
  }

  .timeline > li.timeline-inverted > .timeline-panel {
    float: right;
    padding: 0 20px 0 100px;
    text-align: left;
  }

  .timeline > li.timeline-inverted > .timeline-panel:before {
    right: auto;
    left: -15px;
    border-right-width: 15px;
    border-left-width: 0;
  }

  .timeline > li.timeline-inverted > .timeline-panel:after {
    right: auto;
    left: -14px;
    border-right-width: 14px;
    border-left-width: 0;
  }

  .timeline > li:last-child {
    margin-bottom: 0;
  }

  .timeline .timeline-heading h4 {
    margin-top: 0;
    color: inherit;
  }

  .timeline .timeline-heading h4.subheading {
    text-transform: none;
  }

  .timeline .timeline-body > ul,
  .timeline .timeline-body > p {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    .marg-titulo {
      margin-top: 28px;
    }
    .timeline:before {
      left: 50%;
    }
    .timeline > li {
      min-height: 100px;
      margin-bottom: 100px;
    }
    .timeline > li .timeline-panel {
      float: left;
      width: 41%;
      padding: 0 20px 20px 30px;
      text-align: right;
    }
    .timeline > li .timeline-image {
      left: 50%;
      width: 100px;
      height: 100px;
      margin-left: -50px;
    }
    .timeline > li .timeline-image h4 {
      font-size: 13px;
      line-height: 18px;
      margin-top: 16px;
    }
    .timeline > li.timeline-inverted > .timeline-panel {
      float: right;
      padding: 0 30px 20px 20px;
      text-align: left;
    }
  }

  @media (min-width: 992px) {
    .marg-titulo {
      margin-top: 50px;
    }
    .timeline > li {
      min-height: 150px;
    }
    .timeline > li .timeline-panel {
      padding: 0 20px 20px;
    }
    .timeline > li .timeline-image {
      width: 150px;
      height: 150px;
      margin-left: -75px;
    }
    .timeline > li .timeline-image h4 {
      font-size: 18px;
      line-height: 26px;
      margin-top: 30px;
    }
    .timeline > li.timeline-inverted > .timeline-panel {
      padding: 0 20px 20px;
    }
  }

  @media (min-width: 1200px) {
    .marg-titulo {
      margin-top: 60px;
    }
    .timeline > li {
      min-height: 170px;
    }
    .timeline > li .timeline-panel {
      padding: 0 20px 20px 100px;
    }
    .timeline > li .timeline-image {
      width: 170px;
      height: 170px;
      margin-left: -85px;
    }
    .timeline > li .timeline-image h4 {
      margin-top: 40px;
    }
    .timeline > li.timeline-inverted > .timeline-panel {
      padding: 0 100px 20px 20px;
    }
  }
</style>
