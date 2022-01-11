// Hide/show dropdown
function getId() {
    document.getElementById("dropdownSearch").classList.toggle("show");
    document.getElementById("search").classList.toggle("clicked");
}



// Closes dropdown when clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropBtn')) {
      var dropdowns = document.getElementsByClassName("dropdownSearch");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (!event.target.matches('.dropBtn')) {
      var dropdowns = document.getElementsByClassName("search");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('clicked')) {
          openDropdown.classList.remove('clicked');
        }
      }
    }
  }

  // Search by month
  filterSelection("clear")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("post");
    if (c == "clear") c = "";
// Add "show" class to filtered posts, removed "show" class for unselected posts
for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered posts
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide unselected posts
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Scroll back to top button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Notifies user when theres no content
function noti() {
  var y = document.getElementsByClassName("show");
  if (y.length == 1) {
    document.getElementById("noti").style.display = "block";
  } else {
    document.getElementById("noti").style.display = "none";
  }
  
}