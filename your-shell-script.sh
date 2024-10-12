#!/bin/bash

chromium-browser --no-sandbox --disable-gpu --disable-dev-shm-usage --aggressive-cache-discard --disk-cache-size=0 --media-cache-size=0 --disable-extensions | sed 's/^\(.*\)$/<p>\1<\/p>/g' > index.html
