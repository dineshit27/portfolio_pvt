<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sitemap">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap - M Dinesh Portfolio</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #0f172a;
            color: #cbd5e1;
            margin: 0;
            padding: 40px 20px;
            display: flex;
            justify-content: center;
          }
          .container {
            max-width: 1000px;
            width: 100%;
          }
          header {
            margin-bottom: 30px;
            border-bottom: 1px solid #334155;
            padding-bottom: 20px;
          }
          h1 {
            font-size: 28px;
            font-weight: 700;
            color: #38bdf8;
            margin: 0 0 10px 0;
          }
          p {
            color: #94a3b8;
            margin: 0;
            font-size: 15px;
            line-height: 1.6;
          }
          p a {
            color: #38bdf8;
            text-decoration: none;
          }
          p a:hover {
            text-decoration: underline;
          }
          .stats {
            background-color: #1e293b;
            border: 1px solid #334155;
            border-radius: 8px;
            padding: 12px 20px;
            margin-bottom: 25px;
            font-size: 14px;
            color: #e2e8f0;
            display: inline-block;
          }
          .stats span {
            color: #38bdf8;
            font-weight: 600;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background-color: #1e293b;
            border: 1px solid #334155;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          }
          th, td {
            padding: 14px 20px;
            text-align: left;
            border-bottom: 1px solid #334155;
          }
          th {
            background-color: #0f172a;
            color: #f8fafc;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background-color: #334155;
          }
          .url-link {
            color: #38bdf8;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          .url-link:hover {
            text-decoration: underline;
          }
          .priority-badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            background-color: #0f766e;
            color: #ccfbf1;
          }
          .priority-high {
            background-color: #0369a1;
            color: #e0f2fe;
          }
          .priority-medium {
            background-color: #475569;
            color: #f1f5f9;
          }
          .priority-low {
            background-color: #334155;
            color: #cbd5e1;
          }
          .freq-badge {
            text-transform: capitalize;
            color: #94a3b8;
            font-size: 13px;
          }
          .date {
            color: #94a3b8;
            font-size: 13px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>XML Sitemap</h1>
            <p>
              This is a stylized XML Sitemap generated for search engine optimization. You can find more information about XML Sitemaps on <a href="https://sitemaps.org" target="_blank" rel="noopener">sitemaps.org</a>.
            </p>
          </header>
          <div class="stats">
            Total URLs in this sitemap: <span><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
          </div>
          <table>
            <thead>
              <tr>
                <th style="width: 55%;">URL</th>
                <th style="width: 15%;">Priority</th>
                <th style="width: 15%;">Change Freq.</th>
                <th style="width: 15%;">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" data-type="number" order="descending"/>
                <tr>
                  <td>
                    <a class="url-link">
                      <xsl:attribute name="href">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="priority-badge">
                      <xsl:attribute name="class">
                        <xsl:choose>
                          <xsl:when test="sitemap:priority &gt;= 0.8">priority-badge priority-high</xsl:when>
                          <xsl:when test="sitemap:priority &gt;= 0.5">priority-badge priority-medium</xsl:when>
                          <xsl:otherwise>priority-badge priority-low</xsl:otherwise>
                        </xsl:choose>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <span class="freq-badge">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </span>
                  </td>
                  <td>
                    <span class="date">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
