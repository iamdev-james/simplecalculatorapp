var rm = new Vue({
  el: '#calculator',
  data: {
    theme1: false,
    theme2: false,
    theme3: true
  },
  methods: {
    switchToTheme1 () {
      this.theme1 = true
      this.theme2 = false
      this.theme3 = false
      window.localStorage.setItem('prefferedTheme', 'theme1')
    },
    switchToTheme2 () {
      this.theme1 = false
      this.theme2 = true
      this.theme3 = false
      window.localStorage.setItem('prefferedTheme', 'theme2')

    },
    switchToTheme3 () {
      this.theme1 = false
      this.theme2 = false
      this.theme3 = true
      window.localStorage.setItem('prefferedTheme', 'theme3')

    },
    changeBodyBg () {
      if (this.theme1 === true) {
        return 'theme-1-body-bg'
      } else if (this.theme2 === true) {
        return 'theme-2-body-bg'
      } else if (this.theme3 === true) {
        return 'theme-3-body-bg'
      }
    },
    changeHeaderColor () {
      if (this.theme1 === true) {
        return 'theme-1-header-color'
      } else if (this.theme2 === true) {
        return 'theme-2-header-color'
      } else if (this.theme3 === true) {
        return 'theme-3-header-color'
      }
    },
    changeScreenBg () {
      if (this.theme1 === true) {
        return 'theme-1-screen'
      } else if (this.theme2 === true) {
        return 'theme-2-screen'
      } else if (this.theme3 === true) {
        return 'theme-3-screen'
      }
    },
    changeKeypadBg () {
      if (this.theme1 === true) {
        return 'theme-1-keypad-background'
      } else if (this.theme2 === true) {
        return 'theme-2-keypad-background'
      } else if (this.theme3 === true) {
        return 'theme-3-keypad-background'
      }
    },
    changeDelreBg () { 
      if (this.theme1 === true) {
        return 'theme-1-delre-btn-background'
      } else if (this.theme2 === true) {
        return 'theme-2-delre-btn-background'
      } else if (this.theme3 === true) {
        return 'theme-3-delre-btn-background'
      }
    },
    changeEqualSignStyle () {
      if (this.theme1 === true) {
        return 'theme-1-equal-btn'
      } else if (this.theme2 === true) {
        return 'theme-2-equal-btn'
      } else if (this.theme3 === true) {
        return 'theme-3-equal-btn'
      }
    }
  },
  mounted: function () {
    if (window.localStorage.getItem('prefferedTheme') === 'theme1') {
      this.theme1 = true,
      this.theme2 = false,
      this.theme3 = false
    }
    else if (window.localStorage.getItem('prefferedTheme') === 'theme2') {
      this.theme1 = false,
      this.theme2 = true,
      this.theme3 = false
    }
    else if (window.localStorage.getItem('prefferedTheme') === 'theme3') {
      this.theme1 = false,
      this.theme2 = false,
      this.theme3 = true
    }
    $('#calculator_display').keypress(function (e) {
      //  if the letter is not digit then display error and don't type anything
      if (e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 57)) {
        //  display error message
        return false
      }
    })
    $('[data-number]').on('click', function () {
      if ($('#calculator_display').val().length < 21) {
        var number = $('#calculator_display').val() + $(this).data('number')
        $('#calculator_display').append(number)
      }
    })
    
    //  AC button
    $('#clear').on('click', function () {
      $('#calculator_display').text('')
    })

    // delete btn
    $("#delete").on('click',function(){
      var Number = $("#calculator_display").text().slice(0,-1);
      $("#calculator_display").text("");
      $("#calculator_display").text(Number);
      });
    
    //  Calculating the answer
    $('#calculate').on('click', function () {
      const answer = eval($('#calculator_display').text())
      if (console.error()) {
        $('#calculator_display').text('put in the right values')
      } else {
        $('#calculator_display').text(answer)
      }
    })
  }
})