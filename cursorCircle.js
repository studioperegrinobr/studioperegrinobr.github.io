(function() {
    console.clear();
    
    const follower = document.querySelector('#follower');
    
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    const ease = 0.05;
    let angle = 0;
    
    function easeTo() {    
      const followerBounds = follower.getBoundingClientRect();
      
      const centerX = followerBounds.left + follower.offsetWidth / 2;
      const centerY = followerBounds.top + follower.offsetHeight / 2;

      const dX = mouseX - centerX;
      const dY = mouseY - centerY;
      
      posX += dX * ease;
      posY += dY * ease;
      angle += 0.4;
    }
    
    function update() {
        easeTo();
        follower.style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${angle}deg)`;  
        requestAnimationFrame(update);
      }
    
    function setCoords(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    
      document.onmousemove = setCoords;
    update();
  })();