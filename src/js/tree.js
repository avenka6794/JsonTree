var Tree = (function() {

  var instances = 1;
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
                    var li = $("<li class='tree "+instances+" closed'>" + arr[i].name + "</li>");
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
          console.log(("li"+instances+".closed"))
          $("li."+instances+".closed").prepend('<i class="material-icons tree '+instances+'">chevron_right</i>');
          $("li."+instances+".open").prepend('<i class="material-icons tree '+instances+'">expand_more</i>');

          $("i.tree."+instances).click(function() {
              var $li = $(this)
              var state = $li
                  .parent()
                  .hasClass("open");
              if (state) {

                  $li.html("chevron_right");
                  var leaveOptions = {
                      targets: $(this).next().get(0),
                      easing: "easeOutCirc",
                    duration: 500
                  }

                  leaveOptions = Object.assign({},leaveOptions,options.leaveAnimation);
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
                      easing: "easeOutCirc",
                    duration: 500
                  }

                  enterOptions = Object.assign({},enterOptions,options.enterAnimation);
                  anime(enterOptions);
              }
          });
          instances+=1;

        }


    return this;
})();