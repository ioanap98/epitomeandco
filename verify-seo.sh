#!/bin/bash

# SEO Optimization Verification Script
# Run this to verify all SEO improvements are in place

echo "🔍 Ioana Web Studio - SEO Verification Report"
echo "=============================================="
echo ""

# Check for required files
echo "📁 Checking for required files..."

files=(
  "next.config.ts"
  "app/layout.tsx"
  "app/ro/layout.tsx"
  "app/ro/page.tsx"
  "lib/seo.ts"
  "lib/locales.ts"
  "public/robots.txt"
  "public/site.webmanifest"
  "next-sitemap.config.js"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ $file (MISSING)"
  fi
done

echo ""
echo "🚀 Next Steps:"
echo "1. Update verification code in app/layout.tsx"
echo "   - Get your code from: https://search.google.com/search-console/"
echo ""
echo "2. Build and test:"
echo "   npm run build"
echo "   npm run dev"
echo ""
echo "3. Test robots.txt:"
echo "   curl http://localhost:3000/robots.txt"
echo ""
echo "4. Submit to Google Search Console:"
echo "   - Go to https://search.google.com/search-console/"
echo "   - Add property: ioanawebstudio.com"
echo "   - Verify with meta tag"
echo "   - Submit sitemap: https://ioanawebstudio.com/sitemap.xml"
echo ""
echo "5. Check Core Web Vitals:"
echo "   - Chrome DevTools > Lighthouse"
echo "   - Or: https://pagespeed.web.dev"
echo ""
