var Tree = (function() {

    //create unordered list representing file structure
    this.createList = function(arr) {

            var ul = $("<ul class='tree'></ul>");

            for (var i = 0; i < arr.length; i++) {
                if (arr[i].type == "file") {
                    var li = "<li>" + arr[i].name + "</li>";
                    ul.append(li);
                } else {
                    //nested folder
                    //recursive call to create ul for nested folder
                    var innerUl = createList(arr[i].children);
                    //make initially closed
                    var li = $("<li class='tree closed'>" + arr[i].name + "</li>");
                    li.append(innerUl[0]);
                    ul.append(li);
                }
            }

            return ul;
        }


        this.setupList = function(options){
            if(!options){
              var options = {
                  beforeEnterState:{},
                  enterAnimation:{duration: 0},
                  leaveAnimation:{duration: 0},
                  afterEnterState:{},
              }
            }
          //initial material icons
          $("li.closed").prepend('<i class="material-icons tree">chevron_right</i>');
          $("li.open").prepend('<i class="material-icons tree">expand_more</i>');

          $("i.tree").click(function() {
              var $li = $(this)
              var state = $li
                  .parent()
                  .hasClass("open");
              if (state) {

                  $li.html("chevron_right");
                  var leaveOptions = {
                      targets: $(this).next().get(0),
                      easing: "easeOutCirc"
                  }

                  leaveOptions = { ...leaveOptions,
                      ...options.leaveAnimation
                  };
                  anime(leaveOptions).finished.then(function() {

                      $li.next().css(options.afterEnterState)

                      $li.parent().removeClass('open').addClass('closed');

                  })


              } else {
                  $li.parent().removeClass('closed').addClass('open');
                  $li.html("expand_more");
                  $li.next().css(options.beforeEnterState)
                  var enterOptions = {
                      targets: $(this).next().get(0),
                      easing: "easeOutCirc"
                  }

                  enterOptions = { ...enterOptions,
                      ...options.enterAnimation
                  };
                  anime(enterOptions);
              }
          });

        }


    return this;
})();
