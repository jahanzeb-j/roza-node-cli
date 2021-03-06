# Roza Node Cli

> CLI to check Ramadan Sehar and Iftar times in the command line..

[![DOWNLOADS](https://img.shields.io/npm/dt/roza-cli?label=DOWNLOADS%20%20โฏ&colorA=81F096&colorB=81F096&style=flat)](https://www.npmjs.com/package/roza-cli)

<br>

-   ๐ Get Sehar/Iftar times for your city
-   ๐ Get Sehar/Iftar times for entire month of Ramadan
-   Pakistan 60+ cities data including `lahore`, `multan`, `karachi`, `islamabad`, `rawalpindi`, `quetta`, `peshawar`, `hyderabad`,`faisalabad`, `gujranwala`, `sialkot`, `ghotki` and more
-   International cities `beijing`,
    `wuhan`,
    `shanghai`,
    `new-york`,
    `tokyo`,
    `jeddah`,
    `san-francisco`,
    `mumbai`,
    `Guangzhou`,
    `Delhi`,
    `Moscow`,
    `Shenzhen`,
    `dhaka`,
    `seoul`

<br>

## โ Install

```sh
npx roza
```
> Install using current directory
```sh
git clone https://github.com/jahanzeb-j/oza-node-cli.git
cd roza-node-cli
npm i -g .
```

<br>

## Usage

```sh
# Show today's Sehar/Iftar.
roza Karachi
npx roza

roza #Show time of default city name

# Show help.
roza help

roza beijing
# Show all days.
npx roza lahore --all
roza karachi -a

# Show next day.
roza beijing -n
roza beijing --next
# Set City Name as Default
roza beijing -d
roza
roza -n

# For multiword cities.
npx roza "new-york" --all
```

## ๐ป Output
[![๐](./.github/output.png)](./../../)

<br>

## ๐คContribution
> this repo is open for new ideas
- Correct data.
- Add new city.
    - Add JSON to './data/'
    - Add city name to cities.js

<br>

## ๐ License & Conduct

-   MIT ยฉ [Jahanzeb](https://twitter.com/jahanzebjabbar/)
-   [Code of Conduct](code-of-conduct.md)

<br>

## โ Connect

<div align="left">
    <p><a href="https://github.com/jahanzeb-j"><img alt="GitHub @Jahanzeb-j" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To stay up to date on free & open-source software</small></p>
    <p><a href="https://twitter.com/jahanzebjabbar/"><img alt="Twitter @jahanzebjabbar" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To get #OneDevMinute daily hot tips & trolls</small></p>
    <p><a href="https://www.youtube.com/jahanzebkvlogs"><img alt="YouTube Jahanzeb k vlogs" align="center" src="https://img.shields.io/badge/YOUTUBE-gray.svg?colorB=ff0000&style=flat" /></a>&nbsp;<small><strong>(subscribe)</strong> To tech talks & #OneDevMinute videos</small></p>
    <p><a href="https://jahanzebjabbar.com/"><img alt="Blog: jahanzebjabbar.com" align="center" src="https://img.shields.io/badge/MY%20BLOG-gray.svg?colorB=4D2AFF&style=flat" /></a>&nbsp;<small><strong>(read)</strong> In-depth & long form technical articles</small></p>
    <p><a href="https://www.linkedin.com/in/jahanzeb-jabbar/"><img alt="LinkedIn @Jahanzeb-Jabbar" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&style=flat" /></a>&nbsp;<small><strong>(connect)</strong> On the LinkedIn profile y'all</small></p>
</div>

<br>

## ๐ Credits

<a href="https://github.com/ahmadawais"><img alt="GitHub @AhmadAwais" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" /></a>
Ahmad Awais (https://twitter.com/mrahmadawais/) open-source developer. Thank you for work [ramadan-cli](https://github.com/ahmadawais/ramadan-cli). I further extended his work.
