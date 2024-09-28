//                                         <---------------------arrow up ---------------->
const arrowUp = document.getElementById("goToTopButton");

arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var goToTopButton = document.getElementById("goToTopButton");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      goToTopButton.classList.add("visible");
    } else {
      goToTopButton.classList.remove("visible");
    }
  });
});
//                              <---------------------------fixed header -------------------------------->
window.onscroll = function () {
  var header = document.querySelector("header");
  var screenWidth = window.innerWidth;

  if (screenWidth >= 992) {
    // For larger screens, toggle the fixed class based on scroll position
    if (window.scrollY > 0) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  } else {
    // For smaller screens, remove the fixed class
    header.classList.remove("fixed-header");
  }
};


//                                          <----------form prevent deafult------------------>
function submitForm(event) {
  event.preventDefault();

  var education = document.getElementById("education").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("country").value;
  var intake = document.getElementById("intake").value;
}

//                                                        <.........      whatsaap icon------->
function redirectToWhatsApp() {
  var phoneNumber = "";

  var message = "Hello, I have a question!";

  var whatsappUrl =
    "https://wa.me/" + phoneNumber + "/?text=" + encodeURIComponent(message);

  window.location.href = whatsappUrl;
}



document.addEventListener("DOMContentLoaded", function () {
  var listItems = document.querySelectorAll(
    ".navbar-nav.menunav .nav-item.dropdown ul.dropdown-menu li a.dropdown-item"
  );

  var changes = [
    { oldText: "Ph.D(DOCTORAL)", newText: "DOCTORATE" },
    { oldText: "USA", newText: "UNITED STATES" },
    { oldText: "UK", newText: "UNITED KINGDOM" },
    { oldText: "SWEEDEN", newText: "SWEDEN" },
    
  ];

  if (listItems) {
    listItems.forEach(function (item) {
      changes.forEach(function (change) {
        if (item.textContent.trim() === change.oldText) {
          item.textContent = change.newText;
        }
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.navbar-nav .dropdown');

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (event) {
      if (window.innerWidth < 992) {
        event.preventDefault();
        event.stopPropagation();

        // Toggle the 'show' class for the clicked dropdown
        this.classList.toggle('show');

        // Close other dropdowns
        closeOtherDropdowns(this);
      }
    });

    var dropdownLinks = dropdown.querySelectorAll('.dropdown-menu a.dropdown-item');

    dropdownLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.stopPropagation();
        console.log('Dropdown item clicked:', link.getAttribute('href'));
        var targetPath = link.getAttribute('href');
        if (targetPath) {
          window.location.href = targetPath;
        }

        // Close the dropdown when a dropdown item is clicked
        closeDropdown(this.closest('.dropdown'));
      });
    });
  });

  document.addEventListener('click', function () {
    // Close all dropdowns when clicking outside any dropdown
    closeAllDropdowns();
  });

  function closeOtherDropdowns(clickedDropdown) {
    dropdowns.forEach(function (dropdown) {
      if (dropdown !== clickedDropdown && window.innerWidth < 992) {
        dropdown.classList.remove('show');
      }
    });
  }

  function closeAllDropdowns() {
    dropdowns.forEach(function (dropdown) {
      if (window.innerWidth < 992) {
        dropdown.classList.remove('show');
      }
    });
  }

  function closeDropdown(targetDropdown) {
    dropdowns.forEach(function (dropdown) {
      if (dropdown !== targetDropdown && window.innerWidth < 992) {
        dropdown.classList.remove('show');
      }
    });
  }
});


//                                      .................script tag replace ...............................
document.addEventListener('DOMContentLoaded', function () {
    var oldScriptTag = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js';
    var newScriptTag = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';

    var scriptTags = document.querySelectorAll('script[src="' + oldScriptTag + '"]');
    
    scriptTags.forEach(function (scriptTag) {
      var newScript = document.createElement('script');
      newScript.src = newScriptTag;

      // Replace the old script tag with the new one
      scriptTag.parentNode.replaceChild(newScript, scriptTag);

      console.log('Replaced script tag:', scriptTag);
    });
  });