// Crystal UI engine — háptica, luz-cursor, parallax, vidrio vivo, reveal.
export function initCrystal(opts = {}) {
  const cleanups = [];
  const down = (e) => {
    const el = e.target.closest('button,[role=button],.cr-toggle,.cr-chip');
    if (!el) return;
    if (navigator.vibrate) navigator.vibrate(8);
    el.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(0.93)', offset: .35 },
       { transform: 'scale(1.03)', offset: .7 }, { transform: 'scale(1)' }],
      { duration: 280, easing: 'cubic-bezier(.34,1.56,.64,1)', composite: 'add' });
  };
  document.addEventListener('pointerdown', down, true);
  cleanups.push(() => document.removeEventListener('pointerdown', down, true));

  const turb = document.querySelector('#lg-dist feTurbulence');
  let t = 0, raf1;
  const breathe = () => {
    t += 0.006;
    if (turb) turb.setAttribute('baseFrequency',
      (0.008 + Math.sin(t) * 0.0025).toFixed(4) + ' ' + (0.02 + Math.cos(t * .7) * 0.005).toFixed(4));
    raf1 = requestAnimationFrame(breathe);
  };
  raf1 = requestAnimationFrame(breathe);
  cleanups.push(() => cancelAnimationFrame(raf1));

  let mx = innerWidth / 2, my = innerHeight / 3, raf2;
  const pm = (e) => { mx = e.clientX; my = e.clientY; };
  addEventListener('pointermove', pm, { passive: true });
  const mesh = document.querySelector(opts.meshSelector || '.cr-mesh');
  const loop = () => {
    const dx = mx / innerWidth - .5, dy = my / innerHeight - .5;
    if (mesh) mesh.style.transform = `translate(${(dx * 36).toFixed(1)}px,${(dy * 26 - scrollY * .045).toFixed(1)}px)`;
    document.querySelectorAll('[data-glow]').forEach(el => {
      const r = el.getBoundingClientRect();
      const gx = mx - r.left, gy = my - r.top;
      el.style.setProperty('--gx', gx + 'px');
      el.style.setProperty('--gy', gy + 'px');
      el.style.setProperty('--glow-o',
        gx > -200 && gx < r.width + 200 && gy > -200 && gy < r.height + 200 ? 1 : 0);
    });
    raf2 = requestAnimationFrame(loop);
  };
  raf2 = requestAnimationFrame(loop);
  cleanups.push(() => { removeEventListener('pointermove', pm); cancelAnimationFrame(raf2); });

  const io = new IntersectionObserver((ents) => {
    ents.forEach(en => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      [...en.target.children].forEach((ch, i) => ch.animate(
        [{ opacity: 0, filter: 'blur(16px)', transform: 'translateY(26px)' },
         { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0px)' }],
        { duration: 780, delay: i * 75, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' }));
    });
  }, { threshold: .1 });
  document.querySelectorAll('[data-reveal]').forEach(s => io.observe(s));
  cleanups.push(() => io.disconnect());

  return () => cleanups.forEach(fn => fn());
}

export function jelly(el) {
  if (navigator.vibrate) navigator.vibrate([10, 30, 10]);
  el.animate([
    { transform: 'scale(1,1)' }, { transform: 'scale(1.25,0.72)', offset: .2 },
    { transform: 'scale(0.82,1.18)', offset: .45 }, { transform: 'scale(1.1,0.92)', offset: .68 },
    { transform: 'scale(0.96,1.04)', offset: .85 }, { transform: 'scale(1,1)' }
  ], { duration: 650, easing: 'linear' });
}
