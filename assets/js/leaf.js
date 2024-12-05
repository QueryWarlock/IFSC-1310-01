document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const total = 30;
    const w = header.offsetWidth;
    const h = header.offsetHeight;
    
    // Set header's relative position if not already set
    if (getComputedStyle(header).position === 'static') {
      header.style.position = 'relative';
    }
  
    for (let i = 0; i < total; i++) {
      const leaf = document.createElement("div");
      leaf.className = "dot";
      TweenLite.set(leaf, {
        x: R(0, w), // Constrain leaves horizontally within header width
        y: R(-200, -50), // Start slightly above header
        z: R(-200, 200),
      });
      header.appendChild(leaf);
      animateLeaf(leaf, h);
    }
  
    function animateLeaf(leaf, height) {
      TweenMax.to(leaf, R(6, 15), {
        y: height + 50, // End slightly below the header
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
      });
      TweenMax.to(leaf, R(4, 8), {
        x: "+=100", // Allow slight horizontal movement
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });
      TweenMax.to(leaf, R(2, 8), {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
    }
  
    function R(min, max) {
      return min + Math.random() * (max - min);
    }
  });
  