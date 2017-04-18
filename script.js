$(document).ready(function() {
  //create x for each list
  var list = document.getElementsByClassName("listItem");
  for (var i=0; i<list.length; i++) {
    var span = document.createElement("span"); // <span></span>
    span.setAttribute("class", "hide");       // <span="hide"></span>
    var x = document.createTextNode("\u25bd");
    span.append(x);                           // <span="hide">x</span>
    list[i].append(span);                     // <li class="listItem"><span="hide">x</span><li>
  }

  // click on the triangle to hide
  $(".hide").click(function() {
    this.parentElement.style.display = "none";
  });


  var list = document.getElementsByClassName("listItem");
  for (var i=0; i<list.length; i++){
    list[i].onclick = function() {
      var parent = $(this).parent(); // gets the parent element
      var firChild = $(this).children(); // first child of clicked li

        var children = parent.children(); // get the whole list
        var count = 0;
        for (var j=0; j<children.length; j++) {
          if ($(children[j]).hasClass("check")) { // if the element has class check
            $(this).insertBefore(children[j]); // insert the element with the class before the first element the class check
            count++;
            break;
          }
        }


      if (count == 0)
        parent.append(this);

      $(this).toggleClass("check"); // add a check class to element
    }
  }

  $(".input").keypress(function(e) { //<input></input>
    var text = this.value; // gets the value of the input

    if (e.which == 13) { // when enter is pressed

      var toDoItem = document.createElement("li"); // creates <li></li>
      toDoItem.setAttribute("class", "listItem");       // <li class=listItem></li>
      var p = document.createElement("p");        // <p></p>
      p.setAttribute("class", "ItemText");        // <p class="ItemText"></p>
      p.append(text);                             // <p class="ItemText">text</p>
      toDoItem.append(p);                         // <li class=listItem><p class="ItemText"></p></li>

      var ul = $(this).siblings(".listUl");        // <ul class="listUl"></ul>

      var children = $(ul).children();               // get the whole listItem

      // adds the new item before the checked items
      var count = 0;
      for (var i=0; i<children.length; i++) {
        if ($(children[i]).hasClass("check")) { // if the element has class check
          $(toDoItem).insertBefore(children[i]); // insert the element with the class before the first element the class check
          count++;
          break;
        }
      }
      if (count == 0)         // if there are no checked items
        ul.append(toDoItem);

      this.value = ''; // resets input value

      // create x when enter is pressed
      var span = document.createElement("span");
      var x = document.createTextNode("\u25bd");
      span.setAttribute("class", "hide");
      span.append(x);
      toDoItem.append(span);

      // when x is clicked on
      $(".hide").click(function() {
        this.parentElement.style.display = "none";
      });

      // console.log(list);
      // $(list).click(function() {
      //     console.log(list);
      // });

      // crosses out to do item when clicked
      for (var i=0; i<list.length; i++){

        list[i].onclick = function() {
          var parent = $(this).parent(); // gets the parent element
          var firChild = $(this).children(); // first child of clicked li

            var children = parent.children(); // get the whole list
            var count = 0;
            for (var j=0; j<children.length; j++) {
              if ($(children[j]).hasClass("check")) { // if the element has class check
                $(this).insertBefore(children[j]); // insert the element with the class before the first element the class check
                count++;
                break;
              }
            }


          if (count == 0)
            parent.append(this);

          $(this).toggleClass("check"); // add a check class to element
        }
      }
    }
  });
});
