# BEST Zagreb website, 2021 edition (retired)

Static archive of best.hr as it was before the 2023 rebuild: WordPress 4.9 with the Avada theme, 25 pages and 8 news posts in Croatian and English. It was replaced by the site now archived in [BEST-Zagreb-Web](https://github.com/BEST-Zagreb/BEST-Zagreb-Web) and had not been served since.

## Where it comes from

The retired install was still on the old server as a folder without a working database connection, next to its last database dump. The two were brought back together in a container (PHP 7.2, MySQL 5.7, WordPress 4.9.18), crawled with wget, relinked to relative paths and verified page by page against the running copy: all 33 pages identical in visible text before redaction.

The database had last been run with a newer Avada than the theme files on disk, which hid the header and menu. Six theme options were restored to the spelling the on-disk version expects; nothing else in the database was changed.

## What is missing

The folder's uploads had been emptied long before the rescue. Images were recovered from two 2018 backups found in a home directory on the server, from the other BEST sites' uploads, and from the Wayback Machine; missing thumbnail sizes were regenerated from the originals. Thirteen images could not be found anywhere and show as broken: eight team photos from March 2019 on the EBEC organising team post, four recruitment graphics from the "Regrutacije" post, and the Career Day lightbulb on the projects page.

## What was changed on purpose

Personal e-mail addresses and phone numbers were replaced with the board's role address, as on the other archives. Links to the sister sites (`/course/`, `/dankarijera/`) are kept root-relative for the cutover. Two partner pages that never existed in the database were unlinked. Feed, oEmbed and RSD links point at best.hr as they always did.

Avada is a paid theme; its files are included only so the archive renders and should not be reused elsewhere.

## Hosting

Live at <https://2021.best.hr/>, served by Cloudflare Workers as static files straight from this repository.
Every push to `main` is deployed by Workers Builds within a minute or two; the `dev` branch gets a preview at <https://dev-best-zagreb-web-2021.best-zagreb-account.workers.dev/>. Every page carries an archive notice and a noindex header, added at the edge by `banner.js`; the archived files themselves are untouched.

## Wayback Machine

This edition ran at <https://best.hr/>. The Internet Archive's calendar for the address is <https://web.archive.org/web/*/https://best.hr/*>; it covers every era of the site, so pick dates up to the end of 2021 for this one.
Checked on 2026-09-11: the first WordPress URL of best.hr in the index dates from 2017-11-30 and the last home page capture of 2021 is from 2021-12-22; 136 distinct HTML pages outside the sub-sites were first captured in that window. The archive's best.hr history as a whole starts on 2003-07-11.
This repository is the complete copy of the edition as it was rebuilt from the retired install; the archive is a partial, independent second copy.
