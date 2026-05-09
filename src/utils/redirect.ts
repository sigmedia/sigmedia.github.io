export function renderRedirectHtml(target: string, title = 'Redirecting | Sigmedia') {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta http-equiv="refresh" content="0;url=${target}">
    <link rel="canonical" href="${target}">
  </head>
  <body>
    <p><a href="${target}">Continue to the new page</a></p>
    <script>window.location.replace(${JSON.stringify(target)});</script>
  </body>
</html>`;
}
