export class WordWrap {
  static wrap(line: string, maxLineLen: number): string {
    if (line.length <= maxLineLen) {
      return line;
    }

    const indexOfBlank = line.lastIndexOf(" ", maxLineLen);
    let split: number;
    let offset: number;
    if (indexOfBlank > -1) {
      split = indexOfBlank;
      offset = 1;
    } else {
      split = maxLineLen;
      offset = 0;
    }
    return (
      line.substring(0, split) +
      "\n" +
      WordWrap.wrap(line.substring(split + offset), maxLineLen)
    );
  }
}
