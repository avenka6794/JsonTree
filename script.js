var json = [
  {
    type: "file",
    name: "document"
  },
  {
    type: "folder",
    name: "Desktop",
    children: [
      {
        type: "file",
        name: "subFile.txt"
      },
      {
        type: "file",
        name: "subFile2.txt"
      },
      {
        type: "folder",
        name: "subFolder2",
        children: [
          {
            type: "file",
            name: "subFolder2File"
          }
        ]
      }
    ]
  }
];

var beforeEnterState = {
   "transform":"translateX(-200px)",
   "opacity":0
};
var enterAnimation = {
   translateX: 0,
   opacity: 1,
};

var leaveAnimation = {
  translateX: 200,
  opacity: 0
};
var afterEnterState = {
  "transform":"translateX(0px)",
  "opacity": "0"
};

var options = {
  beforeEnterState,
  enterAnimation,
  leaveAnimation,
  afterEnterState,
}

var list = Tree.createList(json)
$("#target").append(list);

Tree.setupList();
