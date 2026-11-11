/**
 * GOJO SATURO (SATORU GOJO) CALCULATOR
 * Limitless Cursed Energy & Six Eyes Arithmetic Engine
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Audio Engine (Pure Web Audio API Synthesizer)
  // ==========================================================================
  class SorcererAudio {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime); // A5
      osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    }

    playOperator() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    }

    playEquals() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      // Chord release (Cursed Energy Burst)
      const frequencies = [523.25, 659.25, 783.99, 1046.5]; // C5 Major chord
      frequencies.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.02);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime + idx * 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + idx * 0.02);
        osc.stop(this.ctx.currentTime + 0.38);
      });
    }

    playInfinity() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      // Deep cosmic resonant bass sweep
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.6);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.65);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.65);
    }

    playHollowPurple() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Sub bass collision
      const oscSub = this.ctx.createOscillator();
      const gainSub = this.ctx.createGain();
      oscSub.type = 'sine';
      oscSub.frequency.setValueAtTime(110, now);
      oscSub.frequency.exponentialRampToValueAtTime(40, now + 1.2);
      gainSub.gain.setValueAtTime(0.35, now);
      gainSub.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      oscSub.connect(gainSub);
      gainSub.connect(this.ctx.destination);
      oscSub.start(now);
      oscSub.stop(now + 1.2);

      // High frequency laser warp
      const oscLaser = this.ctx.createOscillator();
      const gainLaser = this.ctx.createGain();
      oscLaser.type = 'sawtooth';
      oscLaser.frequency.setValueAtTime(1200, now + 0.5);
      oscLaser.frequency.exponentialRampToValueAtTime(300, now + 1.4);
      gainLaser.gain.setValueAtTime(0.18, now + 0.5);
      gainLaser.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
      oscLaser.connect(gainLaser);
      gainLaser.connect(this.ctx.destination);
      oscLaser.start(now + 0.5);
      oscLaser.stop(now + 1.4);
    }

    playDomainSound() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      [220, 330, 440, 660, 880].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.15);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 2.0);

        gain.gain.setValueAtTime(0.1, now + idx * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.15);
        osc.stop(now + 2.5);
      });
    }
  }

  // ==========================================================================
  // 2. Gojo Quotes & Voice Synthesis
  // ==========================================================================
  const GOJO_QUOTES = [
    { kanji: "「大丈夫、僕 最強だから」", text: "Don't worry, I'm the strongest." },
    { kanji: "「領域展開：無量空処」", text: "Domain Expansion: Unlimited Void!" },
    { kanji: "「天上天下唯我独尊」", text: "Throughout heaven and earth, I alone am the honored one." },
    { kanji: "「虚式『茈』」", text: "Secret Technique: Hollow Purple." },
    { kanji: "「勝つさ」", text: "Nah, I'd win." },
    { kanji: "「少し乱暴しようか」", text: "Shall I get a little rough?" },
    { kanji: "「無限はね、至る所にあるんだよ」", text: "Infinity exists everywhere." }
  ];

  function speakQuote(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.1; // Satoru Gojo confident pitch
      // Prefer Japanese or cool English voice if available
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang.startsWith('en')) || voices[0];
      if (voice) utterance.voice = voice;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Speech synthesis unavailable:", e);
    }
  }

  // ==========================================================================
  // 3. Cursed Particle Canvas (Limitless Barrier Field)
  // ==========================================================================
  class CursedCanvas {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.particleCount = 55;
      this.color = '#00f0ff';
      this.mouse = { x: -1000, y: -1000, radius: 120 };

      this.resize();
      this.initParticles();
      this.bindEvents();
      this.animate();
    }

    resize() {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
    }

    initParticles() {
      this.particles = [];
      for (let i = 0; i < this.particleCount; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9,
          size: Math.random() * 2.5 + 1,
          alpha: Math.random() * 0.6 + 0.2,
          pulse: Math.random() * 0.02 + 0.005
        });
      }
    }

    setColor(hexColor) {
      this.color = hexColor;
    }

    bindEvents() {
      window.addEventListener('resize', () => {
        this.resize();
        this.initParticles();
      });

      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });

      window.addEventListener('mouseleave', () => {
        this.mouse.x = -1000;
        this.mouse.y = -1000;
      });
    }

    animate() {
      this.ctx.clearRect(0, 0, this.width, this.height);

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        // Movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > this.width) p.vx *= -1;
        if (p.y < 0 || p.y > this.height) p.vy *= -1;

        // Limitless Barrier: Repulsion around mouse cursor
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 5;
          p.y += Math.sin(angle) * force * 5;
        }

        // Draw particle
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.globalAlpha = p.alpha;
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = this.color;
        this.ctx.fill();

        // Connect nearby particles with subtle cursed energy threads
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 95) {
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = this.color;
            this.ctx.globalAlpha = (1 - dist2 / 95) * 0.15;
            this.ctx.lineWidth = 0.75;
            this.ctx.stroke();
          }
        }
      }

      this.ctx.globalAlpha = 1.0;
      requestAnimationFrame(() => this.animate());
    }

    burst() {
      // Temporary particle burst
      for (let i = 0; i < 20; i++) {
        this.particles.push({
          x: this.width / 2 + (Math.random() - 0.5) * 200,
          y: this.height / 2 + (Math.random() - 0.5) * 200,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          size: Math.random() * 3.5 + 1.5,
          alpha: 1,
          pulse: 0.03
        });
      }
      setTimeout(() => {
        if (this.particles.length > this.particleCount) {
          this.particles.splice(this.particleCount);
        }
      }, 3000);
    }
  }

  // ==========================================================================
  // 4. Calculator Core Engine
  // ==========================================================================
  class GojoCalculator {
    constructor() {
      this.displayCurrent = document.getElementById('display-current');
      this.displayHistory = document.getElementById('display-history');
      this.energyFill = document.getElementById('energy-fill');
      this.energyText = document.getElementById('energy-percentage');
      this.badgeInfinity = document.getElementById('badge-infinity');
      this.memoryIndicator = document.getElementById('memory-indicator');
      this.angleModeBtn = document.getElementById('btn-angle-mode');
      this.historyList = document.getElementById('history-list');

      this.currentVal = '0';
      this.formula = '';
      this.memoryVal = 0;
      this.angleMode = 'DEG'; // 'DEG' or 'RAD'
      this.isEvaluated = false;
      this.historyEntries = [];

      this.audio = new SorcererAudio();
      this.canvas = new CursedCanvas('cursed-canvas');

      this.init();
    }

    init() {
      this.loadHistory();
      this.bindButtons();
      this.bindKeyboard();
      this.bindThemes();
      this.bindDomainExpansion();
      this.bindHollowPurple();
      this.bindQuotes();
      this.updateDisplay();
    }

    // --- History Storage ---
    loadHistory() {
      try {
        const stored = localStorage.getItem('gojo_calc_history');
        if (stored) {
          this.historyEntries = JSON.parse(stored);
          this.renderHistory();
        }
      } catch (e) {
        console.warn("Could not read localStorage:", e);
      }
    }

    saveHistory(equation, result) {
      const entry = {
        equation,
        result,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      this.historyEntries.unshift(entry);
      if (this.historyEntries.length > 30) this.historyEntries.pop();

      try {
        localStorage.setItem('gojo_calc_history', JSON.stringify(this.historyEntries));
      } catch (e) {}

      this.renderHistory();
    }

    renderHistory() {
      if (!this.historyList) return;
      if (this.historyEntries.length === 0) {
        this.historyList.innerHTML = `<div class="history-empty">No calculations recorded yet in the Limitless domain.</div>`;
        return;
      }

      this.historyList.innerHTML = '';
      this.historyEntries.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
          <div class="history-item-eq">${this.escapeHtml(item.equation)} =</div>
          <div class="history-item-res">${this.escapeHtml(item.result)}</div>
        `;
        div.addEventListener('click', () => {
          this.currentVal = item.result;
          this.formula = item.equation;
          this.isEvaluated = true;
          this.updateDisplay();
          this.audio.playClick();
          document.getElementById('history-drawer').classList.remove('open');
        });
        this.historyList.appendChild(div);
      });
    }

    clearHistory() {
      this.historyEntries = [];
      try {
        localStorage.removeItem('gojo_calc_history');
      } catch (e) {}
      this.renderHistory();
      this.audio.playInfinity();
    }

    escapeHtml(str) {
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // --- Display Update ---
    updateDisplay() {
      this.displayCurrent.textContent = this.currentVal;
      this.displayHistory.textContent = this.formula || '0';

      // Check infinity state
      if (this.currentVal === '∞' || this.currentVal.includes('Infinity') || this.currentVal.includes('LIMITLESS')) {
        this.badgeInfinity.classList.remove('hidden');
      } else {
        this.badgeInfinity.classList.add('hidden');
      }

      // Memory state
      if (this.memoryVal !== 0) {
        this.memoryIndicator.classList.remove('hidden');
      } else {
        this.memoryIndicator.classList.add('hidden');
      }

      // Randomize Cursed Energy Meter
      const energyLevel = Math.min(100, Math.max(10, Math.floor(Math.random() * 20 + 85)));
      this.energyFill.style.width = `${energyLevel}%`;
      this.energyText.textContent = `${energyLevel}% • INFINITY`;
    }

    // --- Input Actions ---
    inputDigit(digit) {
      if (this.isEvaluated) {
        this.currentVal = digit;
        this.formula = '';
        this.isEvaluated = false;
      } else {
        if (this.currentVal === '0' || this.currentVal === 'Error' || this.currentVal === '∞') {
          this.currentVal = digit;
        } else {
          this.currentVal += digit;
        }
      }
      this.audio.playClick();
      this.updateDisplay();
    }

    inputDecimal() {
      if (this.isEvaluated) {
        this.currentVal = '0.';
        this.formula = '';
        this.isEvaluated = false;
      } else {
        if (!this.currentVal.includes('.')) {
          this.currentVal += '.';
        }
      }
      this.audio.playClick();
      this.updateDisplay();
    }

    inputOperator(op) {
      this.audio.playOperator();
      if (this.isEvaluated) {
        this.formula = `${this.currentVal} ${op} `;
        this.currentVal = '0';
        this.isEvaluated = false;
      } else {
        if (this.formula.length > 0 && ['+', '-', '*', '/'].includes(this.formula.trim().slice(-1)) && this.currentVal === '0') {
          // Replace last operator
          this.formula = this.formula.trim().slice(0, -1) + ` ${op} `;
        } else {
          this.formula += `${this.currentVal} ${op} `;
          this.currentVal = '0';
        }
      }
      this.updateDisplay();
    }

    clearEntry() {
      this.audio.playClick();
      this.currentVal = '0';
      this.updateDisplay();
    }

    clearAll() {
      this.audio.playClick();
      this.currentVal = '0';
      this.formula = '';
      this.isEvaluated = false;
      this.updateDisplay();
    }

    backspace() {
      this.audio.playClick();
      if (this.isEvaluated) {
        this.clearAll();
        return;
      }
      if (this.currentVal.length > 1) {
        this.currentVal = this.currentVal.slice(0, -1);
      } else {
        this.currentVal = '0';
      }
      this.updateDisplay();
    }

    negate() {
      this.audio.playClick();
      if (this.currentVal !== '0' && this.currentVal !== 'Error') {
        if (this.currentVal.startsWith('-')) {
          this.currentVal = this.currentVal.substring(1);
        } else {
          this.currentVal = '-' + this.currentVal;
        }
      }
      this.updateDisplay();
    }

    // --- Scientific Functions ---
    executeSciFunc(funcName) {
      this.audio.playOperator();
      const num = parseFloat(this.currentVal);
      if (isNaN(num)) return;

      let result = 0;
      const angleMultiplier = this.angleMode === 'DEG' ? Math.PI / 180 : 1;

      switch (funcName) {
        case 'sin':
          result = Math.sin(num * angleMultiplier);
          // Clean up small floating inaccuracy like sin(180) = 0
          if (Math.abs(result) < 1e-15) result = 0;
          this.formula = `sin(${num})`;
          break;
        case 'cos':
          result = Math.cos(num * angleMultiplier);
          if (Math.abs(result) < 1e-15) result = 0;
          this.formula = `cos(${num})`;
          break;
        case 'tan':
          if (this.angleMode === 'DEG' && (num % 180 === 90 || num % 180 === -90)) {
            this.triggerInfinityEvent();
            return;
          }
          result = Math.tan(num * angleMultiplier);
          this.formula = `tan(${num})`;
          break;
        case 'log':
          if (num <= 0) {
            this.currentVal = 'Error';
            this.updateDisplay();
            return;
          }
          result = Math.log10(num);
          this.formula = `log(${num})`;
          break;
        case 'ln':
          if (num <= 0) {
            this.currentVal = 'Error';
            this.updateDisplay();
            return;
          }
          result = Math.log(num);
          this.formula = `ln(${num})`;
          break;
        case 'sqrt':
          if (num < 0) {
            this.currentVal = 'Error (Imaginary)';
            this.updateDisplay();
            return;
          }
          result = Math.sqrt(num);
          this.formula = `√(${num})`;
          break;
        case 'square':
          result = Math.pow(num, 2);
          this.formula = `sqr(${num})`;
          break;
        case 'power':
          this.formula += `${this.currentVal} ^ `;
          this.currentVal = '0';
          this.updateDisplay();
          return;
        case 'inv':
          if (num === 0) {
            this.triggerInfinityEvent();
            return;
          }
          result = 1 / num;
          this.formula = `1/(${num})`;
          break;
        case 'fact':
          if (num < 0 || !Number.isInteger(num)) {
            this.currentVal = 'Error';
            this.updateDisplay();
            return;
          }
          if (num > 170) {
            this.triggerInfinityEvent();
            return;
          }
          result = this.factorial(num);
          this.formula = `${num}!`;
          break;
        case 'pi':
          this.currentVal = String(Math.PI);
          this.updateDisplay();
          return;
        case 'euler':
          this.currentVal = String(Math.E);
          this.updateDisplay();
          return;
        case 'abs':
          result = Math.abs(num);
          this.formula = `|${num}|`;
          break;
        case 'paren-open':
          if (this.currentVal === '0') {
            this.formula += '(';
          } else {
            this.formula += `${this.currentVal} * (`;
            this.currentVal = '0';
          }
          this.updateDisplay();
          return;
        case 'paren-close':
          this.formula += `${this.currentVal})`;
          this.currentVal = '0';
          this.updateDisplay();
          return;
      }

      this.currentVal = String(this.formatResult(result));
      this.isEvaluated = true;
      this.saveHistory(this.formula, this.currentVal);
      this.updateDisplay();
    }

    factorial(n) {
      if (n === 0 || n === 1) return 1;
      let res = 1;
      for (let i = 2; i <= n; i++) res *= i;
      return res;
    }

    // --- Calculation & Evaluation ---
    calculate() {
      if (this.isEvaluated) return;

      // Check easter eggs first
      const rawInput = this.currentVal.trim();
      if (rawInput === '0712' || rawInput === '1207') {
        this.triggerEasterEgg("🎂 Happy Birthday Satoru Gojo! December 7 (Special Grade Celebration)");
        return;
      }
      if (rawInput === '777') {
        this.triggerEasterEgg("✨ JACKPOT! Restless Gambler Domain - Infinite Cursed Energy!");
        return;
      }
      if (rawInput === '42') {
        this.triggerEasterEgg("🌌 The answer to the universe... but I alone am the honored one.");
        return;
      }

      let expr = this.formula + this.currentVal;
      const fullExpression = expr;

      // Handle power operator ^
      expr = expr.replace(/\^/g, '**');

      // Check division by zero
      if (/\/\s*0(?![0-9.])/.test(expr)) {
        this.triggerInfinityEvent();
        return;
      }

      try {
        // Safe evaluation
        const sanitized = expr.replace(/[^0-9+\-*/().%*^eE\s]/g, '');
        // eslint-disable-next-line no-new-func
        const evaluated = Function(`"use strict"; return (${sanitized})`)();

        if (evaluated === Infinity || evaluated === -Infinity) {
          this.triggerInfinityEvent();
          return;
        }

        if (isNaN(evaluated)) {
          this.currentVal = 'Error';
          this.audio.playInfinity();
        } else {
          this.currentVal = String(this.formatResult(evaluated));
          this.audio.playEquals();
          this.screenShake();
          this.canvas.burst();
          this.saveHistory(fullExpression, this.currentVal);
        }
      } catch (err) {
        console.error("Evaluation error:", err);
        this.currentVal = 'Error';
        this.audio.playInfinity();
      }

      this.formula = fullExpression + ' =';
      this.isEvaluated = true;
      this.updateDisplay();
    }

    formatResult(num) {
      if (Math.abs(num) > 1e12 || (Math.abs(num) < 1e-6 && num !== 0)) {
        return num.toExponential(6);
      }
      // Round to prevent floating point inaccuracies like 0.1 + 0.2 = 0.30000000000000004
      const rounded = Math.round((num + Number.EPSILON) * 1e10) / 1e10;
      return rounded;
    }

    triggerInfinityEvent() {
      this.currentVal = '∞ (LIMITLESS)';
      this.formula = 'Domain Expansion: Infinite Void';
      this.isEvaluated = true;
      this.audio.playInfinity();
      this.screenShake();
      this.canvas.burst();
      this.badgeInfinity.classList.remove('hidden');

      const banner = document.getElementById('quote-banner');
      banner.querySelector('.quote-kanji').textContent = '「勝つさ。無量空処」';
      banner.querySelector('.quote-text').textContent = '"Nah, I\'d win. Limitless takes over!"';
      speakQuote("Nah, I'd win. Limitless!");
      this.updateDisplay();
    }

    triggerEasterEgg(msg) {
      this.currentVal = 'SAIKYOU';
      this.formula = msg;
      this.isEvaluated = true;
      this.audio.playEquals();
      this.screenShake();
      this.canvas.burst();
      this.updateDisplay();
    }

    screenShake() {
      const card = document.querySelector('.calc-card');
      card.classList.remove('screen-shake');
      void card.offsetWidth; // trigger reflow
      card.classList.add('screen-shake');
      setTimeout(() => card.classList.remove('screen-shake'), 400);
    }

    // --- Memory Operations ---
    handleMemory(action) {
      this.audio.playClick();
      const num = parseFloat(this.currentVal) || 0;
      switch (action) {
        case 'mc':
          this.memoryVal = 0;
          break;
        case 'mr':
          this.currentVal = String(this.memoryVal);
          this.isEvaluated = true;
          break;
        case 'm-plus':
          this.memoryVal += num;
          break;
        case 'm-minus':
          this.memoryVal -= num;
          break;
        case 'infinity':
          this.triggerInfinityEvent();
          return;
      }
      this.updateDisplay();
    }

    // --- Bindings ---
    bindButtons() {
      // Keypad buttons
      document.querySelectorAll('.key').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          btn.classList.add('clicked');
          setTimeout(() => btn.classList.remove('clicked'), 200);

          const action = btn.dataset.action;
          const value = btn.dataset.value;

          if (action === 'num') {
            this.inputDigit(value);
          } else if (action === 'decimal') {
            this.inputDecimal();
          } else if (action === 'op') {
            this.inputOperator(value);
          } else if (action === 'equals') {
            this.calculate();
          } else if (action === 'clear-all') {
            this.clearAll();
          } else if (action === 'clear-entry') {
            this.clearEntry();
          } else if (action === 'backspace') {
            this.backspace();
          } else if (action === 'negate') {
            this.negate();
          } else if (['mc', 'mr', 'm-plus', 'm-minus', 'infinity'].includes(action)) {
            this.handleMemory(action);
          } else if (btn.classList.contains('key-sci')) {
            this.executeSciFunc(action);
          }
        });
      });

      // Angle Mode Button
      this.angleModeBtn.addEventListener('click', () => {
        this.angleMode = this.angleMode === 'DEG' ? 'RAD' : 'DEG';
        this.angleModeBtn.textContent = this.angleMode;
        this.audio.playClick();
      });

      // Tabs: Standard vs Scientific
      const tabStd = document.getElementById('tab-std');
      const tabSci = document.getElementById('tab-sci');
      const sciKeypad = document.getElementById('scientific-keypad');

      tabStd.addEventListener('click', () => {
        tabStd.classList.add('active');
        tabSci.classList.remove('active');
        sciKeypad.classList.add('hidden');
        this.audio.playClick();
      });

      tabSci.addEventListener('click', () => {
        tabSci.classList.add('active');
        tabStd.classList.remove('active');
        sciKeypad.classList.remove('hidden');
        this.audio.playClick();
      });

      // Audio toggle
      const btnAudio = document.getElementById('btn-audio');
      const audioIcon = document.getElementById('audio-icon');
      btnAudio.addEventListener('click', () => {
        this.audio.enabled = !this.audio.enabled;
        btnAudio.classList.toggle('active', this.audio.enabled);
        audioIcon.textContent = this.audio.enabled ? '🔊' : '🔇';
      });

      // History drawer toggle
      const btnHistory = document.getElementById('btn-history');
      const historyDrawer = document.getElementById('history-drawer');
      const btnCloseHistory = document.getElementById('btn-close-history');
      const btnClearHistory = document.getElementById('btn-clear-history');

      btnHistory.addEventListener('click', () => {
        historyDrawer.classList.toggle('open');
        this.audio.playClick();
      });

      btnCloseHistory.addEventListener('click', () => {
        historyDrawer.classList.remove('open');
        this.audio.playClick();
      });

      btnClearHistory.addEventListener('click', () => {
        this.clearHistory();
      });
    }

    bindKeyboard() {
      window.addEventListener('keydown', (e) => {
        // Prevent key events when typing inside any inputs (none here, but good practice)
        if (e.target.tagName === 'INPUT') return;

        if (e.key >= '0' && e.key <= '9') {
          this.inputDigit(e.key);
        } else if (e.key === '.') {
          this.inputDecimal();
        } else if (['+', '-', '*', '/'].includes(e.key)) {
          this.inputOperator(e.key);
        } else if (e.key === 'Enter' || e.key === '=') {
          e.preventDefault();
          this.calculate();
        } else if (e.key === 'Backspace') {
          this.backspace();
        } else if (e.key === 'Escape') {
          this.clearAll();
        } else if (e.key === '(') {
          this.executeSciFunc('paren-open');
        } else if (e.key === ')') {
          this.executeSciFunc('paren-close');
        } else if (e.key === '^') {
          this.executeSciFunc('power');
        } else if (e.key === '%') {
          this.inputOperator('%');
        } else if (e.key.toLowerCase() === 's') {
          this.executeSciFunc('sin');
        } else if (e.key.toLowerCase() === 'c') {
          this.executeSciFunc('cos');
        } else if (e.key.toLowerCase() === 't') {
          this.executeSciFunc('tan');
        } else if (e.key.toLowerCase() === 'p') {
          this.executeSciFunc('pi');
        } else if (e.key.toLowerCase() === 'v') {
          document.getElementById('btn-domain').click();
        }
      });
    }

    bindThemes() {
      const pills = document.querySelectorAll('.pill');
      pills.forEach((pill) => {
        pill.addEventListener('click', () => {
          pills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');

          const themeClass = pill.dataset.theme;
          document.body.className = themeClass;

          // Update canvas particle color
          if (themeClass === 'theme-six-eyes') this.canvas.setColor('#00f0ff');
          else if (themeClass === 'theme-blue') this.canvas.setColor('#38bdf8');
          else if (themeClass === 'theme-red') this.canvas.setColor('#ff2a5f');
          else if (themeClass === 'theme-purple') this.canvas.setColor('#c084fc');

          this.audio.playOperator();
        });
      });
    }

    bindDomainExpansion() {
      const domainBtn = document.getElementById('btn-domain');
      const domainOverlay = document.getElementById('domain-overlay');

      domainBtn.addEventListener('click', () => {
        domainOverlay.classList.add('active');
        this.audio.playDomainSound();
        speakQuote("Domain Expansion: Unlimited Void!");

        this.canvas.burst();
        this.screenShake();

        setTimeout(() => {
          domainOverlay.classList.remove('active');
        }, 3800);
      });
    }

    bindHollowPurple() {
      const blastBtn = document.getElementById('btn-hollow-blast');
      const purpleOverlay = document.getElementById('purple-overlay');

      blastBtn.addEventListener('click', () => {
        purpleOverlay.classList.add('active');
        this.audio.playHollowPurple();
        speakQuote("Secret Technique: Hollow Purple!");

        setTimeout(() => {
          this.screenShake();
          this.canvas.setColor('#c084fc');
          this.canvas.burst();
        }, 800);

        setTimeout(() => {
          purpleOverlay.classList.remove('active');
        }, 2200);
      });
    }

    bindQuotes() {
      const quoteBtn = document.getElementById('btn-quote');
      const banner = document.getElementById('quote-banner');
      let quoteIdx = 0;

      quoteBtn.addEventListener('click', () => {
        quoteIdx = (quoteIdx + 1) % GOJO_QUOTES.length;
        const q = GOJO_QUOTES[quoteIdx];
        banner.querySelector('.quote-kanji').textContent = q.kanji;
        banner.querySelector('.quote-text').textContent = `"${q.text}"`;
        speakQuote(q.text);
        this.audio.playClick();
      });
    }
  }

  // Initialize once DOM is loaded
  window.addEventListener('DOMContentLoaded', () => {
    window.gojoCalculator = new GojoCalculator();
  });
})();
