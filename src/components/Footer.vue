<template lang="pug">
  footer
    div(class="container")
      div(class="row")
        div(class="col-md-12")
          p
            span(class="copyright") Copyright &copy; New Concept Construction Service

        //- div(class="col-md-2")
        //-   ul(class="list-inline social-buttons")
        //-     li(class="list-inline-item")
        //-       a(href="#")
        //-         i(class="fa fa-instagram")
        //-     li(class="list-inline-item")
        //-       a(href="#")
        //-         i(class="fa fa-facebook")
        //-     li(class="list-inline-item")
        //-       a(href="#")
        //-         i(class="fa fa-linkedin")

        //- div(class="col-md-5")
        //-   ul(class="list-inline quicklinks")
        //-     li(class="list-inline-item")
        //-       a(href="#") Privacy Policy
        //-     li(class="list-inline-item")
        //-       a(href="#") Terms of Use

</template>

<style lang="scss" scoped>
  footer {
    text-align: center;
    background-color: #212529;
    color: white;
    font-weight: bold;
    p {
      margin-top: 1rem;
    }
  }

  footer span.copyright {
    font-size: 90%;
    line-height: 40px;
    text-transform: none;
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  footer ul.quicklinks {
    font-size: 90%;
    line-height: 40px;
    margin-bottom: 0;
    text-transform: none;
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  ul.social-buttons {
    margin-bottom: 0;
  }

  ul.social-buttons li a {
    font-size: 20px;
    line-height: 40px;
    display: block;
    width: 40px;
    height: 40px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    color: #212529;
    border-radius: 100%;
    outline: none;
    background-color: #ff9933;
  }

  ul.social-buttons li a:active, ul.social-buttons li a:focus, ul.social-buttons li a:hover {
    background-color: #fff;
  }
</style>
