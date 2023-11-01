let items = document.querySelectorAll(".item");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
console.log(box2);

for (let item of items) {
  item.addEventListener("dragstart", function (e) {
    //   e.preventDefault();
    let selected = e.target;

    box2.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    box2.addEventListener("drop", function (e) {
      e.preventDefault();
      console.log("salam");

      box2.appendChild(selected);
      selected = null;
    });
    box1.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    box1.addEventListener("drop", function (e) {
      e.preventDefault();
      console.log("salam");

      box1.appendChild(selected);
      selected = null;
    });
  });
}
(function () {
  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    console.log(event.pageX, event.pageY);

    // Use event.pageX / event.pageY here
  }
})();
