exports.render = (data) => {
  return `
    <!doctype html>
    <html lang="${data.lang}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title} - ${data.subtitle}</title>
        <meta name="og:title" content="${data.title} - ${data.subtitle}">
        <meta name="og:description" content="${data.description}">
        <meta name="og:image" content="https://yamanoku.net/frontendo-2024/images/ogp-image-${data.lang}.png">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@yamanoku">
        <meta name="twitter:image:alt" content="${data.title} ${data.subtitle}">
        <meta property="og:locale" content="${data.lang}">
        <link rel="stylesheet" href="https://cdn.skypack.dev/yama-normalize">
        <style>footer{padding: var(--y-rhythm-3);text-align: center;}</style>
      </head>
      <body>
        <main id="main">
          <hgroup>
            <h1 style="margin-block-end: 0">${this.budoux(data.title)}</h1>
            <p style="font-size: 1.425rem;">${this.budoux(data.subtitle)}</p>
          </hgroup>
          ${data.content}
        </main>
        <footer>
          <p>Copyright ${this.year()}, Okuto Oyama</p>
          <p>Source : <a href="https://github.com/yamanoku/frontendo-2024/" target="_blank">yamanoku/frontendo-2024</a></p>
        </footer>
      </body>
    </html>
  `;
};
