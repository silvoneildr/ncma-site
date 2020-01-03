<template lang="pug">
  nav(class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav")
    div(class="container")
      a(class="navbar-brand js-scroll-trigger" href="#")
        img(src="../assets/images/logo.png")
      button(
        class="navbar-toggler navbar-toggler-right"
        type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
      )
        i(class="fa fa-bars")

      div(class="collapse navbar-collapse", id="navbarResponsive")
        ul(
          class="navbar-nav text-uppercase ml-auto",
          v-for="(menu, index) in menuList",
          :key="index"
        )
          li(class="nav-item", name="menu.name")
            a(class="nav-link js-scroll-trigger" :href="menu.href") {{ menu.title }}

</template>

<script>
import $ from 'jquery';

export default {
  name: 'Navigation',

  data() {
    return {
      menuList: [
        { name: 'services', title: 'Services', href: '#services' },
        { name: 'about', title: 'About', href: '#about' },
        { name: 'contact', title: 'Contact', href: '#contact' },
      ],
    };
  },
  mounted() {
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(() => {
      if ((this.pathname && this.hostname)
          && location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
          && location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54),
          }, 1000, 'easeInOutExpo');
          return false;
        }
      }
      return true;
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(() => $('.navbar-collapse').collapse('hide'));

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 56,
    });

    // Collapse Navbar
    const navbarCollapse = () => {
      if ($('#mainNav').offset().top && $('#mainNav').offset().top > 100) {
        $('#mainNav').addClass('navbar-shrink');
      } else {
        $('#mainNav').removeClass('navbar-shrink');
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();

    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  },

};
</script>

<style lang="scss">
  @media (min-width: 576px) {
    .container {
      width: 100%;
      max-width: 100% !important;
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 100%;
      max-width: 100% !important;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 900px !important;
    }
  }
  @media (min-width: 1140px) {
    .container {
      max-width: 1100px !important;
    }
  }
  @media (min-width: 1440px) {
    .container {
      max-width: 1400px !important;
    }
  }
  @media (min-width: 1650px) {
    .container {
      max-width: 1600px !important;
    }
  }

  #mainNav {
    background-color: #212529;
    position: fixed;
  }

  #mainNav .navbar-toggler {
    font-size: 12px;
    right: 0;
    padding: 13px;
    text-transform: uppercase;
    color: #212529;
    border: 0;
    background-color: #ff9933;
  }

  #mainNav .navbar-brand {
    color: #ff9933;
    font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive;
    img {
      max-width:180px;
    }
  }

  #mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {
    color: #ff9933;
  }

  #mainNav .navbar-nav .nav-item .nav-link {
    font-size: 90%;
    font-weight: bold;
    padding: 0.75em 0;
    letter-spacing: 2px;
    color: #ff9933;
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {
    color: white;
  }

  @media (min-width: 992px) {
    #mainNav {
      -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
      -moz-transition: padding-top 0.3s, padding-bottom 0.3s;
      transition: padding-top 0.3s, padding-bottom 0.3s;
      border: none;
      background-color: transparent;
      background-color: #212529;
      position: fixed;
    }
    #mainNav .navbar-brand {
      font-size: 1.75em;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
      img {
        max-width: 180px;
      }
    }
    #mainNav .navbar-nav .nav-item .nav-link {
      padding: 1.1em 1em !important;
    }
    #mainNav.navbar-shrink {
      padding-top: 0;
      padding-bottom: 0;
      background-color: #212529;
    }
    #mainNav.navbar-shrink .navbar-brand {
      font-size: 1.25em;
      padding: 12px 0;
    }
    #navbarResponsive {
      -webkit-box-flex: 1 !important;
      flex-grow: 0 !important;
      align-items: right !important;
    }
  }

</style>
