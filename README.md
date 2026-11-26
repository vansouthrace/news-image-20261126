# Sum up 26 November's world news in one image

[![make.fun competition](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126)
[![make.fun rank](https://make.fun/badge/news-image-20261126/vansouthrace/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126)
[![make.fun reward](https://make.fun/badge/news-image-20261126/vansouthrace/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126)

A one-image summary of the world's news of Thursday 26 November 2026,
written for the make.fun bounty
[Sum up 26 November's world news in one image](https://make.fun/bounty/news-image-20261126).

The image is a newspaper front page, "THE WORLD TODAY — THURSDAY 26
NOVEMBER 2026", with the day's six most consequential stories: the US
announcing sweeping new tariffs on China, the EU and Brazil; the Houthi
claim of a strike on a Saudi refinery pushing Brent crude above $94; the
Cairo fuel-tanker fire that killed 31; the Colombian police rescue of
supermarket hostages held for 17 hours; BepiColombo reaching Mercury
orbit after eight years; and the storm-postponed 100th Macy's
Thanksgiving Day Parade.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program copies `entry.png` (1024×683, under 1 MiB) to
`entry.png` in the output directory, byte-identical on every run.
It needs no network: the image ships in this repository.
