import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sliders,
  Flame,
  FileDown,
} from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Interactive Bayer 4x4 Dither Canvas Renderer
 * Supports both mouse and iPhone touch interaction + Light/Dark mode
 */
export function DitherImageCanvas({
  imageSrc,
  alt = 'FLAME Kurukshetra Dither Visual',
  className,
  flameTint = true,
  thresholdOffset = 0,
  pixelScale = 2,
}) {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: -999, y: -999, active: false });
  const [loadedImg, setLoadedImg] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => setLoadedImg(img);
    img.src = imageSrc;
  }, [imageSrc]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let animationFrameId;

    const bayer4x4 = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5],
    ];

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      if (width === 0 || height === 0) return;

      ctx.clearRect(0, 0, width, height);

      if (loadedImg) {
        const imgRatio = loadedImg.width / loadedImg.height;
        const canvasRatio = width / height;
        let drawW = width;
        let drawH = height;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
          drawW = height * imgRatio;
          offsetX = -(drawW - width) / 2;
        } else {
          drawH = width / imgRatio;
          offsetY = -(drawH - height) / 2;
        }
        ctx.drawImage(loadedImg, offsetX, offsetY, drawW, drawH);
      } else {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, '#FE5A00');
        grad.addColorStop(0.5, '#2a0f00');
        grad.addColorStop(1, '#000000');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      const mx = pointerRef.current.x;
      const my = pointerRef.current.y;
      const isHovering = pointerRef.current.active;

      const step = Math.max(1, pixelScale);

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const idx = (y * width + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          let lum = 0.299 * r + 0.587 * g + 0.114 * b + thresholdOffset;

          let dist = 9999;
          if (isHovering) {
            const dx = x - mx;
            const dy = y - my;
            dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 75) {
              lum += (75 - dist) * 1.1;
            }
          }

          const bayerVal =
            (bayer4x4[Math.floor(y / step) % 4][Math.floor(x / step) % 4] / 16) * 255;
          const isLit = lum > bayerVal;

          let outR = 14;
          let outG = 14;
          let outB = 16;

          if (isLit) {
            if (flameTint && (lum > 175 || (isHovering && dist < 65))) {
              outR = 254;
              outG = 90;
              outB = 0;
            } else if (flameTint && lum > 125) {
              outR = 248;
              outG = 225;
              outB = 205;
            } else {
              outR = 238;
              outG = 238;
              outB = 238;
            }
          }

          for (let py = 0; py < step && y + py < height; py++) {
            for (let px = 0; px < step && x + px < width; px++) {
              const pIdx = ((y + py) * width + (x + px)) * 4;
              data[pIdx] = outR;
              data[pIdx + 1] = outG;
              data[pIdx + 2] = outB;
              data[pIdx + 3] = 255;
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    render();

    const triggerRender = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };

    canvas.addEventListener('mousemove', triggerRender);
    canvas.addEventListener('mouseleave', triggerRender);
    canvas.addEventListener('touchmove', triggerRender, { passive: true });
    canvas.addEventListener('touchend', triggerRender);
    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', triggerRender);
      canvas.removeEventListener('mouseleave', triggerRender);
      canvas.removeEventListener('touchmove', triggerRender);
      canvas.removeEventListener('touchend', triggerRender);
    };
  }, [loadedImg, flameTint, thresholdOffset, pixelScale]);

  const updatePointer = (clientX, clientY, target) => {
    const rect = target.getBoundingClientRect();
    const scaleX = target.width / rect.width;
    const scaleY = target.height / rect.height;
    pointerRef.current = {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
      active: true,
    };
  };

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={360}
      onMouseMove={(e) => updatePointer(e.clientX, e.clientY, e.currentTarget)}
      onMouseLeave={() => {
        pointerRef.current = { x: -999, y: -999, active: false };
      }}
      onTouchMove={(e) => {
        if (e.touches[0]) {
          updatePointer(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget);
        }
      }}
      onTouchEnd={() => {
        pointerRef.current = { x: -999, y: -999, active: false };
      }}
      aria-label={alt}
      className={cn(
        'w-full h-full object-cover cursor-crosshair transition-transform duration-300',
        className
      )}
    />
  );
}

/**
 * Aceternity "Contact with Dither Image" Component
 * Responsive for iPhone & desktop, with full Light and Dark mode support
 */
