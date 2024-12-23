# Cam's AI & Policy Blog

This is the repository for my personal blog about AI and policy, hosted on GitHub Pages.

## Local Development

To run this site locally:

1. Install Ruby and Bundler if you haven't already
2. Clone this repository
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start the local server
5. Visit `http://localhost:4000` in your browser

## Deployment

This site is automatically deployed to GitHub Pages. To update the site:

1. Make your changes locally
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. GitHub Actions will automatically build and deploy your site to https://camclarke11.github.io

## File Structure

```
.
├── _config.yml
├── _posts/
│   └── 2023-12-23-welcome-to-my-blog.md
├── about.md
├── index.md
├── Gemfile
└── README.md
```

## Theme

This site uses the `jekyll-theme-cayman` theme. You can customize the appearance by overriding theme defaults in the `_config.yml` file. 