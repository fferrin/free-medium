function freeUrl(url) {
  const urlObj = new URL(url)

  urlObj.host = "readmedium.com";

  return urlObj.href;
}


describe("freeUrl", () => {
  it("converts the URLs correctly", () => {
    expect(freeUrl("https://medium.com/my-post")).toBe(
      "https://readmedium.com/my-post"
    );
    expect(freeUrl("https://www.medium.com/my-post")).toBe(
      "https://readmedium.com/my-post"
    );
    expect(freeUrl("https://some-subdomain.medium.com/my-post")).toBe(
      "https://readmedium.com/my-post"
    );
    expect(freeUrl("https://medium.com/hackernoon/hello-world-79436a73e443")).toBe(
      "https://readmedium.com/hackernoon/hello-world-79436a73e443"
    );
  });
});
