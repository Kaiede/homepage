<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="images/banner_light@2x.png">
    <img src="images/banner_dark@2x.png" width="65%">
  </picture>
</p>

<p align="center">
  A modern, <em>fully static, fast</em>, secure <em>fully proxied</em>, highly customizable application dashboard with integrations for over 100 services and translations into multiple languages. Easily configured via YAML files or through docker label discovery.
</p>

<p align="center">
  <img src="images/1.png?v=2" />
</p>

<p align="center">
  <a href="https://github.com/gethomepage/homepage/actions/workflows/docker-publish.yml"><img alt="GitHub Workflow Status (with event)" src="https://img.shields.io/github/actions/workflow/status/gethomepage/homepage/docker-publish.yml"></a>
  &nbsp;
  <a href="https://crowdin.com/project/gethomepage" target="_blank"><img src="https://badges.crowdin.net/gethomepage/localized.svg"></a>
  &nbsp;
  <a href="https://discord.gg/k4ruYNrudu"><img alt="Discord" src="https://img.shields.io/discord/1019316731635834932"></a>
  &nbsp;
  <a href="https://gethomepage.dev/" title="Docs"><img title="Docs" src="https://github.com/gethomepage/homepage/actions/workflows/docs-publish.yml/badge.svg"/></a>
  &nbsp;
  <a href="https://paypal.me/phelpsben" title="Donate"><img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/benphelps"></a>
</p>

<p align="center">
  <a href="https://www.digitalocean.com/?refcode=df14bcb7c016&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" alt="DigitalOcean Referral Badge" /></a>
</p>
<p align="center">
<em>Homepage builds are kindly powered by DigitalOcean.</em>
</p>

# Features

With features like quick search, bookmarks, weather support, a wide range of integrations and widgets, an elegant and modern design, and a focus on performance, Homepage is your ideal start to the day and a handy companion throughout it.

- **Fast** - The site is statically generated at build time for instant load times.
- **Secure** - All API requests to backend services are proxied, keeping your API keys hidden. Constantly reviewed for security by the community.
- **For Everyone** - Images built for AMD64, ARM64.
- **Full i18n** - Support for over 40 languages.
- **Service & Web Bookmarks** - Add custom links to the homepage.
- **Docker Integration** - Container status and stats. Automatic service discovery via labels.
- **Service Integration** - Over 100 service integrations, including popular starr and self-hosted apps.
- **Information & Utility Widgets** - Weather, time, date, search, and more.
- **And much more...**

## Docker Integration

Homepage has built-in support for Docker, and can automatically discover and add services to the homepage based on labels. See the [Docker Service Discovery](https://gethomepage.dev/configs/docker/#automatic-service-discovery) page for more information.

## Service Widgets

Homepage also has support for hundreds of 3rd-party services, including all popular \*arr apps, and most popular self-hosted apps. Some examples include: Radarr, Sonarr, Lidarr, Bazarr, Ombi, Tautulli, Plex, Jellyfin, Emby, Transmission, qBittorrent, Deluge, Jackett, NZBGet, SABnzbd, etc. As well as service integrations, Homepage also has a number of information providers, sourcing information from a variety of external 3rd-party APIs. See the [Service](https://gethomepage.dev/widgets/) page for more information.

## Information Widgets

Homepage has built-in support for a number of information providers, including weather, time, date, search, glances and more. System and status information presented at the top of the page. See the [Information Providers](https://gethomepage.dev/widgets/) page for more information.

## Customization

Homepage is highly customizable, with support for custom themes, custom CSS & JS, custom layouts, formatting, localization and more. See the [Settings](https://gethomepage.dev/configs/settings/) page for more information.

# Getting Started

For configuration options, examples and more, [please check out the homepage documentation](http://gethomepage.dev).

## Security Notice 🔒

Please note that when using features such as widgets, Homepage can access personal information (for example from your home automation system) and Homepage currently does not (and is not planned to) include any authentication layer itself. Thus, we recommend homepage be deployed behind a reverse proxy including authentication, SSL etc, and / or behind a VPN.

## With Docker

Using docker compose:

```yaml
services:
  homepage:
    image: ghcr.io/gethomepage/homepage:latest
    container_name: homepage
    environment:
      HOMEPAGE_ALLOWED_HOSTS: gethomepage.dev # required, may need port. See gethomepage.dev/installation/#homepage_allowed_hosts
      PUID: 1000 # optional, your user id
      PGID: 1000 # optional, your group id
    ports:
      - 3000:3000
    volumes:
      - /path/to/config:/app/config # Make sure your local config directory exists
      - /var/run/docker.sock:/var/run/docker.sock:ro # optional, for docker integrations
    restart: unless-stopped
```

or docker run:

```bash
docker run --name homepage \
  -e HOMEPAGE_ALLOWED_HOSTS=gethomepage.dev \
  -e PUID=1000 \
  -e PGID=1000 \
  -p 3000:3000 \
  -v /path/to/config:/app/config \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  --restart unless-stopped \
  ghcr.io/gethomepage/homepage:latest
```

## From Source

First, clone the repository:

```bash
git clone https://github.com/gethomepage/homepage.git
```

Then install dependencies and build the production bundle:

```bash
pnpm install
pnpm build
```

If this is your first time starting, copy the `src/skeleton` directory to `config/` to populate initial example config files.

Finally, run the server in production mode:

```bash
pnpm start
```

# Configuration

Please refer to the [homepage documentation website](https://gethomepage.dev/) for more information. Everything you need to know about configuring Homepage is there. Please read everything carefully before asking for help, as most questions are answered there or are simple YAML configuration issues.

# Development

Install NPM packages, this project uses [pnpm](https://pnpm.io/) (and so should you!):

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to start.

This is a [Next.js](https://nextjs.org/) application, see their documentation for more information.

# Documentation

The homepage documentation is available at [https://gethomepage.dev/](https://gethomepage.dev/).

Homepage uses Material for MkDocs for documentation. To run the documentation locally, first install the dependencies:

```bash
pip install -r requirements.txt
```

Then run the development server:

```bash
mkdocs serve # or build, to build the static site
```

# Support & Suggestions

If you have any questions, suggestions, or general issues, please start a discussion on the [Discussions](https://github.com/gethomepage/homepage/discussions) page.

## Troubleshooting

In addition to the docs, the [troubleshooting guide](https://gethomepage.dev/troubleshooting/) can help reveal many basic config or network issues. If you're having a problem, it's a good place to start.

## Contributing & Contributors

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

Thanks to the over 200 contributors who have helped make this project what it is today!

Especially huge thanks to [@shamoon](https://github.com/shamoon), who has been the backbone of this community from the very start.
