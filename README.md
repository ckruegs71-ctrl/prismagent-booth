# PrismAgent booth display

A screen for the PrismAgent Solutions booth: a large animated orb that cycles through what an assistant does for a service business, with the call number at the bottom. It runs on its own and never stops.

**Open it:** https://ckruegs71-ctrl.github.io/prismagent-booth/

## Setting it up at the booth

1. Open the link above in Chrome on the booth laptop.
2. Drag the window onto the monitor and press **Windows key + Left arrow** to snap it to the left half (or **Right arrow** for the right half). Windows then offers to fill the other half with another window.
3. Set Windows to never sleep or turn off the screen while plugged in.

For a cleaner look, install it once ahead of time: in Chrome, open the link, then choose the install icon at the right end of the address bar (or menu, then **Cast, save and share**, then **Install page as app**). It then opens from the Start menu in its own window with no tabs or address bar.

After it has been opened once with internet, the laptop keeps a copy, so it still opens if the venue wifi drops.

## Changing the words

The lines live in `demo/booth-display.ts` in the `thinking-orbs` folder on Chad's PC (`C:\dev\thinking-orbs`). To rebuild after an edit:

```
cd C:\dev\thinking-orbs
npx vite build --config vite.config.booth.ts
python scripts/inline-booth.py C:\dev\prismagent-booth
```

Then change `VERSION` in `sw.js`, commit and push.

## Credits

The orb animation is [thinking-orbs](https://github.com/Jakubantalik/thinking-orbs) by Jakub Antalik, MIT License (see `LICENSE-thinking-orbs.txt`).

## Builds reel (the other half of the screen)

**Open it:** https://ckruegs71-ctrl.github.io/prismagent-booth/builds.html

Seven builds, each page scrolling slowly top to bottom with a one-line label. Every company name, person and logo in the screenshots is made up, and the numbers are samples. Screenshots live in `reel/`.
