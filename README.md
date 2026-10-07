# LUMEN Studio

A credit-based AI image and short-film generation service: a landing site with pricing, a studio app, a developer API, and the orchestrator behind it that plans a shot, searches variations, judges them with a vision model and repairs what fails.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Stars](https://img.shields.io/github/stars/suncal/lumen-studio?style=social)](https://github.com/suncal/lumen-studio/stargazers)

## What it does

- `site/`: landing, pricing ($9/$29/$79 credit packs), studio, gallery, API docs
- `cloud/`: Cloudflare Worker with per-customer API keys, key minting, daily spend caps, fal.ai integration
- Orchestrator: plan → search → VLM judge → repair loop, plus a DPO preference flywheel from your own picks
- `motion/`: keyframe-anchored film maker with a real per-second cost model

## Run it

`python3 api.py` then open http://127.0.0.1:8377/. Deploy `cloud/` with `wrangler deploy` and set `FAL_KEY` as a secret. See `cloud/README.md`.

---

**If this is useful to you, a ⭐ on the repo helps other people find it.** Issues and pull requests are welcome.

Built by [Priyankar "Sunny" Chakraborty](https://github.com/suncal) · [everbuiltstudio.com](https://everbuiltstudio.com)
