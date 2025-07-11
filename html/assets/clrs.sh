#!/bin/bash

# Input and output directories
INPUT_DIR="./Kom_fix3"
OUTPUT_DIR="./output"

mkdir -p "$OUTPUT_DIR"

for file in "$INPUT_DIR"/*.png; do
  filename=$(basename "$file")
  temp_file="/tmp/$filename"
  output="$OUTPUT_DIR/$filename"

  echo "Processing $filename..."

  # Step 1: Reduce to 4 colors with alpha
  gm convert "$file" +dither -colorspace Gray  -colors 4 -define png:color-type=6 "$temp_file"

  # Step 2: Compress and convert to indexed PNG using pngquant
  pngquant 4 --force --output "$output" "$temp_file"
done

echo "✅ Done! Optimized files saved in $OUTPUT_DIR"
