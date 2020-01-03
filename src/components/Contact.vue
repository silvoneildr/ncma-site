<template lang="pug">
.content
  section(id="contact")
    div(class="container")
      div(class="row")
        div(class="col-lg-12 text-center")
          h2(class="section-heading text-uppercase") Contact Us
          h3(class="section-subheading text-muted") Phone: 617 785 5539
            <br> E-mail: contact@newconceptma.com

      div(class="row")
        div(class="col-lg-12")
          form(id="contactForm" name="sentMessage" novalidate="novalidate")
            div(class="row")
              div(class="col-md-6")
                div(class="form-group")
                  input(
                    class="form-control", id="name" type="text" placeholder="Your Name *" required="required",
                    data-validation-required-message="Please enter your name."
                  )
                  p(class="help-block text-danger")

                div(class="form-group")
                  input(class="form-control" id="email" type="email" placeholder="Your Email *" required="required"
                    data-validation-required-message="Please enter your email address."
                  )
                  p(class="help-block text-danger")

                div(class="form-group")
                  input(class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required"
                    data-validation-required-message="Please enter your phone number."
                  )
                  p(class="help-block text-danger")

              div(class="col-md-6")
                div(class="form-group")
                  textarea(class="form-control" id="message" placeholder="Your Message *" required="required"
                    data-validation-required-message="Please enter a message."
                  )
                  p(class="help-block text-danger")

              div(class="clearfix")
              div(class="col-lg-12 text-center")
                div(id="success")
                button(id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit") Send Message

</template>

<style lang="scss" scoped>
.btn-primary {
  color: #fff !important;
  background-color: #ff9933 !important;
  border-color: #ced4da !important;
}
.btn-primary:hover {
  color: #fff !important;
  background-color: #212529 !important;
  border-color: #ced4da !important;
}
.btn-primary:visited {
  color: #fff !important;
  background-color: #212529 !important;
  border-color: #ced4da !important;
}
.content {
  overflow-x: hidden;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.btn {
  color: white !important;
}

section#contact {
  // background-color: #212529;
  background-image: url("");
  background-repeat: no-repeat;
  background-position: center;
}

section#contact .form-group {
  margin-bottom: 25px;
}

section#contact .form-group input,
section#contact .form-group textarea {
  padding: 20px;
}

section#contact .form-group input.form-control {
  height: auto;
  border: 1px solid #9da0a3 !important;
}

section#contact .form-group textarea.form-control {
  height: 248px;
  border: 1px solid #9da0a3 !important;
}

section#contact .form-control:focus {
  border-color: #ff9933;
  box-shadow: none;
}

section#contact ::-webkit-input-placeholder {
  font-weight: 700;
  color: #9da0a3;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

section#contact :-moz-placeholder {
  font-weight: 700;
  color: #ced4da;
  /* Firefox 18- */
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

section#contact ::-moz-placeholder {
  font-weight: 700;
  color: #ced4da;
  /* Firefox 19+ */
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

section#contact :-ms-input-placeholder {
  font-weight: 700;
  color: #ced4da;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
