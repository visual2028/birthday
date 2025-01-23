function openGiftBox() {
    const giftBox = document.getElementById('giftBox');
    const message = document.getElementById('message');
    const sound = document.getElementById('sound');
    const fireworksContainer = document.getElementById('fireworksContainer');
    const sparkleContainer = document.getElementById('sparkleContainer');
    const introMessage = document.getElementById('introMessage');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const confettiContainer = document.getElementById('confettiContainer');
    const heartContainer = document.getElementById('heartContainer');
    const bubblesContainer = document.getElementById('bubblesContainer');
    
    // Play sound
    sound.play();
  
    // Hide the intro message with animation
    introMessage.style.opacity = '0';
  
    // Show fireworks
    fireworksContainer.style.display = 'block';
    generateFireworks();
  
    // Activate sparkles and bubbles
    sparkleContainer.classList.add('active');
    bubblesContainer.classList.add('active');
    
    // Activate confetti
    generateConfetti();
  
    // Show the birthday message after the animation
    setTimeout(() => {
      giftBox.style.display = 'none';
      message.classList.add('show');
      messageHeader.textContent = 'Happy Birthday, Nethmi Kaveesha! 🎉';
      messageText.textContent = 'You are my everything! 💖';
    }, 600);
  
    // Stop sparkles after a short time
    setTimeout(() => {
      sparkleContainer.classList.remove('active');
      fireworksContainer.style.display = 'none';
    }, 5000);
  }
  
  function generateFireworks() {
    for (let i = 0; i < 5; i++) {
      let firework = document.createElement('div');
      firework.classList.add('firework');
      fireworksContainer.appendChild(firework);
      setTimeout(() => {
        firework.style.animation = 'fireworksEffect 1.5s ease-out forwards';
      }, i * 100);
    }
  }
  
  function generateConfetti() {
    for (let i = 0; i < 100; i++) {
      let confettiPiece = document.createElement('div');
      confettiPiece.style.left = Math.random() * 100 + '%';
      confettiPiece.style.animation = `confettiFall ${Math.random() * 5 + 3}s linear infinite`;
      confettiContainer.appendChild(confettiPiece);
    }
  }
  