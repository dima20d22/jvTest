function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    console.log(message);
  } else {
    console.log(message.slice(0, maxLength) + "...");
  }
}

formatMessage("aghhhh", 2);

// formatMessage("one two three", 7)
// one two...

// formatMessage("one two three", 6)
// one...
