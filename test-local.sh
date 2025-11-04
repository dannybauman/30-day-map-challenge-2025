#!/bin/bash
# Quick local test server for day navigation
# Usage: ./test-local.sh

echo "🚀 Starting local test server..."
echo ""
echo "📁 Serving from: $(pwd)"
echo ""
echo "📍 Test URLs:"
echo "   Day 1: http://localhost:8000/maps/01-points/index.html"
echo "   Day 2: http://localhost:8000/maps/02-lines/index.html"
echo "   Day 3: http://localhost:8000/maps/03-polygons/index.html"
echo ""
echo "💡 Press Ctrl+C to stop the server"
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "❌ Python not found. Trying npx serve instead..."
    npx --yes serve . -p 8000
fi

