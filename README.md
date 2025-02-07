# WoWA

[![cover](https://coveralls.io/repos/github/antiwinter/wowa/badge.svg?branch=master)](https://coveralls.io/github/antiwinter/wowa?branch=master)
[![status](https://travis-ci.org/antiwinter/wowa.svg?branch=master)](https://travis-ci.org/antiwinter/wowa)
[![npm](https://img.shields.io/npm/v/wowa.svg)](https://www.npmjs.com/package/wowa)
[![npm](https://img.shields.io/npm/l/wowa.svg)](https://github.com/antiwinter/wowa/blob/master/LICENSE)
[![install size](https://packagephobia.now.sh/badge?p=wowa)](https://packagephobia.now.sh/result?p=wowa)
![platform](https://img.shields.io/badge/platform-windows%20%7C%20macos%20%7C%20linux-lightgrey)

**Recent Notice**

- Add support for `PTR` and `BETA` mode, see [switch modes](#switch-modes)
- Now `ls` only prints short message, if you want detailed message, use `wowa ls -l`
- Add support for [TukUI](https://tukui.org). `wowa add 0-tukui`, `wowa search tukui:elvui`
- Add support for WoW Classic, use `wowa switch` to switch mode between `_classic_` and `_retail_`, use `wowa ls` to check which mode you are in. When switched to `_classic_` mode, **wowa** will download the correct addon version that matches **1.13.x**
- [curse](https://www.curseforge.com/wow/addons), [wowinterface](https://www.wowinterface.com/addons.php), [github](https://github.com), [tukui](https://tukui.org) are supported
- node version: ![node](https://img.shields.io/node/v/wowa)

---

**WoWA** stands for World of Warcraft Assistant, it is designed to help managing WoW addons, uploading WCL logs, etc.

There used to be some command line manager for WoW addons in the past, but are mostly out of maintaince at this time. A list of these projects can be found in the [related prjects](#related-projects) section.

As comparing to these projects, **WoWA** offers serveral advantages:

- Better CLI interface: colorful and meaningful
- Concurrency: when installing or updating, WoWA can take advantage of multi-processing
- **wowaads.json** file: this is the file where WoWA stores addon information. Unlike other projects, WoWA stores this file in the **WTF** folder. This design benifits people when they want to backup their WoW setting. Backing up one **WTF** folder is enough

## Install

```
npm install -g wowa
```

## Setup WoW path

The WoW path configuration file is located at `%APPDATA%/wowa/wow_path.txt` on Windows, and `~/.wowa/wow_path.txt` on macOS or Linux.

Normally **wowa** would remind you to edit this file if it cannot find the game at its default location.

## Usage

### Quick reference

**To install an addon**

```
wowa add deadly-boss-mods                       # install dbm from curse
wowa add curse:deadly-boss-mods                 # install dbm from curse
wowa add mmoui:8814-DeadlyBossMods              # install dbm from wowinterface
wowa add 8814-DeadlyBossMods                    # install dbm from wowinterface
wowa add deadlybossmods/deadlybossmods          # install dbm from github
wowa add bigwigsmods/bigwigs/classic            # install bigwigs (classic branch) from github
wowa add antiwinter/dlt                         # install dlt from github
```

**To search an addon**

```
wowa search dbm                                 # search for dbm automatically
wowa search mmoui:dbm                           # search for dbm only from wowinterface
```

### Installing an addon

![](https://raw.githubusercontent.com/antiwinter/scrap/master/wowa/ins1-min.gif)

### Search for an addon

![](https://raw.githubusercontent.com/antiwinter/scrap/master/wowa/search-min.gif)

**Note:** that WoWA manages addons by keys (keys are provided by [curse](https://www.curseforge.com)) not by addon names, sometimes they are different. If you are not sure a key for an addon, you can search that addon by some fuzzy name, and the search result provides the correct key to use.

### Installing two or more addons

![](https://raw.githubusercontent.com/antiwinter/scrap/master/wowa/ins2-min.gif)

### Removing an addon

![](https://raw.githubusercontent.com/antiwinter/scrap/master/wowa/rm-min.gif)

### Update all installed addons

![](https://raw.githubusercontent.com/antiwinter/scrap/master/wowa/update-min.gif)

### List all installed addons

![](https://raw.githubusercontent.com/antiwinter/scrap/master/wowa/ls-min.gif)

### Import local addons

If use **wowa** for the first time, you need to import your local addon. Then **wowa** can manage them for you.

```
wowa import
```

### Switch modes

```
wowa sw                 switch between _retail_ and _classic_
wowa sw --ptr           switch mode to: retail PTR
wowa sw --beta          switch mode to: retail BETA
wowa sw --retail        switch mode to: retail formal
wowa sw --retail-ptr    switch mode to: retail PTR
wowa sw --retail-beta   switch mode to: retail BETA
wowa sw --classic       switch mode to: classic formal
wowa sw --classic-ptr   switch mode to: classic PTR
wowa sw --classic-beta  switch mode to: classic BETA
```

## Related projects

### Actively maintained

- [layday/instawow](https://github.com/layday/instawow) - ![update](https://img.shields.io/github/last-commit/layday/instawow) ![interface](https://img.shields.io/badge/interface-CLI-brightgreen) ![lang](https://img.shields.io/github/languages/top/layday/instawow) ![stars](https://img.shields.io/github/stars/layday/instawow)
- [erikabp123/ClassicAddonManager](https://github.com/erikabp123/ClassicAddonManager) - ![update](https://img.shields.io/github/last-commit/erikabp123/ClassicAddonManager) ![interface](https://img.shields.io/badge/interface-GUI-brightgreen) ![lang](https://img.shields.io/github/languages/top/erikabp123/ClassicAddonManager) ![stars](https://img.shields.io/github/stars/erikabp123/ClassicAddonManager)
- [AcidWeb/CurseBreaker](https://github.com/AcidWeb/CurseBreaker) - ![update](https://img.shields.io/github/last-commit/AcidWeb/CurseBreaker) ![interface](https://img.shields.io/badge/interface-CLI-brightgreen) ![lang](https://img.shields.io/github/languages/top/AcidWeb/CurseBreaker) ![stars](https://img.shields.io/github/stars/AcidWeb/CurseBreaker)
- [Saionaro/wow-addons-updater](https://github.com/Saionaro/wow-addons-updater) - ![update](https://img.shields.io/github/last-commit/Saionaro/wow-addons-updater) ![interface](https://img.shields.io/badge/interface-GUI-brightgreen) ![lang](https://img.shields.io/github/languages/top/Saionaro/wow-addons-updater) ![stars](https://img.shields.io/github/stars/Saionaro/wow-addons-updater)
- [ogri-la/wowman](https://github.com/ogri-la/wowman) - ![update](https://img.shields.io/github/last-commit/ogri-la/wowman) ![interface](https://img.shields.io/badge/interface-GUI-brightgreen) ![lang](https://img.shields.io/github/languages/top/ogri-la/wowman) ![stars](https://img.shields.io/github/stars/ogri-la/wowman)
- [vargen2/Addon](https://github.com/vargen2/Addon) - ![update](https://img.shields.io/github/last-commit/vargen2/Addon) ![interface](https://img.shields.io/badge/interface-GUI-brightgreen) ![lang](https://img.shields.io/github/languages/top/vargen2/Addon) ![stars](https://img.shields.io/github/stars/vargen2/Addon)
- [ephraim/lcurse](https://github.com/ephraim/lcurse) - ![update](https://img.shields.io/github/last-commit/ephraim/lcurse) ![interface](https://img.shields.io/badge/interface-GUI-brightgreen) ![lang](https://img.shields.io/github/languages/top/ephraim/lcurse) ![stars](https://img.shields.io/github/stars/ephraim/lcurse)

### Not Actively maintained

- [nazarov-tech/wowa](https://github.com/nazarov-tech/wowa) - ![update](https://img.shields.io/github/last-commit/nazarov-tech/wowa) ![interface](https://img.shields.io/badge/interface-CLI-brightgreen) ![lang](https://img.shields.io/github/languages/top/nazarov-tech/wowa) ![stars](https://img.shields.io/github/stars/nazarov-tech/wowa)
- [Lund259/WoW-Addon-Manager](https://github.com/Lund259/WoW-Addon-Manager) - ![update](https://img.shields.io/github/last-commit/Lund259/WoW-Addon-Manager) ![interface](https://img.shields.io/badge/interface-GUI-brightgreen) ![lang](https://img.shields.io/github/languages/top/Lund259/WoW-Addon-Manager) ![stars](https://img.shields.io/github/stars/Lund259/WoW-Addon-Manager)
- [OpenAddOnManager/OpenAddOnManager](https://github.com/OpenAddOnManager/OpenAddOnManager) - ![update](https://img.shields.io/github/last-commit/OpenAddOnManager/OpenAddOnManager) ![interface](https://img.shields.io/badge/interface-GUI-brightgreen) ![lang](https://img.shields.io/github/languages/top/OpenAddOnManager/OpenAddOnManager) ![stars](https://img.shields.io/github/stars/OpenAddOnManager/OpenAddOnManager)
- [vargen2/addonmanager](https://github.com/vargen2/addonmanager) - ![update](https://img.shields.io/github/last-commit/vargen2/addonmanager) ![interface](https://img.shields.io/badge/interface-GUI-brightgreen) ![lang](https://img.shields.io/github/languages/top/vargen2/addonmanager) ![stars](https://img.shields.io/github/stars/vargen2/addonmanager)
- [qwezarty/wow-addon-manager](https://github.com/qwezarty/wow-addon-manager) - ![update](https://img.shields.io/github/last-commit/qwezarty/wow-addon-manager) ![interface](https://img.shields.io/badge/interface-CLI-brightgreen) ![lang](https://img.shields.io/github/languages/top/qwezarty/wow-addon-manager) ![stars](https://img.shields.io/github/stars/qwezarty/wow-addon-manager)
- [WorldofAddons/worldofaddons](https://github.com/WorldofAddons/worldofaddons) - ![update](https://img.shields.io/github/last-commit/WorldofAddons/worldofaddons) ![interface](https://img.shields.io/badge/interface-GUI-brightgreen) ![lang](https://img.shields.io/github/languages/top/WorldofAddons/worldofaddons) ![stars](https://img.shields.io/github/stars/WorldofAddons/worldofaddons)
- [sysworx/wowam](https://github.com/sysworx/wowam) - ![update](https://img.shields.io/github/last-commit/sysworx/wowam) ![interface](https://img.shields.io/badge/interface-GUI-brightgreen) ![lang](https://img.shields.io/github/languages/top/sysworx/wowam) ![stars](https://img.shields.io/github/stars/sysworx/wowam)
- [kuhnertdm/wow-addon-updater](https://github.com/kuhnertdm/wow-addon-updater) - ![update](https://img.shields.io/github/last-commit/kuhnertdm/wow-addon-updater) ![interface](https://img.shields.io/badge/interface-CLI-brightgreen) ![lang](https://img.shields.io/github/languages/top/kuhnertdm/wow-addon-updater) ![stars](https://img.shields.io/github/stars/kuhnertdm/wow-addon-updater)
- [JonasKnarbakk/GWAM](https://github.com/JonasKnarbakk/GWAM) - ![update](https://img.shields.io/github/last-commit/JonasKnarbakk/GWAM) ![interface](https://img.shields.io/badge/interface-GUI-brightgreen) ![lang](https://img.shields.io/github/languages/top/JonasKnarbakk/GWAM) ![stars](https://img.shields.io/github/stars/JonasKnarbakk/GWAM)
- [Sumolari/WAM](https://github.com/Sumolari/WAM) - ![update](https://img.shields.io/github/last-commit/Sumolari/WAM) ![interface](https://img.shields.io/badge/interface-CLI-brightgreen) ![lang](https://img.shields.io/github/languages/top/Sumolari/WAM) ![stars](https://img.shields.io/github/stars/Sumolari/WAM)
- [wttw/wowaddon](https://github.com/wttw/wowaddon) - ![update](https://img.shields.io/github/last-commit/wttw/wowaddon) ![interface](https://img.shields.io/badge/interface-CLI-brightgreen) ![lang](https://img.shields.io/github/languages/top/wttw/wowaddon) ![stars](https://img.shields.io/github/stars/wttw/wowaddon)
- [DayBr3ak/wow-better-cli](https://github.com/DayBr3ak/wow-better-cli) - ![update](https://img.shields.io/github/last-commit/DayBr3ak/wow-better-cli) ![interface](https://img.shields.io/badge/interface-CLI-brightgreen) ![lang](https://img.shields.io/github/languages/top/DayBr3ak/wow-better-cli) ![stars](https://img.shields.io/github/stars/DayBr3ak/wow-better-cli)
- [acdtrx/wowam](https://github.com/acdtrx/wowam) - ![update](https://img.shields.io/github/last-commit/acdtrx/wowam) ![interface](https://img.shields.io/badge/interface-CLI-brightgreen) ![lang](https://img.shields.io/github/languages/top/acdtrx/wowam) ![stars](https://img.shields.io/github/stars/acdtrx/wowam)
- [zekesonxx/wow-cli](https://github.com/zekesonxx/wow-cli) - ![update](https://img.shields.io/github/last-commit/zekesonxx/wow-cli) ![interface](https://img.shields.io/badge/interface-CLI-brightgreen) ![lang](https://img.shields.io/github/languages/top/zekesonxx/wow-cli) ![stars](https://img.shields.io/github/stars/zekesonxx/wow-cli)
- [SeriousBug/WoWutils](https://github.com/SeriousBug/WoWutils) - ![update](https://img.shields.io/github/last-commit/SeriousBug/WoWutils) ![interface](https://img.shields.io/badge/interface-CLI-brightgreen) ![lang](https://img.shields.io/github/languages/top/SeriousBug/WoWutils) ![stars](https://img.shields.io/github/stars/SeriousBug/WoWutils)

## Roadmap

- [x] Support projects on wowinterface.com
- [x] Support projects on github.com
- [ ] Game version detection
- [x] Add test cases
- [x] Support projects on tukui.org
- [x] **Support WoW Classic !**
- [x] Import existing addons
- [x] Check **wowa** updates
- [ ] Optimize color scheme
- [ ] Shrink size of package
- [ ] Support releasing UI (addons list, together with settings) to github.com
- [ ] Support backing up to github.com
- [ ] Support restoring from github.com
- [ ] Support uploading to warcraftlogs.com
