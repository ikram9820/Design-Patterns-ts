import BrowseHistory from "./BrowserHistory";

let browser = new BrowseHistory();

browser.push("google.com");
browser.push("facebook.com");
browser.push("twiter.com");

let browserIterator = browser.createIterator();

while (browserIterator.hasNext()) {
  console.log(browserIterator.current());
  browserIterator.next();
}
