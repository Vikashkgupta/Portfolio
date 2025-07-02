/*!

=========================================================

* Coded by www.vikashkumargupta.netlify.app

=========================================================
*/


// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


// dark mode code start

const toggle = document.getElementById("darkToggle");
      
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  // Save preference
  if (toggle.checked) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// On page load, set saved theme
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }
};
// dark mode code end





// Close navbar when clicked outside code start

$(document).click(function (event) {
    const $target = $(event.target);           // jis element pe click hua
    const $nav = $('ul.nav');                  // navbar list
    const $toggle = $('#nav-toggle');          // hamburger button

    // Agar click na navbar pe hua, na toggle button pe
    if (!$target.closest($nav).length && !$target.closest($toggle).length) {
        $nav.removeClass('show');              // nav close
        $toggle.removeClass('is-active');      // toggle state reset
    }
});

// Close navbar when clicked outside code end

AOS.init();