export function ContactWithDitherImage({
  onBrochureDownload,
  brochureUrl = '/kuru-general-brochure.pdf',
}) {
  const [step, setStep] = useState(1);
  const [flameMode, setFlameMode] = useState(true);
  const [pixelSize, setPixelSize] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    category: 'Contingent Registration',
    message: '',
    name: '',
    college: '',
    email: '',
    phone: '',
  });

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      category: 'Contingent Registration',
      message: '',
      name: '',
      college: '',
      email: '',
      phone: '',
    });
  };

  return (
    <section
      id="contact-form"
      className="relative w-full overflow-hidden border-b border-black/10 dark:border-white/10 bg-[#FAF9F6] dark:bg-[var(--color-primary-black)] bg-blueprint-grid py-5 sm:py-16 md:py-20 transition-colors duration-300"
    >
      {/* Ambient Flame Orange Glow Orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[220px] sm:h-[420px] w-[280px] sm:w-[680px] rounded-full bg-[var(--color-primary-flame)]/10 dark:bg-[var(--color-primary-flame)]/12 blur-[90px] sm:blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Interactive Dither Shader Controls Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-3 sm:mb-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 rounded-full border border-black/15 dark:border-white/15 bg-white/90 dark:bg-black/80 px-2.5 sm:px-4 py-1 sm:py-1.5 text-xs text-zinc-700 dark:text-white/75 backdrop-blur-md shadow-md">
            <span className="inline-flex items-center gap-1 font-mono uppercase tracking-wider text-[10px] sm:text-[11px]">
              <Sliders className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[var(--color-primary-flame)]" />
              Shader:
            </span>
            <button
              type="button"
              onClick={() => setFlameMode(!flameMode)}
              className={cn(
                'px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition',
                flameMode
                  ? 'bg-[var(--color-primary-flame)] text-white'
                  : 'bg-black/10 dark:bg-white/10 text-zinc-700 dark:text-white/70'
              )}
            >
              {flameMode ? 'Flame Duotone' : 'Mono Matrix'}
            </button>
            <button
              type="button"
              onClick={() => setPixelSize((prev) => (prev === 2 ? 3 : prev === 3 ? 1 : 2))}
              className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/20 text-[10px] sm:text-[11px] font-mono text-zinc-800 dark:text-white transition"
            >
              Grain: {pixelSize}px
            </button>
          </div>
        </div>

        {/* Handwritten Top Prompt ("leave the war room a note") */}
        <div className="text-center mb-1.5 sm:mb-3">
          <p className="font-handwriting text-xl sm:text-3xl text-zinc-800 dark:text-white/90 sm:-rotate-2 inline-block">
            leave the war room a note
          </p>
        </div>

        {/* Transform Selection Box around "CONTACT" Header */}
        <div className="flex justify-center my-2 sm:my-4 px-2">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative inline-block border-2 border-zinc-900 dark:border-white/80 bg-white dark:bg-black/90 px-4 sm:px-12 py-2 sm:py-5 shadow-[0_8px_30px_rgba(254,90,0,0.18)]"
          >
            {/* 4 Corner CAD Selection Handles in Flame Orange */}
            <span className="absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 border border-black bg-[var(--color-primary-flame)] shadow" />
            <span className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 border border-black bg-[var(--color-primary-flame)] shadow" />
            <span className="absolute -bottom-1 -left-1 sm:-bottom-1.5 sm:-left-1.5 h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 border border-black bg-[var(--color-primary-flame)] shadow" />
            <span className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 border border-black bg-[var(--color-primary-flame)] shadow" />

            <h1
              className="font-pixel text-2xl xs:text-3xl sm:text-6xl md:text-7xl tracking-tight uppercase text-zinc-950 dark:text-white select-none leading-none"
              style={{
                textShadow: '2px 2px 0px var(--color-primary-flame)',
              }}
            >
              CONTACT
            </h1>
          </motion.div>
        </div>

        {/* Stage: Center Interactive Note Form first on iPhone, flanked by Polaroids on Desktop */}
        <div className="mt-4 sm:mt-10 grid grid-cols-2 lg:grid-cols-12 gap-2.5 sm:gap-6 lg:gap-8 items-center w-full max-w-full">
          {/* Left Dither Polaroid Card (Straight on mobile so zero horizontal poke, tilted on desktop) */}
          <div className="order-2 lg:order-1 col-span-1 lg:col-span-3 mx-auto w-full max-w-[160px] sm:max-w-[240px] lg:max-w-[280px] lg:-rotate-2 bg-white p-1.5 sm:p-3 pb-2.5 sm:pb-5 shadow-[0_14px_35px_rgba(0,0,0,0.25)] border border-black/15 dark:border-white/20 rounded-sm">
            <div className="relative aspect-[4/4] sm:aspect-[4/5] w-full overflow-hidden bg-black">
              <DitherImageCanvas
                imageSrc="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80"
                alt="Kurukshetra Pro-Night Stage Dither"
                flameTint={flameMode}
                pixelScale={pixelSize}
              />
              <div className="pointer-events-none absolute top-1 left-1 sm:top-2 sm:left-2 rounded bg-black/85 px-1.5 py-0.5 text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-[var(--color-primary-flame)] border border-[var(--color-primary-flame)]/40">
                PRO-NIGHTS
              </div>
            </div>
            <p className="mt-1.5 sm:mt-3 text-center font-handwriting text-base sm:text-2xl text-black font-bold tracking-wide leading-none">
              main arena shot!
            </p>
          </div>

          {/* Center Interactive Multi-Step Sticky Note Card (Order 1 on iPhone) */}
          <div className="order-1 lg:order-2 col-span-2 lg:col-span-6 flex flex-col items-center w-full min-w-0">
            <motion.div
              layout
              className="relative w-full max-w-xl rounded-sm bg-[#F3DFA2] text-black p-3.5 pt-4 sm:p-7 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.18)] border-2 border-[#DEC06A]"
            >
              {/* Subtle top tape accent */}
              <div className="pointer-events-none absolute -top-2.5 left-1/2 -translate-x-1/2 h-4 sm:h-6 w-20 sm:w-32 bg-white/60 backdrop-blur-sm rotate-1 border border-black/10 shadow-sm" />

              <div className="flex items-center justify-between gap-2 border-b border-black/15 pb-2 sm:pb-3 mb-2.5 sm:mb-4">
                <div className="flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-primary-flame)] fill-current shrink-0" />
                  <span className="font-pixel text-[11px] sm:text-sm uppercase tracking-wider text-black">
                    WHAT&apos;S ON YOUR MIND?
                  </span>
                </div>
                <span className="font-mono text-[9px] sm:text-xs font-bold uppercase px-1.5 sm:px-2 py-0.5 bg-black text-[var(--color-primary-flame)]">
                  KURU &apos;27 DESK
                </span>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key={`step-${step}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleNextStep}
                    className="space-y-2.5 sm:space-y-4"
                  >
                    {step === 1 ? (
                      <>
                        <div>
                          <label className="block font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-black/75 mb-1">
                            Select Inquiry Track
                          </label>
                          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5">
                            {[
                              'Contingent Registration',
                              'Sponsorship & Collab',
                              'Sports & Cultural Rules',
                              'Accommodation & Stay',
                            ].map((cat) => (
                              <button
                                type="button"
                                key={cat}
                                onClick={() => setFormData({ ...formData, category: cat })}
                                className={cn(
                                  'px-2 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition border text-center rounded-sm truncate',
                                  formData.category === cat
                                    ? 'bg-[var(--color-primary-flame)] text-white border-black shadow-[2px_2px_0px_#000]'
                                    : 'bg-black/5 text-black/85 border-black/20 hover:bg-black/10'
                                )}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="kuru-message"
                            className="block font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-black/75 mb-1"
                          >
                            Your Message / Contingent Query
                          </label>
                          <textarea
                            id="kuru-message"
                            rows={2}
                            required
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            placeholder="Tell us about your college contingent size, sport/cultural events, or sponsorship..."
                            className="w-full resize-none bg-transparent border-b-2 border-black/30 focus:border-[var(--color-primary-flame)] p-1.5 sm:p-2 text-base font-medium text-black placeholder:text-black/45 focus:outline-none"
                          />
                        </div>
                      </>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                        <div>
                          <label className="block font-mono text-[10px] font-bold uppercase text-black/75 mb-0.5">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Aarav Deshmukh"
                            className="w-full bg-black/5 border border-black/25 px-3 py-2 text-base sm:text-sm font-semibold text-black placeholder:text-black/40 focus:outline-none focus:border-[var(--color-primary-flame)]"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] font-bold uppercase text-black/75 mb-0.5">
                            College / Organization *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.college}
                            onChange={(e) =>
                              setFormData({ ...formData, college: e.target.value })
                            }
                            placeholder="Symbiosis / IIT Bombay"
                            className="w-full bg-black/5 border border-black/25 px-3 py-2 text-base sm:text-sm font-semibold text-black placeholder:text-black/40 focus:outline-none focus:border-[var(--color-primary-flame)]"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] font-bold uppercase text-black/75 mb-0.5">
                            Official Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="contingent@college.edu.in"
                            className="w-full bg-black/5 border border-black/25 px-3 py-2 text-base sm:text-sm font-semibold text-black placeholder:text-black/40 focus:outline-none focus:border-[var(--color-primary-flame)]"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] font-bold uppercase text-black/75 mb-0.5">
                            WhatsApp / Contact No. *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="+91 98201 44510"
                            className="w-full bg-black/5 border border-black/25 px-3 py-2 text-base sm:text-sm font-semibold text-black placeholder:text-black/40 focus:outline-none focus:border-[var(--color-primary-flame)]"
                          />
                        </div>
                      </div>
                    )}

                    {/* Action Footer inside Sticky Note */}
                    <div className="pt-1.5 sm:pt-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        {step === 2 && (
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="inline-flex items-center justify-center gap-1 bg-black/10 hover:bg-black/20 text-black px-3 py-2 font-pixel text-xs uppercase transition"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            BACK
                          </button>
                        )}
                        <button
                          type="submit"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[var(--color-primary-black)] hover:bg-[var(--color-primary-flame)] text-[var(--color-primary-white)] px-4 sm:px-5 py-2.5 font-pixel text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_var(--color-primary-flame)] active:scale-95 transition-all"
                        >
                          {step === 1 ? (
                            <>
                              <span>NEXT (1/2)</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              <span>SEND DISPATCH (2/2)</span>
                              <Send className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>

                      <span className="hidden sm:inline font-mono text-[11px] text-black/60 font-semibold">
                        {formData.category}
                      </span>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-4 text-center space-y-2.5"
                  >
                    <CheckCircle2 className="w-9 h-9 text-[var(--color-primary-flame)] mx-auto" />
                    <h3 className="font-pixel text-sm sm:text-lg uppercase text-black">
                      DISPATCH LOGGED BY KURU WAR ROOM!
                    </h3>
                    <p className="text-xs sm:text-sm text-black/80 max-w-md mx-auto">
                      Thank you, <strong>{formData.name || 'Champion'}</strong> from{' '}
                      <strong>{formData.college || 'your contingent'}</strong>.
                    </p>
                    <div className="pt-1 flex flex-wrap justify-center gap-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="bg-black text-white px-3.5 py-2 font-pixel text-xs uppercase tracking-wider"
                      >
                        Send Another
                      </button>
                      <a
                        href={`mailto:kurukshetra@flame.edu.in?subject=${encodeURIComponent(
                          `[KURU '27] ${formData.category} - ${formData.college}`
                        )}&body=${encodeURIComponent(
                          `Hi FLAME Kurukshetra Team,\n\n${formData.message}\n\nRegards,\n${formData.name}\n${formData.college}\nPhone: ${formData.phone}`
                        )}`}
                        className="bg-[var(--color-primary-flame)] text-white px-3.5 py-2 font-pixel text-xs uppercase tracking-wider border border-black"
                      >
                        Open Mail App
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Handwritten Status Callout & Prominent Brochure CTA directly below note */}
            <div className="mt-3.5 sm:mt-7 flex flex-col items-center gap-2.5 sm:gap-4 w-full px-1">
              <div className="flex items-center justify-center gap-2 text-zinc-800 dark:text-white/90 text-center">
                <span className="font-handwriting text-xl sm:text-3xl tracking-wide text-zinc-900 dark:text-white">
                  Registrations open for{' '}
                  <span className="text-[var(--color-primary-flame)] font-bold">
                    60+ colleges
                  </span>{' '}
                  across India!
                </span>
              </div>

              {/* Prominent Kuru General Brochure Download Button */}
              <a
                href={brochureUrl}
                download="FLAME_Kurukshetra_2027_General_Brochure.pdf"
                onClick={onBrochureDownload}
                className="w-full sm:w-auto justify-center group relative inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-[var(--color-primary-flame)] px-4 sm:px-7 py-3 sm:py-4 text-xs sm:text-base font-extrabold uppercase tracking-wider text-[var(--color-primary-white)] shadow-[0_10px_30px_rgba(254,90,0,0.4)] transition-all duration-300 hover:bg-[#ff6a1a] active:scale-95"
                style={{ fontFamily: 'var(--font-header-spartan)' }}
              >
                <FileDown className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 animate-bounce" />
                <span className="truncate">Download Kuru General Brochure (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Dither Polaroid Card (Straight on mobile so zero horizontal poke, tilted on desktop) */}
          <div className="order-3 col-span-1 lg:col-span-3 mx-auto w-full max-w-[160px] sm:max-w-[240px] lg:max-w-[280px] lg:rotate-2 bg-white p-1.5 sm:p-3 pb-2.5 sm:pb-5 shadow-[0_14px_35px_rgba(0,0,0,0.25)] border border-black/15 dark:border-white/20 rounded-sm">
            <div className="relative aspect-[4/4] sm:aspect-[4/5] w-full overflow-hidden bg-black">
              <DitherImageCanvas
                imageSrc="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=700&q=80"
                alt="Kurukshetra Sports Floodlights Dither"
                flameTint={flameMode}
                pixelScale={pixelSize}
              />
              <div className="pointer-events-none absolute top-1 right-1 sm:top-2 sm:right-2 rounded bg-black/85 px-1.5 py-0.5 text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-[var(--color-primary-flame)] border border-[var(--color-primary-flame)]/40">
                FLOODLIGHTS
              </div>
            </div>
            <p className="mt-1.5 sm:mt-3 text-center font-handwriting text-base sm:text-2xl text-black font-bold tracking-wide leading-none">
              champions under lights!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactWithDitherImage;
