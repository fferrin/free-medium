function freeUrl(url) {
  const urlObj = new URL(url)

  urlObj.host = "freedium.cfd";

  return urlObj.href;
}


describe("freeUrl", () => {
  it("converts the URLs correctly", () => {
    expect(freeUrl("https://medium.com/my-post")).toBe(
      "https://freedium.cfd/my-post"
    );
    expect(freeUrl("https://www.medium.com/my-post")).toBe(
      "https://freedium.cfd/my-post"
    );
    expect(freeUrl("https://some-subdomain.medium.com/my-post")).toBe(
      "https://freedium.cfd/my-post"
    );
    expect(freeUrl("https://medium.com/hackernoon/hello-world-79436a73e443")).toBe(
      "https://freedium.cfd/hackernoon/hello-world-79436a73e443"
    );
  });
});
