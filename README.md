<head>
  <style>
    /* Fade-in animation for images */
    .fade-in {
      animation: fadeIn 2s ease-in-out;
    }

    /* Bounce animation for buttons and icons */
    .bounce {
      animation: bounce 2s infinite;
    }

    /* Keyframes for fade-in */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Keyframes for bounce */
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    /* Adding a smooth transition to buttons */
    .button-animate {
      transition: all 0.3s ease-in-out;
    }

    .button-animate:hover {
      transform: scale(1.1);
    }
  </style>
</head>

<div align="center">

  <a href="https://git.io/typing-svg">
    <img class="fade-in" src="https://readme-typing-svg.demolab.com?font=EB+Garamond&weight=800&size=28&duration=4000&pause=1000&random=false&width=435&lines=WELCOME+TO+QUEEN-ISHU-MD;MULTI-DEVICE+WHATSAPP+BOT;DEVELOPED+BY;LAKSIDU+OFFICIAL." alt="Typing SVG" />
  </a>
  <img class="fade-in" src="https://i.imgur.com/dBaSKWF.gif" height="100" width="100%" />
  
  <p align="center">
    <img class="fade-in" src="https://i.imgur.com/dUav9x3.jpeg" width="780px">
  </p>

  <!-- Adding the typing SVG with smooth fade-in effect -->
  <a href="https://whatsapp.com/channel/0029Vao7dOmDOQISArwnHT0e">
    <img class="button-animate bounce" src="https://img.shields.io/badge/Join%20Our%20WhatsApp%20Channel-green" width="350" />
  </a>

  <hr>
  <img class="fade-in" src="http://readme-typing-svg.herokuapp.com?color=d1fa02&center=true&vCenter=true&multiline=false&lines=Created+By+Laksidu_Min" alt="">
  <hr>

  <!-- Adding hover animation to buttons and clickable areas -->
  <h4> Following 👇</h4>
  <h1><a href="https://queen-ishu-md.tiiny.site/" class="button-animate">QUEEN ISHU OFFICIAL WEB SITE</a></h1>
  <p>
    <a href="https://queen-ishu-md.tiiny.site/">
      <img class="button-animate bounce" src="https://img.shields.io/badge/OFFIACIAL%20WEB%20SITE-yellow" alt="OFFIACIAL WEB SITE" width="350" />
    </a>
    <img class="fade-in" src="https://i.imgur.com/dBaSKWF.gif" height="180" width="100%" />
  </p>

  <!-- Adding animated GitHub snake -->
  <p align="center">
    <img src="https://github.com/Platane/snk/raw/output/github-contribution-grid-snake.svg" alt="nz" width="700" />
  </p>

  <hr>
  <img class="fade-in" src="http://readme-typing-svg.herokuapp.com?color=d1fa02&center=true&vCenter=true&multiline=false&lines=Created+By+Laksidu_Min" alt="">
  <hr>

  <h4>🎀🎀🎀🎀🎀🎀🎀FREE DEPLOY WORKFLOWS🎀🎀🎀🎀🎀🎀🎀</h4>
  <pre>
  name: Node.js CI
  on:
    push:
      branches:
        - main
    pull_request:
      branches:
        - main

  jobs:
    build:
      runs-on: ubuntu-latest
      strategy:
        matrix:
          node-version: [20.x]
      steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install dependencies
        run: npm install
      - name: Start application
        run: npm start
  </pre>
</div>
